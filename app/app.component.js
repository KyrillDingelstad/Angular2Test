(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Angular test</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));