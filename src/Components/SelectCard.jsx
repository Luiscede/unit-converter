import React from 'react';


const SelectCard = ({selectedOption, onChange}) => {


  

  return (
    <div className="selectContainer">
      <label htmlFor="conversionSelect"></label>
      <select className="conversionSelect" id="conversionSelect" value={selectedOption} onChange={onChange}>
          
          <option value=""></option>
          <option value="kmToMiles">Kms → Miles</option>
          <option value="milesToKm">Miles → Kms</option>
          <option value="cmToInches">Cms → Inches</option>
          <option value="inchesToCm">Inches → Cms</option>
          <option value="feetToMeters">Feet → Meters</option>
          <option value="metersToFeet">Meters → Feet</option>
          
      </select>
    </div>
  );
};

export default SelectCard;