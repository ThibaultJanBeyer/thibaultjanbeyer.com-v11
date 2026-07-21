var del = require("del");

module.exports = function() {
  console.log("~~~~~~~~~~~ Your room is now clean, Master :-) ~~~~~~~~~");
  return del(["./docs/**", "./docs"], { force: true });
};
