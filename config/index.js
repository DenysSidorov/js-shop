const config = {
    frontend: {

    },
    backend: {
        port: 3000,
        database: 'mongodb://localhost:27017/shop',
        secretWord: 'verysecretkey',
        mailSend: {
            service: "Gmail",
            auth: {
                user: "1qazxsw23edccde3@gmail.com",
                pass: "4rfvbgt5"
            }
        },
    },
};
export default config;