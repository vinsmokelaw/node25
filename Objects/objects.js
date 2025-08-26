// 1. Simple object
let car = { brand: "Toyota", year: 2022 };

// 2. Add new property
car.color = "red";

// 3. Update property
car.year = 2023;

// 4. Delete property
delete car.color;

// 5. Nested object
let user = {
  name: "Alice",
  address: { city: "Harare", zip: "00263" }
};

// 6. Object with function (method)
let person2 = {
  name: "Mike",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// 7. Access with dot notation
console.log(user.address.city);

// 8. Access with bracket notation
console.log(user["name"]);

// 9. Object.keys
console.log(Object.keys(car));

// 10. Object.values
console.log(Object.values(car));
