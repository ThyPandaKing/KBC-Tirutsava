import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainQuiz from './Game/MainQuiz';
import AddQuestion from './AddQuestions/AddQuestions';
import Home from './Home';


function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/add-question" element={<AddQuestion />} />

          <Route path="/main-quiz" element={<MainQuiz />} />

          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
