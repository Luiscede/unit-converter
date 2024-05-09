import { createSlice } from '@reduxjs/toolkit';


/// establecemos un callback para chequear el localStorage 
const getLocalStorage = () => {
  const savedConversions = JSON.parse(localStorage.getItem('savedConversions'));
  return savedConversions || [];
}

//Definimos un Slice que se va a encargar de manejar la logica de las conversiones guardadas en nuestro estado y 
//en nuestro localStorage, de esta manera tenemos nuestra logica centralizada
export const SavedConversionSlice = createSlice({



  name: 'savedConversion',
  initialState: getLocalStorage(),
  reducers: {

    

    setSavedConversions: (state, action) => {
      return action.payload;
    },
    addSavedConversion: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('savedConversions', JSON.stringify(state)); 
    },
    removeSavedConversion: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem('savedConversions', JSON.stringify(state));
    },
    getAllSavedConversions: (state) => {
      const savedConversions = JSON.parse(localStorage.getItem('savedConversions')) || [];
      return savedConversions;
    },



  },
});

export const { setSavedConversions, addSavedConversion, removeSavedConversion, getAllSavedConversions } = SavedConversionSlice.actions;
