

const PORT= 3000;
const DB_CONNECTION_URL='mongodb://localhost:27017/wild-exam';
const JWT_SECRET= "B2253717A666F496354B1411A528E";
const AUTH_TOKEN_NAME= 'logInToken';
const SALT_ROUNDS=10;

module.exports={
    PORT,
    DB_CONNECTION_URL,
    JWT_SECRET,
    AUTH_TOKEN_NAME,
    SALT_ROUNDS
}