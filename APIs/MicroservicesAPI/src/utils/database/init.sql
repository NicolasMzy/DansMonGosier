BEGIN;

CREATE DATABASE IF NOT EXISTS dmg;
CREATE EXTENSION citext;

CREATE TABLE IF NOT EXISTS dmg.credentials (
    id          SERIAL PRIMARY KEY,
    email       citext UNIQUE,
    phone_nb    VARCHAR(20),
    pwd         VARCHAR(100) NOT NULL,
    user_type   VARCHAR(20) NOT NULL,
    id_adress   INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS dmg.user (
    id              SERIAL PRIMARY KEY,
    first_name      VARCHAR(50) NOT NULL,
    last_name       VARCHAR(50) NOT NULL,
    id_credentials  INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS dmg.restaurant (
    id              SERIAL PRIMARY KEY,
    business_name   VARCHAR(100) NOT NULL,
    id_credentials  INTEGER NOT NULL,
);
CREATE TABLE IF NOT EXISTS dmg.adress (
    id          SERIAL PRIMARY KEY,
    line_1      VARCHAR(100) NOT NULL,
    line_2      VARCHAR(100),
    city        VARCHAR(50) NOT NULL,
    country     VARCHAR(50) NOT NULL,
    postcode    VARCHAR(10) NOT NULL
);
CREATE TABLE IF NOT EXISTS dmg.sponsor (
    bonus           VARCHAR(50),
    progress        VARCHAR(20),
    id_sponsor      INTEGER NOT NULL,
    id_sponsored    INTEGER NOT NULL
);

ALTER TABLE dmg.credentials
    ADD CONSTRAINT fk_adress FOREIGN KEY (id_adress) REFERENCES dmg.adress (id);
ALTER TABLE dmg.user
    ADD CONSTRAINT fk_credentials FOREIGN KEY (id_credentials) REFERENCES dmg.credentials (id);
ALTER TABLE dmg.restaurant
    ADD CONSTRAINT fk_credentials FOREIGN KEY (id_credentials) REFERENCES dmg.credentials (id);
ALTER TABLE dmg.sponsor
    ADD CONSTRAINT fk_sponsor FOREIGN KEY (id_sponsor) REFERENCES dmg.user (id);
ALTER TABLE dmg.sponsor
    ADD CONSTRAINT fk_sponsored FOREIGN KEY (id_sponsored) REFERENCES dmg.user (id);

COMMIT;