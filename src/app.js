window.goA = function () {
  require.ensure([], function (require) {
    console.log(require('./a'));
  });
};

window.goB = function () {
  require.ensure([], function (require) {
    console.log(require('./b'));
  });
};

window.goC = function () {
  require.ensure([], function (require) {
    require('./c');
  });
};

window.goD = function () {
  require.ensure([], function (require) {
    require('./d');
  });
};
