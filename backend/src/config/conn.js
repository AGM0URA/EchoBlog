import { Sequelize } from "sequelize";

const conn = new Sequelize("echoblog", "root", "Sen@iDev77!.", {
  host: "localhost",
  dialect: "mysql",
});

export default conn
