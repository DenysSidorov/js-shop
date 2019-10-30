var configApp = {
    frontend: {
        port: 8090,
        domain: 'localhost',
        apiPort: 3000 // 3009
    },
    backend: {
        port: process.env.PORT, //3000
        database: process.env.MONGODB_URI, // 'mongodb://localhost:27017/shop'
        domain: process.env.SERVER_DOMAIN,
        secretWord: 'verysecretkey', //process.env.SECRET_WORD, // 'verysecretkey'
        mailSend: {
            service: "Gmail",
            auth: {
                user: process.env.E_U, // "1qazxsw,
                pass: process.env.E_P //
            }
        },
    },
};
module.exports = configApp;
