import {useState} from 'react';
import NavBar from '../NavBar';
import './AddQuestion.css';

function AddQuestions () {
  const [question, setQuestion] = useState ('');
  const [level, setLevel] = useState ('');
  const [option1, setOption1] = useState ('');
  const [option2, setOption2] = useState ('');
  const [option3, setOption3] = useState ('');
  const [option4, setOption4] = useState ('');
  const [correctOption, setCorrectOption] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (
      question,
      level,
      option1,
      option2,
      option3,
      option4,
      correctOption
    );
  };

  return (
    <div className="add-question-bg">
      <NavBar />
      <div className='background'>      <div className="form">
        <form>
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
            <div className="form-group col-md-6">
              <label htmlFor="inputCorrectOption">Correct Option</label>
              <input
                type="text"
                value={correctOption}
                className="form-control"
                id="inputCorrectOption"
                onChange={e => setCorrectOption (e.target.value)}
              />
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
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
                <option>Level 5</option>
                <option>Level 6</option>
                <option>Level 7</option>
                <option>Level 8</option>
                <option>Level 9</option>
                <option>Level 10</option>
                <option>Level 11</option>
                <option>Level 12</option>
                <option>Level 13</option>
              </select>
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

        </form>
      </div>
      </div>
    </div>
  );
}

export default AddQuestions;
