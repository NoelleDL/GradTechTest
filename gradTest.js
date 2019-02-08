/*jshint esversion: 6 */
function createMenuData(data) {

  var parents = [];
  var children = [];
  var arrayOfObjects = [];

  data.forEach(function(a) {
    var split_strings  = a.split("/");
    if (split_strings[1]) {
      if (!parents.includes(split_strings[0]))
        parents.push(split_strings[0]);
        children.push(split_strings[1]);
      }
    });

  parents.forEach(function(p) {
    var object = {};
    object.title = p;
    object.data = children.filter(c => c.includes(p));
    arrayOfObjects.push(object);
  });
  return arrayOfObjects
}
