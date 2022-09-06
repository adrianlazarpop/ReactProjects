import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';


const App = () => {
  return (
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />

    </Routes>
  );
}

export default App;
