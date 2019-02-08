/*jshint esversion: 6 */
function createMenuData(data) {
var array = [];
var arrayOfObjects = [];
var newArrayOfObjects = [];
var test = [];
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].split('/'));
    arrayOfObjects.push( { title: array[i][0], data: [array[i][1]] } );
    if (arrayOfObjects[i].data[0] != undefined) {
      newArrayOfObjects.push(arrayOfObjects[i]);
          var testing = newArrayOfObjects[i].title;
          if (newArrayOfObjects.includes(testing)) {
            console.log("this is correct");
        }
      }
    }
    return newArrayOfObjects;
}
