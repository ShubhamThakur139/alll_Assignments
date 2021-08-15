//original array
var arr = [1, 2, 3, 4, 5, 6];

function copy_array(arr) {
  // copy the array using (...)spread operator in this way if we do changes in copy array it will not effect in existing array
  var copy_arr = [...arr];
  //changes in copy array
  copy_arr[2] = 8;
  //printing original array
  console.log(arr);
  //printing copy array
  console.log(copy_arr);
}

//calling function
copy_array(arr);

//original objects
var person = {
  name: "Shubham",
  age: 21,
  higherEducation: "B.C.A.",
};

function copy_objects(person) {
  //copy the object data in other object using (...)spread Operator in this way we can copy the object into other object
  var copy_person = { ...person };
  // changes in copy objects
  copy_person.name = "Shubham Thakur";
  //printing original object
  console.log(person);
  //printing copy object
  console.log(copy_person);
}

//calling function
copy_objects(person);
