var library = require("../lib/library");

var users = [
  {
    name: "bob",
    age: 25,
    name: "bob",
    password: "password123"
  },
  {
    name: "alice",
  	age: 23,
  	name: "alice",
  	password: "password"
  }
];

function find(id){
  return library.searcher(users, 'name', id);
}

module.exports = {
  users: users,
  find: find
}