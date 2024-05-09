import React from 'react';




    const InputCard = ({value, onChange, unitInputValue}) => {
        
         
        
        console.log(value);
    
        return (

            
            <div className='userInput'>

                
                <label htmlFor="input-value"></label>
                <input id="input" type='text' value={value} onChange={onChange} /> 
            
                <span>{unitInputValue}</span>
            
            
            
            
            
            
            </div>

        
    );
};



export default InputCard;