module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('questions', {
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      timestamps: false, // Desactivar timestamps automáticos
    });
  
    return Question;
  };
  