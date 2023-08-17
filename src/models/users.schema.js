const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "DAKA_REPORT_USUARIOS";
const modelName = "modelDkReportUsers";

const usersSchema = {
  idUser: {
    field: "ID_USUARIO",
    allowNull: false,
    type: DataTypes.STRING(20),
    primaryKey: true,
  },
  username: {
    field: "NOMBRE_USUARIO",
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  email: {
    field: "EMAIL",
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  password: {
    field: "PASSWORD",
    allowNull: false,
    type: DataTypes.STRING(30),
  },
  usrcre: {
    field: "USRCRE",
    allowNull: true,
    type: DataTypes.STRING(10),
  },
  feccre: {
    field: "FECCRE",
    allowNull: true,
    type: DataTypes.DATE,
    default: Sequelize.NOW
  },
};

class NameTaRelacionPuesto extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    };
  }
}

module.exports = {
  tableName,
  usersSchema,
  UsersClass,
};