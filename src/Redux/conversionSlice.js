import { createSlice } from "@reduxjs/toolkit";


/////////////// creamos un slice para manejar desde aqui la logica relacionada con la entidad de conversion

const initialState = {
  selectedOption: "", 
  inputValue: 0,
  resultValue: 0,
  unitInputValue:"",
  unitResultValue:""
};


// definimos los reducers que actualizaran e interatuaran con nuestro estado segun lo requerido
export const ConversionSlice = createSlice({
  name: "conversion",
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setResultValue: (state, action) => {
      state.resultValue = action.payload;
    },

    //definimos la logica de conversion en nuestro reducer convert 
    convert: (state) => {
      switch (state.selectedOption) {
        case "kmToMiles":
          state.resultValue = state.inputValue * 0.621371;
          state.unitInputValue="kms";
          state.unitResultValue="miles";
          break;
        case "milesToKm":
          state.resultValue = state.inputValue / 0.621371;
          state.unitInputValue="miles";
          state.unitResultValue="kms";
          break;
        case "cmToInches":
          state.resultValue = state.inputValue * 0.393701;
          state.unitInputValue="cms";
          state.unitResultValue="inches";
          break;
        case "inchesToCm":
          state.resultValue = state.inputValue / 0.393701;
          state.unitInputValue="inches";
          state.unitResultValue="cms";
          break;
        case "feetToMeters":
          state.resultValue = state.inputValue * 0.3048;
          state.unitInputValue="feets";
          state.unitResultValue="meters";
          break;
        case "metersToFeet":
          state.resultValue = state.inputValue / 0.3048;
          state.unitInputValue="meters";
          state.unitResultValue="feets";
          break;
        default:
          state.resultValue = 0;
      }
    },

  //definimosla logica para cambiar entre las unidades de medida
    toggleSelectedOption: (state) => {
      switch (state.selectedOption) {
        case "kmToMiles":
          state.selectedOption = "milesToKm";
          state.inputValue=state.resultValue.toFixed(2);
          console.log(state.inputValue);
          break;
        case "milesToKm":
          state.selectedOption = "kmToMiles";
          state.inputValue=state.resultValue.toFixed(2);
          break;
        case "cmToInches":
          state.selectedOption = "inchesToCm";
          state.inputValue=state.resultValue.toFixed(2);
          break;
        case "inchesToCm":
          state.selectedOption = "cmToInches";
          state.inputValue=state.resultValue.toFixed(2);
          break;
        case "feetToMeters":
          state.selectedOption = "metersToFeet";
          state.inputValue=state.resultValue.toFixed(2);
          break;
        case "metersToFeet":
          state.selectedOption = "feetToMeters";
          state.inputValue=state.resultValue.toFixed(2);
          break;
        default:
          state.selectedOption = "";
          
      }
    },
    resetConversionState: (state) => {
      return initialState; // Restablecer el estado a initialState
    },
  },
});

export const { setSelectedOption, setInputValue, convert, setResultValue, toggleSelectedOption, resetConversionState } = ConversionSlice.actions;