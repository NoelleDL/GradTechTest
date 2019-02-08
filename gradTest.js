/*jshint esversion: 6 */
function createMenuData(data) {

  var parents = [];
  var children = [];

  data.forEach(function(a) {
    var split_strings  = a.split("/");
    if (split_strings[1]) {
      if (!parents.includes(split_strings[0])) {
        parents.push(split_strings[0]);
        children.push(split_strings[1]);
      }
    }
  });
  console.log(parents);
  console.log(children);
}
