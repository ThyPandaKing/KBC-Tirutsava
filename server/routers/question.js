// importing important files for routing and schemas for mongodb
const express = require ('express');
const router = express.Router ();
const user = require ('../models/user');
const Question = require ('../models/question');

router.use (express.json ());

router.get ('/question', async (req, res) => {
  Question.find ({}).then (questions => {
    res.send (questions);
  });
});

router.post ('/find', async (req, res) => {
  const {level} = req.body;
  console.log (level);
  Question
    .find ({})
    .sort ({time: -1})
    .then (questions => {
      const listFromUser = questions.filter (q => q.level === level);
      console.log (listFromUser);
      res.json (listFromUser);
    })
    .catch (err => console.log ('from question.js ' + err));
});

// this request will send the questions in most recent first order
router.post ('/add-question', async (req, res) => {
  try {
    const {
      question,
      level,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    } = req.body;
    if (
      !question ||
      !option1 ||
      !option2 ||
      !option3 ||
      !option4 ||
      !correctOption ||
      !level
    ) {
      return res.send ('Fill All the details');
    }

    const newQuestion = new Question ({
      question,
      level,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    });

    const postResult = await newQuestion
      .save ()
      .then (result => res.send ('done'))
      .catch (err => {
        res.status (403).send ({msg: 'User Already Exists'});
      });
  } catch (err) {
    console.log ('err', err);
  }
});

// this method is used to check if the user has already liked the answer or not
router.post ('/check', async (req, res) => {
  try {
    const {userId, answerId} = req.body;

    await askSomethingAnswer
      .findById (answerId)
      .then (resp => {
        if (resp) {
          const LikeId = resp.liked.find (likeId => likeId === userId);
          // user has liked it
          if (LikeId) {
            return res.send ('liked');
          }
          const dislikeId = resp.disliked.find (
            dislikeId => dislikeId === userId
          );
          // user has disliked it
          if (dislikeId) {
            return res.send ('disliked');
          }

          // nothing is done
          return res.send ('none');
        } else {
          return res.send ('none');
        }
      })
      .catch (err => console.log (err));
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

module.exports = router;
