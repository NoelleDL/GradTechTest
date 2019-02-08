/*jshint esversion: 6 */
function createMenuData(data) {

  var parents = [];
  var children = [];
  var array_of_objectsf = [];

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
    array_of_objectsfObjects.push(object);
  });
  return array_of_objects;
}
