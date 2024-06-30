const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar y definir modelos aquí
db.Question = require('./question')(sequelize, Sequelize);
db.Answer = require('./answer')(sequelize, Sequelize);

// Definir relaciones
db.Question.hasMany(db.Answer, { as: 'answers', foreignKey: 'question_id' });
db.Answer.belongsTo(db.Question, { foreignKey: 'question_id' });

module.exports = db;
