/*jshint esversion: 6 */
function createMenuData(data) {
  var array = [];
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].split('/'));

  }
  return array;
}
