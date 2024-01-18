module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'quizapi',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000,
    },
}