import NavBar from '../NavBar';
import './MainQuiz.css';
import ask_the_expert from '../Images/ask_the_expert.png';
import fifty_fifty from '../Images/fifty_fifty.png';
import flip_the_question from '../Images/flip_the_question.png';
import audience_poll from '../Images/audience_poll.png';
import phone_a_friend from '../Images/phone_a_friend.webp';
import user from '../Images/user.png';

function MainQuiz () {
  return (
    <div className="main-quiz-bg">
      <NavBar />
      <div className="holder">
        <div className="container mb-5">
          <div className="userInfo">
            <span>
              <img
                src={user}
                alt="user"
                style={{width: '50px', height: '50px', margin: '5px'}}
              />
              <p>Welcome, Aditya Sharma</p>
            </span>
            <span>
              <p>Amount Collected: 1000</p>
              <p>Lifeline Used: None</p>
              <p>Checkpoints: 50 & 1000</p>
            </span>

          </div>

          <div className="row">
            <div className="col-12 ">
              <p className="fw-bold mt-5 question">
                2. Complete the following sentences:Alice couldn't _______ the humilation any longer and stormed out of the room red as a bed
              </p>
              <div>
                <div className="row">
                  <div className="col-md-6 option">
                    <input type="radio" name="box" id="one" />
                    <label htmlFor="one" className="box one w-100">
                      <div className="course">

                        <div className="ABCD">A:</div>

                        <span className="subject">is</span>

                      </div>
                    </label>
                  </div>
                  <div className="col-md-6 option">
                    <input type="radio" name="box" id="two" />
                    <label htmlFor="two" className="box two w-100">
                      <div className="course">

                        <div className="ABCD">B:</div>

                        <span className="subject"> was </span>

                      </div>
                    </label>
                  </div>
                  <div className="col-md-6 option">
                    <input type="radio" name="box" id="three" /> <label
                      htmlFor="three"
                      className="box three w-100"
                    >
                      <div className="course">

                        <div className="ABCD">C:</div>

                        <span className="subject"> will </span>

                      </div>
                    </label>
                  </div>
                  <div className="col-md-6 option">
                    <input type="radio" name="box" id="four" /> <label
                      htmlFor="four"
                      className="box four w-100"
                    >
                      <div className="course">

                        <div className="ABCD">D:</div>

                        <span className="subject"> None of the above </span>

                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-center">

              <button className="btn btn-primary m-4 px-4 py-2 fw-bold disabled">
                Lock
              </button>
              <button className="btn btn-primary m-4 px-4 py-2 fw-bold">
                Quit
              </button>
              <button className="btn btn-primary m-4 px-4 py-2 fw-bold disabled">
                Next
              </button>

            </div>
          </div>

        </div>
        <div>
          <ul className="list-group list-group-flush sidebar">
            <div className="lifelines">
              <img
                className="lifeline"
                src={ask_the_expert}
                alt="Ask the expert"
              />
              <img className="lifeline" src={fifty_fifty} alt="50/50" />
              <img
                className="lifeline"
                src={flip_the_question}
                alt="Flip Question"
              />
              <img
                className="lifeline"
                src={audience_poll}
                alt="Audience Poll"
              />
              {/* <img className="lifeline" src={phone_a_friend} alt="Phone Friend" /> */}
            </div>
            <div className='levels'>
            <li className="list-group-item p-2 level">
              <span>13:</span> 3,000
            </li>
            <li className="list-group-item p-2 level">
              <span>12:</span> 2,500
            </li>
            <li className="list-group-item p-2 level">
              <span>11:</span> 2,000
            </li>
            <li className="list-group-item p-2 level">
              <span>10:</span> 1,500
            </li>
            <li className="list-group-item p-2 level"><span>9:</span>1,200</li>
            <li className="list-group-item p-2 level"><span>8:</span>800</li>
            <li className="list-group-item p-2 level"><span>7:</span>400</li>
            <li className="list-group-item p-2 level"><span>6:</span>200</li>
            <li className="list-group-item p-2 level"><span>5:</span>100</li>
            <li className="list-group-item p-2 level"><span>4:</span>50</li>
            <li className="list-group-item p-2 level"><span>3:</span>20</li>
            <li className="list-group-item p-2 level"><span>2:</span>10</li>
            <li className="list-group-item p-2 level"><span>1:</span> 5</li>
            </div>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default MainQuiz;
