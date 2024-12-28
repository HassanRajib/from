import React from 'react'
import "./tamp.css"
import Card from "../image/card.PNG"
import uuid from 'react-uuid'
import {useNavigate} from "react-router-dom";

function Tamp() {
    const history = useNavigate();

    const createForm = () => {
        const id= uuid();
        
        history("/form/"+ id);
    }
    return (
    <div className='template_sec'>
        <div className='template_top'>
            <div className='template_left'>
                <span style={{marginLeft: "120px", fontSize: "18px", fontWeight: "600"}}>start new form</span>

            </div>
        </div>
        <div className='template_body' onClick={createForm}>
            <div className='card'>
                <img src={Card} alt='no'className='card_im'/>
                <p className='card_ti'>card1</p>
            </div>
            <div className='card'>
                <img src={Card} alt='no'className='card_im'/>
                <p className='card_ti'>card2</p>
            </div>
            <div className='card'>
                <img src={Card} alt='no'className='card_im'/>
                <p className='card_ti'>card3</p>
            </div>
        </div>
    </div>
  )
}

export default Tamp