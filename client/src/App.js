import SignUpAll from "./Pages/SignUpAll"
import StudentLogin from "./Pages/StudentLogin";
import QuizLogin from "./Pages/QuizLogin";
import Quiz from "./Pages/Quiz";
import AboutUs from "./Pages/AboutUs";
import Leaderboard from "./Pages/Leaderboard";
import Quizzania from "./Pages/Quizzania";
import LogInAll from "./Pages/LogInAll";
import TeacherLogin from "./Pages/TeacherLogin";
import TeacherSignup from "./Pages/TeacherSignup";
import { Route, Routes } from "react-router-dom";
import StudentSignup from "./Pages/StudentSignup";
import QuizForm from "./Pages/QuizForm";
import TeacherAfterLog from "./Pages/TeacherAfterLog";


function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/teacher" element={<TeacherAfterLog />} />
      <Route exact path="/" element={<Quizzania />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/leaderboard" element={<Leaderboard />} />
      <Route exact path="/quiz" element={<Quiz />} />
      <Route exact path="/quizlogin" element={<QuizLogin />} />
      <Route exact path="/studentlogin" element={<StudentLogin />} />
      <Route exact path="/teacherlogin" element={<TeacherLogin />} />
      <Route exact path="/studentsignup" element={<StudentSignup />} />
      <Route exact path="/teachersignup" element={<TeacherSignup />} />
      <Route exact path="/signup" element={<SignUpAll />} />
      <Route exact path="/login" element={<LogInAll />} />
     
    </Routes>
  </div>
  );
}

export default App;
