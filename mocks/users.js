var library = require("../lib/library");

var users = [
  {
    name: "bob",
    age: 25,
    password: "password123"
  },
  {
    name: "alice",
  	age: 23,
  	password: "password"
  }
];

function find(name){
  return library.searcher(users, 'name', name);
}

module.exports = {
  users: users,
  find: find
}