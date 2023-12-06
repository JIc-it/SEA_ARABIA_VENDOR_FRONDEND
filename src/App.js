// import SideBar from "./components/Common/SideBar";
// import Header from "./components/Common/Header";
// import AllRouting from "./components/Routing";
// function App() {
//   return (
//     <div className="page">
//       <Header />
//       <SideBar />
//       <AllRouting />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainPage from "./components/MainPage";
import Login from "./components/LoginPage/Login";


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
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
