module.exports = {
  isEmpty: function (obj) {
    for (let key in obj) {
      if (obj[key]) {
        return false;
      }
    }
    return true;
  },
};
