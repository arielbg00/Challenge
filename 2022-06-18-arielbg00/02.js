/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  var min = array[0];
  var max = array[1];
  var sumaTotal = 0;
  for (var i = min; i <= max; i++) {
    sumaTotal = sumaTotal + i;            
  }
  return sumaTotal;
  
}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodos