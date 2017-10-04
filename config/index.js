const config = {
    frontend: {
        port: 8090,
        domain: 'localhost'
    },
    backend: {
        port: process.env.PORT, //3000
        database: process.env.MONGODB_URI, // 'mongodb://localhost:27017/shop'
        domain: 'localhost',
        secretWord: process.env.SECRET_WORD, // 'verysecretkey'
        mailSend: {
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER , // "1qazxsw,
                pass: process.env.EMAIL_PASSWORD //
            }
        },
    },

};
export default config;