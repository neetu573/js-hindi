//const tinderUser = new Object()    //sigelton object
const tinderUser = {}; //non-sibgelton object

tinderUser.id = "123bjk";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "sam@gamil.com",
  fullname: {
    userfullname: {
      firstname: "Neetu",
      lastname: "kanwar",
    },
  },
};

//console.log(regularUser.fullname.userfullname.firstname)    //access nested functions

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);

const users = [
  {
    id: 1,
    email: "user@google.com",
  },
  {
    id: 1,
    email: "user@google.com",
  },
  {
    id: 1,
    email: "user@google.com",
  },
];

users[1].email;
//console.log(tinderUser)

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
  coursename: "jsin hindi",
  price: "1000",
  courseInstuctor: "hitesh",
};

//course.courseInstuctor

const { courseInstuctor } = course;

// console.log(courseInstuctor);
// console.log(instructor)

// {
//   name:"neetu",
//   coursename:"js in hindi",
//   price:"free",
// }

[{}, {}, {}];
