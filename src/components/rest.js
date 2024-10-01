import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Rest() {

    const navigate = useNavigate(); 

    const handleStart = () => {
      navigate('/quiz'); 
    };
  return (
   <>
    <div className="rest">
        <h4 className='heading'>Geography & Travel</h4>
        <div className="back">
            <div className="small-card">Geography & Travel</div>
            <div className="large-card">
                <h2 className="us">U.S. State Capitals Quiz</h2>
                <button className="start" onClick={handleStart} >Start</button>
            </div>
        </div>
    </div>
   </>
  );
}
