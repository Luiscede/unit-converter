/////////////////////////////// Unir Converter/////////


Unit Converter es una aplicacion que permite al usuario transformar medidas de longitud.


La funcionalidad de la misma corresponde a de las siguientes directrices de diseño:

●El usuario debe seleccionar un tipo de conversión en el menú desplegable (un
elemento <select>) cuyas opciones deben ser: kilómetros a millas, millas a
kilómetros, pies a metros, metros a pies, centímetros a pulgadas y pulgadas a
centímetros.

● El usuario escribe la cantidad de la primera unidad en un campo (un elemento
<input>)

● El resultado debe mostrarse debajo de forma instantánea, es decir, sin que sea
necesario que haga clic en un botón para realizar la conversión. El resultado debe
mostrarse con dos decimales, es decir, 62.14 en vez de 62.13712.

● Cuando el usuario haga clic en el icono de las dos flechas horizontales, el resultado
debe aparecer como el input original, y el input original mostrarse como resultado.
Por ejemplo, en el diseño de Figma el input sería 62.12 millas y el resultado sería
100.00 kilómetros.

● Si el usuario hace clic en el icono del corazón, la conversión se guarda en la lista de
la parte inferior y desaparece el input del campo.

● Si el usuario hace clic en el icono de la ‘X’ de una conversión guardada, se borra la
conversión de la lista

Para el desarrollo de la misma se implemento React/Redux, Redux Toolkit, de esta forma para funcionalidad de la app, dividimos al app en dos 'Sclices' -ConversionSlice y -SavedConversioSlice.

-conversionSlice.js

En este slice encontraras toda la logica referente a la conversion de forma singular, este slice es el encargado de manjear el estado y despachar los reducers en consecuencia que actualizaran cada atributo del estado de conversion. asi mismo gestiona la logica del boton de intercambio de datos. No gestiona el guardado de en localStorage.

-savedConversioSlice.js

en este slice se encontrara toda la logica para el guardado en localStorage, asi como el manejo de las conversiones de forma conjunta, es basicamente el slice que se encargara de despachar los reducers relacionados con el guardado de las conversiones favoritas.

de esta manera, con estos slices, se administra la la informacion y logica de manera coherente, los componentes reciben esta informacion del estado y la gestionan de acuerdo a lo requerido, asi mismo estos componentes transfieren la informacion pertinente a componentes hijos para su renderizado atraves de props. 


(ver uml)