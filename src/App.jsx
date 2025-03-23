import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import StudentDashboard from "./pages/students/StudentDashboard";
import TeacherDashboard from "./pages/teachers/TeacherDashboard";

import "./App.css";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Courses from "./pages/Courses";
import Setup from "./pages/teachers/Onbaording/Setup";
import ProfileSetup from "./pages/teachers/Onbaording/ProfileSetup";
import ProfileSetup2 from "./pages/teachers/Onbaording/ProfileSetup2";


function Layout() {
  const location = useLocation();
  const hideNavBar = location.pathname.startsWith('/student') || location.pathname.startsWith('/teacher');


  return (
    <div className="flex flex-col h-screen">
      {/* Hide NavBar on student and teacher dashboard routes */}
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />

        {/* Teacher Routes */}
        <Route path="/teacher/setup" element={<Setup/>}/>
        <Route path="/teacher/profileSetup" element={<ProfileSetup/>} />
        <Route path="/teacher/profileSetup2" element={<ProfileSetup2/>} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
