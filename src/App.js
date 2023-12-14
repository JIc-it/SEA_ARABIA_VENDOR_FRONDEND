
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./components/MainPage";
import Login from "./components/LoginPage/Login";
import EmailVerification from "./components/LoginPage/EmailVerification";
import VerificationCode from "./components/LoginPage/VerificationCode";
import ResetLoginPassword from "./components/LoginPage/ResetLoginPassword";

function App() {
  return (
    <Router>
      <div className="page">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="email-varification" element={<EmailVerification />} />
          <Route path="/verification/:id/:userId" element={<VerificationCode />} />
          <Route path="/resetpassword/:id" element={<ResetLoginPassword />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
