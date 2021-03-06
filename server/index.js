require ( "dotenv" ) .config();
const express = require ( "express" );
const { json } = require ( "body-parser" );
const cors = require ( "cors" );
const session = require ( "express-session" );
const massive = require ( "massive" );
const passport = require ( "passport" );
const Auth0Strategy = require ( "passport-auth0" )

const {
    AUTH_DOMAIN,
    CLIENT_SECRET,
    CLIENT_ID,
    PORT,
    CONNECTION_STRING,
    SESSION_SECRET
} = process.env;

const app = express();

app.use( json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING )
    .then( db => {
      app.set( "db", db);
})
    .catch( console.log );


app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge:525600*60*1000
        }
    })
);

app.use( passport.initialize() );
app.use( passport.session() );

//****any stored user data to the DB will be done through here****
passport.use( new Auth0Strategy(
    {
    domain: AUTH_DOMAIN,
    clientSecret: CLIENT_SECRET,
    clientID: CLIENT_ID,
    callbackURL: '/auth',
    scope: "openid profile"
    }, 
    ( accessToken, refreshToken, extraParams, profile, done ) => {      
    app.get( 'db' )
    .getUserByAuthid(profile.id)
    .then(response => {
        
        if(!response[0]){
            const {sub, name, gender, locale}= profile._json
            
            app.get( 'db' )
            .createUserByAuthid([ sub,  name, gender, locale ])
            .then(created => {
                
              return done(null, created[0]);
            });
        }else{
            return done(null, response[0]);
        }
      });


    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


app.get('/auth', passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/choose",
    failureRedirect: "http://localhost3000/login"
    })
 );


 app.get('/api/me', (req, res, next) => {
     if(req.user) res.json(req.user);
     else res.redirect("/auth");
 });

app.get("/api/test", ( req, res ) => {
    const db = req.app.get("db");

    db.users
    .find({})
    .then( response => {
        res.json(response);
    })
    .catch(console.log);
});

app.post("/api/name", (req, res)=> {
    const db = req.app.get('db');
    // console.log(req.body)
    console.log(req.user, "Itsright here!")

    const {username, name, age, bio, image_url, gender, locale } = req.body

    db.updateUser([req.user.id, username, name, age, bio, image_url, gender, locale])
    .then(response => res.json(response[0]))
    .catch(console.log);
});

app.get('/api/profile', (req, res, next) =>{
    const db = req.app.get("db");
    console.log(req.user, "here i am!")

    db.getUserByAuthid([req.user.authid])
    .then(response => {
        res.json(response);
    })
    .catch(console.log)
})






app.listen( process.env.PORT || 3001, () => {
    console.log( `App listening on port ${ process.env.PORT || 3001 }!` );
});