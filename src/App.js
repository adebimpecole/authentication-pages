import './App.css';
import Registration from './Registration';
import Welcome1 from './Welcome1';
import Welcome2 from "./Welcome2"
import Password from "./Password"
import Verification from "./Verification"
import NewPass from "./NewPass"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from './components/Elements/Button';




function App() {
  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route exact path='*' element={<Welcome1/>}/>
            <Route exact path='/reg' element={<Registration/>}/>
            <Route exact path='/wel2' element={<Welcome2/>}/>
            <Route exact path='/pass' element={<Password/>}/>
            <Route exact path='/veri' element={<Verification/>}/>     
            <Route exact path='/nwpass' element={<NewPass/>}/> 
            <Route exact path='/nwpass' element={<Button/>}/>        
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
