/*jshint esversion: 6 */
function createMenuData(data) {
var array = [];
var arrayOfObjects = [];
var newArrayOfObjects = [];
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].split('/'));
    arrayOfObjects.push( { title: array[i][0], data: [array[i][1]] } );
    if (arrayOfObjects[i].data[0] != undefined) {
      newArrayOfObjects.push(arrayOfObjects[i]);
    }
  }
    return newArrayOfObjects;
}
