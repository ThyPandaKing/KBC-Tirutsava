import NavBar from '../NavBar';
import './MainQuiz.css';

function MainQuiz () {
  return (
    <div className="main-quiz-bg">
      <NavBar />
      <div className="holder">
        <div className="container mb-5">
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
            <div className="col-12">
              <div className="d-flex justify-content-center">

                <button className="btn btn-primary px-4 py-2 fw-bold">
                  continue
                </button>

              </div>
            </div>
          </div>

        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: '25%'}}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Level 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainQuiz;
