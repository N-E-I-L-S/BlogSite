import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBlog from './pages/AddBlog';
import AllBlogs from './pages/AllBlogs';
import Login from './pages/Login';
import OneBlog from './pages/OneBlog';
import Profile from './pages/Profile';

function App() {
  return (
   <>
   <Router>
   <Navbar/>
    <Routes>
      <Route path='/' element={<AllBlogs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addblog' element={<AddBlog/>}/>
      <Route path='/oneblog/:id' element={<OneBlog/>}/>
      <Route path='/profile/:user' element={<Profile/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
