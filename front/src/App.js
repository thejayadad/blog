import Home from "./pages/home/Home";
import {Routes, Route} from "react-router-dom"
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import UpdatePost from "./pages/updatePost/UpdatePost";
import PostDetail from "./pages/postDetail/PostDetail";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<UpdatePost />} />
        <Route path="/updatepost/:id" element={<PostDetail />} />

      </Routes>
    </div>
  );
}

export default App;
