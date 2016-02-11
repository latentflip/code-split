window.goA = function () {
  require.ensure(['./a'], function (require) {
    console.log(require('./a'));
  });
};

window.goB = function () {
  require.ensure(['./b'], function (require) {
    console.log(require('./b'));
  });
};
