import NavBar from '../NavBar';
import './MainQuiz.css';
import ask_the_expert from '../Images/ask_the_expert.png';
import fifty_fifty from '../Images/fifty_fifty.png';
import flip_the_question from '../Images/flip_the_question.png';
import audience_poll from '../Images/audience_poll.png';
import user from '../Images/user.png';
import {useState, useEffect} from 'react';
import axios from 'axios';

let question_list = [
  {
    question: 'Who is strongest character?',
    level: 1,
    option1: 'Tom',
    option2: 'Jerry',
    option3: 'Ben 10',
    option4: 'Chota Bheem',
    correctOption: 1,
  },
  {
    question: 'Gara from Naruto series is from ?',
    level: 2,
    option1: 'Rajasthan',
    option2: 'Leaf Village',
    option3: 'Sand Village',
    option4: 'Village Area',
    correctOption: 3,
  },
  {
    question: 'Will is get a girlfriend ?',
    level: 3,
    option1: 'No',
    option2: 'Yes',
    option3: 'Lol',
    option4: "Beggars can't be choosers",
    correctOption: 4,
  },
];

function MainQuiz () {
  const [isInfoColleted, setIsInfoCollected] = useState (false);
  const [participantName, setParticipantName] = useState ('');
  const [amountCollected, setAmountCollected] = useState (0);
  const [lifeLineUsed, setLifeLineUsed] = useState ([]);
  const [checkPoints, setCheckPoints] = useState ([5, 5]);

  const [currentLevel, setCurrentLevel] = useState (1);
  const [currentQuestion, setCurrentQuestion] = useState ('');
  const [option1, setOption1] = useState ('');
  const [option2, setOption2] = useState ('');
  const [option3, setOption3] = useState ('');
  const [option4, setOption4] = useState ('');
  const [color1, setColor1] = useState ('');
  const [color2, setColor2] = useState ('');
  const [color3, setColor3] = useState ('');
  const [color4, setColor4] = useState ('');

  const [correctOption, setCorrectOption] = useState (3);
  const [currentChosenOption, setCurrentChosenOption] = useState ('');

  let lifeline = 'lifeline';
  let buttonStyle = 'btn btn-primary m-4 px-4 py-2 fw-bold';

  const level_list = [
    3000,
    2500,
    2000,
    1500,
    1200,
    800,
    400,
    200,
    100,
    50,
    20,
    10,
    5,
  ];

  useEffect (
    () => {
      axios
        .post ('http://localhost:3001/find', {
          level: currentLevel,
        })
        .then (res => {
          question_list = res.data;
          let random_index = Math.floor (Math.random () * question_list.length);
          console.log (random_index);
          const e = res.data[random_index];
          setCurrentQuestion (e.question);
          setOption1 (e.option1);
          setOption2 (e.option2);
          setOption3 (e.option3);
          setOption4 (e.option4);
          setCorrectOption (e.correctOption);
          setColor1 ('');
          setColor2 ('');

          setColor3 ('');
          setColor4 ('');
        })
        .catch (err => {
          console.log (currentLevel, err);
        });
    },
    [currentLevel]
  );
  const handleQuit = () => {
    alert (
      `Congratulations on winning: "${amountCollected} RS." Your score has been added`
    );
    window.location = 'http://localhost:3000/';
  };
  const expertAdvise = () => {
    if (lifeLineUsed.includes ('Expert Advise')) {
      return;
    }
    setLifeLineUsed ([...lifeLineUsed, 'Expert Advise']);
  };
  const fiftyFifty = () => {
    if (lifeLineUsed.includes ('50/50')) {
      return;
    }

    switch (correctOption) {
      case 1:
        setColor2 ('#ddd');
        setColor4 ('#ddd');
        break;
      case 2:
        setColor3 ('#ddd');
        setColor1 ('#ddd');
        break;
      case 3:
        setColor2 ('#ddd');
        setColor1 ('#ddd');
        break;
      case 4:
        setColor2 ('#ddd');
        setColor3 ('#ddd');
        break;
      default:
        break;
    }

    setLifeLineUsed ([...lifeLineUsed, '50/50']);
  };
  const flipTheQuestion = () => {
    if (lifeLineUsed.includes ('Flip the Question')) {
      return;
    }
    setLifeLineUsed ([...lifeLineUsed, 'Flip the Question']);
  };
  const audiencePoll = () => {
    if (lifeLineUsed.includes ('Audience Poll')) {
      return;
    }
    setLifeLineUsed ([...lifeLineUsed, 'Audience Poll']);
  };

  const resetAllColor = () => {
    setColor1 ('');
    setColor2 ('');
    setColor3 ('');
    setColor4 ('');
  };

  const handleOptionSelect = option => {
    setCurrentChosenOption (option);
    resetAllColor ();
    switch (option) {
      case 1:
        setColor1 ('#29044d');
        break;
      case 2:
        setColor2 ('#29044d');
        break;
      case 3:
        setColor3 ('#29044d');
        break;
      case 4:
        setColor4 ('#29044d');
        break;
      default:
        break;
    }
  };

  const lockAnswer = () => {
    if (currentChosenOption === correctOption && amountCollected < 3000) {
      setAmountCollected (level_list[13 - currentLevel]);
      switch (currentChosenOption) {
        case 1:
          setColor1 ('green');
          break;
        case 2:
          setColor2 ('green');
          break;
        case 3:
          setColor3 ('green');
          break;
        case 4:
          setColor4 ('green');
          break;
        default:
          break;
      }
    } else {
      switch (currentChosenOption) {
        case 1:
          setColor1 ('red');
          break;
        case 2:
          setColor2 ('red');
          break;
        case 3:
          setColor3 ('red');
          break;
        case 4:
          setColor4 ('red');
          break;
        default:
          break;
      }
      setTimeout (() => {
        let amount = 0;
        for (let i in checkPoints) {
          if (checkPoints[i] <= amountCollected) {
            amount = checkPoints[i];
          }
        }
        alert (
          `Alas, this was a wrong answer, as per your most recent checkpoint you will get ${amount}`
        );
        window.location = 'http://localhost:3000/';
      }, 1000);
    }
  };

  const nextQuestion = () => {
    if (amountCollected === level_list[13 - currentLevel]) {
      setCurrentLevel (currentLevel + 1);
    }
  };

  return (
    <div className="main-quiz-bg">

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="form-group col-md-6">
                <label htmlFor="inputOption1" style={{color: '#441078'}}>
                  Name:
                </label>
                <input
                  type="text"
                  value={participantName}
                  className="form-control"
                  id="inputOption1"
                  onChange={e => setParticipantName (e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputOption1" style={{color: '#441078'}}>
                  Checkpoint 1:
                </label>
                <input
                  type="text"
                  value={checkPoints[0]}
                  className="form-control"
                  id="inputOption1"
                  onChange={e =>
                    setCheckPoints ([e.target.value, checkPoints[1]])}
                />
                <label htmlFor="inputOption1" style={{color: '#441078'}}>
                  Checkpoint 2:
                </label>
                <input
                  type="text"
                  value={checkPoints[1]}
                  className="form-control"
                  id="inputOption1"
                  onChange={e =>
                    setCheckPoints ([checkPoints[0], e.target.value])}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => setIsInfoCollected (true)}
              >
                Save Changes

              </button>
            </div>
          </div>
        </div>
      </div>
      <NavBar bg_color={'#441078'} />
      <div className="holder">
        <div className="container mb-5">
          {isInfoColleted
            ? <div className="userInfo">
                <span>
                  <img
                    src={user}
                    alt="user"
                    style={{width: '50px', height: '50px', margin: '5px'}}
                  />
                  <p>Welcome, {participantName}</p>
                </span>
                <span>
                  <p>Amount Collected: {amountCollected}</p>
                  <p>
                    Lifeline Used:
                    {' '}
                    {lifeLineUsed.length > 0
                      ? lifeLineUsed.map (e => e + ', ')
                      : 'None'}
                  </p>
                  <p>Checkpoints: {checkPoints[0] + ' & ' + checkPoints[1]}</p>
                </span>

              </div>
            : <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add user Information
              </button>}
          {!isInfoColleted
            ? <div
                className="alert alert-primary"
                role="alert"
                style={{marginTop: '300px'}}
              >
                Add user information to start
              </div>
            : <div>
                <div className="row">
                  <div className="col-12 ">
                    <p className="fw-bold mt-5 question">
                      {currentQuestion}
                    </p>
                    <div>
                      <div className="row">
                        <div className="col-md-6 option">
                          <input
                            type="radio"
                            name="box"
                            id="one"
                            onClick={() => handleOptionSelect (1)}
                          />
                          <label
                            htmlFor="one"
                            className="box one w-100"
                            style={{backgroundColor: color1}}
                          >
                            <div className="course">

                              <div className="ABCD">A:</div>

                              <span className="subject">{option1}</span>

                            </div>
                          </label>
                        </div>
                        <div className="col-md-6 option">
                          <input
                            type="radio"
                            name="box"
                            id="two"
                            onClick={() => handleOptionSelect (2)}
                          />
                          <label
                            htmlFor="two"
                            className="box two w-100"
                            style={{backgroundColor: color2}}
                          >
                            <div className="course">

                              <div className="ABCD">B:</div>

                              <span className="subject"> {option2} </span>

                            </div>
                          </label>
                        </div>
                        <div className="col-md-6 option">
                          <input
                            type="radio"
                            name="box"
                            id="three"
                            onClick={() => handleOptionSelect (3)}
                          />
                          {' '}
                          <label
                            htmlFor="three"
                            className="box three w-100"
                            style={{backgroundColor: color3}}
                          >
                            <div className="course">

                              <div className="ABCD">C:</div>

                              <span className="subject"> {option3} </span>

                            </div>
                          </label>
                        </div>
                        <div className="col-md-6 option">
                          <input
                            type="radio"
                            name="box"
                            id="four"
                            onClick={() => handleOptionSelect (4)}
                          />
                          {' '}
                          <label
                            htmlFor="four"
                            className="box four w-100"
                            style={{backgroundColor: color4}}
                          >
                            <div className="course">

                              <div className="ABCD">D:</div>

                              <span className="subject"> {option4} </span>

                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-center">

                    <button className={buttonStyle} onClick={lockAnswer}>
                      Lock
                    </button>
                    <button
                      className={buttonStyle}
                      onClick={amountCollected => handleQuit (amountCollected)}
                    >
                      Quit
                    </button>
                    <button className={buttonStyle} onClick={nextQuestion}>
                      Next
                    </button>

                  </div>
                </div>
              </div>}
        </div>
        <div>
          <ul className="list-group list-group-flush sidebar">
            <div className="lifelines">
              <img
                className={lifeline}
                src={ask_the_expert}
                alt="Ask the expert"
                onClick={() => expertAdvise ()}
              />
              <img
                className={lifeline}
                src={fifty_fifty}
                alt="50/50"
                onClick={() => fiftyFifty ()}
              />
              <img
                className={lifeline}
                src={flip_the_question}
                alt="Flip Question"
                onClick={() => flipTheQuestion ()}
              />
              <img
                className={lifeline}
                src={audience_poll}
                alt="Audience Poll"
                onClick={() => audiencePoll ()}
              />
              {/* <img className="lifeline" src={phone_a_friend} alt="Phone Friend" /> */}
            </div>
            <div className="levels">
              {level_list.map ((e, i) => {
                let classes = 'list-group-item p-2 level ';
                if (13 - i < currentLevel) {
                  classes += ' green-color';
                }

                if (13 - i === currentLevel) {
                  classes += ' gold-color';
                }

                for (let k in checkPoints) {
                  if (checkPoints[k] == e) {
                    classes += ' white-color';
                    break;
                  }
                }

                return (
                  <li key={i} className={classes}>
                    <span>{13 - i}:</span>
                    {/* {' '}
                    {13 - i < currentLevel ? <span className="circle" /> : ''}
                    {' '} */}
                    {e}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default MainQuiz;
