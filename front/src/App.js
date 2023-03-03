import Home from "./pages/home/Home";
import {Routes, Route, Navigate} from "react-router-dom"
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import UpdatePost from "./pages/updatePost/UpdatePost";
import PostDetail from "./pages/postDetail/PostDetail";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector((state) => state.auth)
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path="/register" element={<Register />} />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path="/update/:id" element={<UpdatePost />} />
        <Route path="/updatepost/:id" element={<PostDetail />} />

      </Routes>
    </div>
  );
}

export default App;
