import './styles/App.css';
import './styles/AppBarMUI.css';
import './styles/BottomAppBarMUI.css'
import AppBarMUI from './components/AppBarMUI';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import BottomAppBarMUI from './components/BottomAppBarMUI';
import About_us from './components/about_us';
import Reservations from './components/reservations';
import DoctorCardExtended from './components/doctorCardExtended';
import SignInForm from './components/signIn';
import SignUpForm from './components/signUp';
import ForgotPass from './components/forgotPass';
import Insurances from './components/Insurances';
import Snack from './components/snackbar';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

import { CSSTransition } from 'react-transition-group';

export const urlBackend = "http://localhost:5000"

function App() {
  const dispatch = useDispatch()
  const showNav = useSelector(store => store.storeUser.appReducer.showNav)
  const user = useSelector(store => store.storeUser.userReducer.user)

  return (
    <div className="App">

      <Snack />
      <div className='nav_menuOpen' onMouseOver={() => dispatch({ type: "showNav", payload: true })}></div>
      
      <CSSTransition
        in={showNav}
        timeout={500} // Duración de la animación en milisegundos
        classNames="fade" // Nombre de la clase CSS para la transición
        unmountOnExit
      >
        <AppBarMUI />
      </CSSTransition>

      <BrowserRouter>
        <AppBarMUI />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Insurances' element={<Insurances />} />
          <Route path='/about_us' element={<About_us />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/signIn' element={<SignInForm />} />
          <Route path='/signUp' element={<SignUpForm />} />
          <Route path='/forgotPass' element={<ForgotPass />} />
          <Route path='/doctor/:id' element={<DoctorCardExtended />} />
        </Routes>
        <BottomAppBarMUI />
      </BrowserRouter>
    </div>
  );
}

export default App;
