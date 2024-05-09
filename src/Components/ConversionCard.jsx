import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption, setInputValue, convert, toggleSelectedOption, resetConversionState } from '../Redux/conversionSlice'; // Importamos la nueva acción
import { addSavedConversion } from '../Redux/savedConversionSlice';
import InputCard from './InputCard';
import SelectCard from './SelectCard';
import ResultCard from './ResultCard';


const ConversionCard = () => {

  //Traemos la informacion de nuestro estado a traves del hook useSelector para situarnos en la porcion de estado
  //que trabajaremos

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.conversion.selectedOption);
  const inputValue = useSelector((state) => state.conversion.inputValue);
  const resultValue= useSelector((state) => state.conversion.resultValue);
  const unitInputValue = useSelector((state) => state.conversion.unitInputValue);
  const unitResultValue= useSelector((state) => state.conversion.unitResultValue);

  // Se utiliza useEffect para realizar la conversión cuando cambia el inputValue o selectedOption
  //de esta forma nuestro componente detecta el cambio y se rerenderiza

  useEffect(() => {
    dispatch(convert());
  }, [inputValue, selectedOption, dispatch]);

///////////////////////////////////////////////// Manejamos los eventos////////////////////////////

  const handleFavoriteClick = () => {
    const savedConversion = {
      selectedOption,
      inputValue,
      unitInputValue,
      resultValue,
      unitResultValue,
      
    };
    dispatch(addSavedConversion(savedConversion)); 
    dispatch(resetConversionState());
    
    /////Algunos chequeos en consola 
    console.log(inputValue)
    console.log(resultValue)

  };

  const handleToggleOption = () => {
    dispatch(toggleSelectedOption()); 
    
    
  };

  const handleChangeInput =(event) => {
    
    const numericValue = parseFloat(event.target.value);
    dispatch(setInputValue(isNaN(numericValue) ? 0 : numericValue));

    console.log(numericValue);

  };

  
  const handleChangeSelect =(event) => {
    dispatch(setSelectedOption(event.target.value))
    
  }
  
  console.log(inputValue);


  return (
    <div className='conversionCard'>

        <div className='conversionCardHeader'>
          <h2>Convert</h2>
        </div>

        <div className='conversionCardInput'>

          <div className='conversionCardSelect'>

            <SelectCard selectedOption={selectedOption} onChange={handleChangeSelect} />
            <button className="toggleButton" onClick={handleToggleOption}><i class="fa-solid fa-arrow-right-arrow-left"></i></button>

            </div>
          <InputCard  value={inputValue} onChange={handleChangeInput} unitInputValue={unitInputValue}/>
        </div>

        <div className='conversionCardResult'>

            <button className="favButton" onClick={handleFavoriteClick}><i className="far fa-heart"></i></button>
            <ResultCard/>
          </div>
      </div>
  );
};

export default ConversionCard;