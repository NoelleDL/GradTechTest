/*jshint esversion: 6 */
function createMenuData(data) {
var array = [];
var arrayOfObjects = [];
  for (let i = 0; i < data.length; i++) {
      array.push(data[i].split('/'));
      arrayOfObjects.push( { title: array[i][0], data: [array[i][1]] } );
    }
    return arrayOfObjects;
}
