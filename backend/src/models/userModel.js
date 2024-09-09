import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const User = conn.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    },
    senha: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    papel: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'leitor', 
    },
  },
  {
    tableName: "users", 
    timestamps: true,  
  }
);

export default User;