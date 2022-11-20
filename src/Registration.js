import React, {useRef} from 'react'
import Navbar from './Navbar'
import "./Registration.css"
import Text from './components/Text/Text'
import Text2 from './components/Text/Text2'
import Button from './components/Elements/Button'
import { Link } from "react-router-dom";

const Registration = () => {
    const ref = useRef();
  return (
    <div className='Registration'>
        <div className='reg'>
            <Navbar/>
            <div className='rbdy'>
                <Text className="reg">Please fill in this necessary information</Text>
                <Text2>Complete your registration</Text2>
                <div className='form'>
                <div className='select-wrapper'>
                    <select name="cars" id="cars">
                        <option value="" disabled selected hidden>Nationality</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='select-wrapper'>
                    <select name="cars" id="cars">
                        <option value="" disabled selected hidden>Country of residence</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <label>
                    <input type="text" name="date" id="dob" placeholder="Date of birth" className="input select-wrapper" ref={ref}
        onChange={(e) => console.log(e.target.value)}
        onFocus={() => (ref.current.type = "date")}
        onBlur={() => (ref.current.type = "date")}
        />
                </label>
                <div className='select-wrapper'>
                    <select name="cars" id="cars">
                        <option value="" disabled selected hidden>Job title</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                </div>
            </div>
            <Link to='/wel2' className='lg'><Button>Continue</Button></Link>
        </div>
    </div>
  )
}

export default Registration