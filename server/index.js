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

massive( process.env.CONNECTION_STRING )
    .then( db => {
      app.set( "db", db);
})
    .catch( console.log );

app.use( json() );
app.use( cors() );
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
        console.log(response)
        if(!response[0]){
            const {sub, name, gender, locale}= profile._json
            console.log(profile._json)
            app.get( 'db' )
            .createUserByAuthid({id: sub, name: name, gender: gender, locale: locale })
            .then(created => {
                console.log(created)
              return done(null, created[0]);
            });
        }else{
            console.log("work!!!")
            return done(null, response[0]);
        }
      });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


app.get('/auth', passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
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

app.put("/api/name", (req, res)=> {
    const db = req.app.get('db');

    db.updateUser([req.body.id, req.body.name, req.body.age, req.body.gender, req.body.bio, req.body.locale])
    .then(response => res.json(response[0]))
    .catch(console.log);
});

app.listen( process.env.PORT || 3001, () => {
    console.log( `App listening on port ${ process.env.PORT || 3001 }!` );
});