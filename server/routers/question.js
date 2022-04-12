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

  Question.find ({})
    .sort ({time: -1})
    .then (questions => {
      const listFromUser = questions.filter (
        q => q.level === level && q.used === false
      );

      res.json (listFromUser);
    })
    .catch (err => console.log ('from question.js ' + err));
});

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

router.put ('/update-level', async (req, res) => {
  try {
    const {id} = req.body;
    console.log (id);

    Question.findByIdAndUpdate (
      id,
      {
        used: true,
      },
      {new: true},
      (err, result) => {
        if (err) {
          console.log (err);
        } else {
          console.log ('updated');
        }
      }
    );

    res.send ('ook');
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

router.put ('/reset-all', async (req, res) => {
  try {
    let q = [];
    await Question.find ({}).then (questions => {
      q = questions;
    });
    

    await q.forEach (element => {
       Question.findByIdAndUpdate (
        element._id,
        {
          used: false,
        },
        {new: true},
        (err, result) => {
          if (err) {
            console.log (err);
          } else {
            console.log ('updated');
          }
        }
      );
    });

    res.send ('ook');
  } catch (err) {
    console.log (err);
    res.send ('some error');
  }
});

module.exports = router;
