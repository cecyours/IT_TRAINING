import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import SignUp from './component/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
