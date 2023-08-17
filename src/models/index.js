const { usersSchema, UsersClass } = require("../models/users.schema");

function setupModels(sequelize) {
    UsersClass.init(usersSchema,UsersClass.config(sequelize));
}

module.exports = setupModels;