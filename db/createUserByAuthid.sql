INSERT INTO users (authid, name, gender, locale) VALUES ($1, $2, $3, $4);
SELECT * FROM users WHERE authid = $1;