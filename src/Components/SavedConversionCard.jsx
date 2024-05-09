import React from 'react';

const SavedConversionCard = ({ conversion, onDelete }) => {

  



  return (
    <div className="savedConversionCard">

      <div className='savedConversionUserBox'>
        
          <p>{conversion.inputValue} {conversion.unitInputValue} → {conversion.resultValue.toFixed(2)} {conversion.unitResultValue}</p>
      
      </div>
      
      <button className='buttonDelete' onClick={onDelete}>x</button>
    </div>
  );
};

export default SavedConversionCard;