// // Uncomment this block to use sqlite
// module.exports = {
//     dialect: "sqlite",
//     storage: "./my-db.sqlite",
// }

// Uncomment this block to use mysql
module.exports = {
    hostname: "mysql",
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "admin",
    database: "mysql",
    port: 3306
}

// TODO : adapt this file to load parameters from environment variables (process.env.VARIABLE_NAME)