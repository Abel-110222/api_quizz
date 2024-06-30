module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('answers', {
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },{
        timestamps: false, // Desactivar timestamps automáticos
      });
  
    return Answer;
  };
  