CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(225) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES 
    ('My first Note', 'A note about something do not forget'),
    ('My second Note', 'A note about something else do not forget');
