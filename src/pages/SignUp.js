import React, { useState } from 'react'
import "./SignUp.css"
import wobot from "../images/wobot-logo.jpg"
import wobotS from "../images/Solid_lines.svg"
import { isCompositeComponent } from 'react-dom/test-utils'


let ranges = ["1 - 20", "21 - 50", "51 - 200"," 201-500 ", " 500+ "]

const SignUp = () => {
const [range, setRange] = useState(0);

const handleChange = (e,i) =>{
    e.preventDefault();
    setRange(i)
}
  return (
    <div>
        {/* Signup Page */}
        <div className='signUp'>
            {/* Header Logo */}
            <a href="/" className='logo'>
                <img  className='logo-img' src={wobot} alt="Wobot Logo" />
            </a>

            {/* Form Section */}
            <div className='form'>
                {/* Form Header */}
                <div className='top'>
                    <img className='icon' src={wobotS} alt="icon" />
                    <h3 className='title'>It's a delight to have you onboard</h3>
                    <p className='caption'>Help us know you better<br/>
                    (This is how we optimize Wobot as per your business needs)</p>
                </div>
                {/* Main form */}
                <div className='middle'>
                    <form>
                        <div className='form-label'>
                            <label name="company">Company name</label>
                        </div>
                        <div>
                            <input className='form-input' type="text" id='company' placeholder="e.g. Example Inc" />
                        </div>

                        <div className='form-label'>
                            <label name="industry">Industry</label>
                        </div>
                        <div>
                        <select className='form-select' id="industry" name="industry" defaultValue="" >
                            <option value="" disabled hidden>select</option>
                            <option value="Finace">Finace</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                        </div>

                        <div className='form-label'>
                            <label name="CompanySize">Company Size</label>
                        </div>
                        <div className='company-size'>
                            {ranges.map((rangeValue, i)=>{
                                if(range === i)
                                    return <button key={rangeValue} onClick={(e) => handleChange(e,i)} className='range-btn selected'>{rangeValue}</button>
                                else
                                    return <button key={rangeValue}  onClick={(e) =>handleChange(e,i)} className='range-btn'>{rangeValue}</button>

                            })}
                        </div>
                        <div>
                            <button type='submit' className='submit-btn'> Get Started</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <div className='footer'>
                <a href='#'>Terms of use</a>
                <p> | </p>
                <a href='#'>Privacy Policy</a>

            </div>
        </div>

        {/* Background Lines */}
        <div className="rect1-382"></div>
        <div className="rect2-382"></div>
    </div>

  )
}

export default SignUp