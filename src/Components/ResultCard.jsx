import React from 'react';
import { useSelector } from 'react-redux';

const ResultCard = () => {
  const resultValue = useSelector((state) => state.conversion.resultValue);

  const unitResultValue = useSelector((state) => state.conversion.unitResultValue);

  console.log(resultValue	)

  
  return (
    <div>
        
        <p>{resultValue.toFixed(2)} {unitResultValue}</p>
        
    </div>
  );
};

export default ResultCard;