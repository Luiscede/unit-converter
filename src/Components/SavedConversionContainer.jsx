import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSavedConversion } from '../Redux/savedConversionSlice'; 
import SavedConversionCard from './SavedConversionCard';



const SavedConversionContainer = () => {

  const dispatch = useDispatch();
  const savedConversions = useSelector((state) => state.savedConversion); // Obtiene las conversiones guardadas del estado de Redux

  const handleDeleteConversion = (index) => {
    dispatch(removeSavedConversion(index)); // Despacha la acción para eliminar la conversión
  };

  return (


      <div className='savedConversionContainer'>
        <div className='savedHeader'>
          <h2>saved</h2>
        </div>
        {savedConversions.map((conversion, index) => (

        <SavedConversionCard 
          key={index} 
          conversion={conversion} 
          onDelete={() => handleDeleteConversion(index)} //Pasamos la funcion de eliminar como una prop a nuestrocomponente secundario
        />
        ))}
      </div>
  );
};

export default SavedConversionContainer;