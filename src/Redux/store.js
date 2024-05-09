import { configureStore } from "@reduxjs/toolkit";
import  { ConversionSlice }  from "./conversionSlice";
import {SavedConversionSlice} from "./savedConversionSlice";

//Definimos nuestro Store y agregamos los Slice creados para manejar el estado

export const store= configureStore({
    

    
    reducer: {
        conversion: ConversionSlice.reducer,
        savedConversion: SavedConversionSlice.reducer
        
        
        
    },

    
})
