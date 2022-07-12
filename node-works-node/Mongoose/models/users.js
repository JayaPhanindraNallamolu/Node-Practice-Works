const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    minlength: 2,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("users", userSchema);

//........................ Another Way ....................//

// const User = mongoose.model("users", {
//   firstName: {
//     type: String,
//     required: true,
//     minlength: 2,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     required: false,
//     minlength: 2,
//     trim: true,
//   },
//   isActive: {
//     type: Boolean,
//     default: true,
//   },
// });

// module.exports = User;
