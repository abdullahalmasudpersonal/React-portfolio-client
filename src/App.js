import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import AllProjects from './Pages/AllProjects/AllProjects';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allblogs' element={<AllBlogs />} />
        <Route path='/allprojects' element={<AllProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
