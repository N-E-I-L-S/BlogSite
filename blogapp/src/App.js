import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AllBlogs from './pages/AllBlogs';
import MyEditor from './pages/DraftAdd';
import EditBlog from './pages/EditBlog';
import Login from './pages/Login';
import OneBlog from './pages/OneBlog';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
   <>
   <Router>
   <Navbar/>
    <Routes>
      <Route path='/' element={<AllBlogs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/addblog' element={<ProtectedRoute page={<AddBlog/>}/>}/> */}
      <Route path='/oneblog/:id' element={<OneBlog/>}/>
      <Route path='/editblog/:id' element={<ProtectedRoute page={<EditBlog/>}/>}/>
      <Route path='/profile/:user' element={<ProtectedRoute page={<Profile/>}/>}/>
      <Route path='/addblog' element={<ProtectedRoute page={<MyEditor/>}/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;