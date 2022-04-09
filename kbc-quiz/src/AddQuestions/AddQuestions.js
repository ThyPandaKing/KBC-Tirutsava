import {useState} from 'react';
import NavBar from '../NavBar';
import './AddQuestion.css';
import axios from 'axios';

function AddQuestions () {
  const [question, setQuestion] = useState ('');
  const [level, setLevel] = useState ('');
  const [option1, setOption1] = useState ('');
  const [option2, setOption2] = useState ('');
  const [option3, setOption3] = useState ('');
  const [option4, setOption4] = useState ('');
  const [correctOption, setCorrectOption] = useState ('');
  const [loading, setLoading] = useState (false);

  const handleSubmit = e => {
    e.preventDefault ();
    setLoading (true);
    // console.log (Number(correctOption), Number(level), question);
    setCorrectOption (Number (correctOption));
    setLevel (Number (level));

    axios
      .post (`http://localhost:3001/add-question`, {
        question,
        level,
        option1,
        option2,
        option3,
        option4,
        correctOption,
      })
      .then (res => {
        console.log (res.data);
        window.location.reload ();
      })
      .catch (err => console.log (err));
  };

  return (
    <div className="add-question-bg">
      <NavBar />
      <div className="background">

        <div className="form">
          {loading
            ? <div>
                <div className="spinner-grow text-primary" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-success" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-info" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-light" role="status">
                  <span className="sr-only" />
                </div>
                <div className="spinner-grow text-dark" role="status">
                  <span className="sr-only" />
                </div>
              </div>
            : <form>
                <label htmlFor="inputQuestion">
                  Question
                </label>
                <textarea
                  id="inputQuestion"
                  className="form-control"
                  aria-label="With textarea"
                  value={question}
                  onChange={e => setQuestion (e.target.value)}
                />
                <div className="form-row">
                  <div className="options">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputOption1">Option 1</label>
                      <input
                        type="text"
                        value={option1}
                        className="form-control"
                        id="inputOption1"
                        onChange={e => setOption1 (e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputOption2">Option 2</label>
                      <input
                        type="text"
                        value={option2}
                        className="form-control"
                        id="inputOption2"
                        onChange={e => setOption2 (e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputOption3">Option 3</label>
                      <input
                        type="text"
                        value={option3}
                        className="form-control"
                        id="inputOption3"
                        onChange={e => setOption3 (e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputOption4">Option 4</label>
                      <input
                        type="text"
                        value={option4}
                        className="form-control"
                        id="inputOption4"
                        onChange={e => setOption4 (e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    style={{display: 'flex', justifyContent: 'space-between'}}
                  >
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Correct Option</label>
                      <select
                        id="inputState"
                        className="form-control"
                        value={correctOption}
                        onChange={e => setCorrectOption (e.target.value)}
                      >
                        <option defaultValue>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Level</label>
                      <select
                        id="inputState"
                        className="form-control"
                        value={level}
                        onChange={e => setLevel (e.target.value)}
                      >
                        <option defaultValue>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={e => handleSubmit (e)}
                  style={{margin: '10px'}}
                >
                  Add Question
                </button>

              </form>}
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{width:'100%'}}
        onClick={() => window.open ('http://localhost:3001/question', '_blank')}
      >
        Show all question
      </button>
    </div>
  );
}

export default AddQuestions;
