const db = require('../models');

const getQuestions = async (req, res) => {
    try {
      const questions = await db.Question.findAll({
        include: [{ model: db.Answer, as: 'answers' }],
      });
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

module.exports = {
  getQuestions,
};
