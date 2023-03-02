import Home from "./pages/home/Home";
import {Routes, Route} from "react-router-dom"
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
