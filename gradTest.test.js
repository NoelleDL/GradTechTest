/*jshint esversion: 6 */
function createMenuData(data) {

  var parents = [];
  var children = [];
  var array_of_objects = [];

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
    array_of_objects.push(object);
  });
  return array_of_objects;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];

      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];

      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });
