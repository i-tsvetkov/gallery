// Generated by CoffeeScript 1.10.0
(function() {
  var ViewModel, images,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  images = ["imgs/redwood-national-park-1587301_640.jpg", "imgs/yellowstone-national-park-1589616_640.jpg", "imgs/wild-1246231_640.jpg", "imgs/lion-515028_640.jpg", "imgs/aries-44188_640.jpg", "imgs/guinea-pig-449983_640.jpg", "imgs/black-and-white-201942_640.jpg", "imgs/ostrich-202659_640.jpg", "imgs/waterfall-163579_640.jpg", "imgs/camel-1378571_640.jpg", "imgs/black-stork-208599_640.jpg", "imgs/great-spotted-woodpecker-1597030_640.jpg", "imgs/thorns-419688_640.jpg", "imgs/rose-185961_640.jpg", "imgs/sedona-1598194_640.jpg", "imgs/horseshoe-bend-4040_640.jpg"];

  ViewModel = function() {
    var currentIndex, self;
    self = this;
    self.images = ko.observableArray(images);
    self.imagesCount = ko.pureComputed(function() {
      return self.images().length;
    });
    self.previewVisible = ko.observable(false);
    self.currentPreview = ko.observable('');
    currentIndex = 0;
    self.showPreview = function(url, e) {
      self.currentPreview(url);
      self.previewVisible(true);
      return currentIndex = Number(e.target.getAttribute('index'));
    };
    self.hidePreview = function() {
      return self.previewVisible(false);
    };
    self.goRight = function() {
      currentIndex = modulo(currentIndex + 1, self.imagesCount());
      return self.currentPreview(self.images()[currentIndex]);
    };
    self.goLeft = function() {
      currentIndex = modulo(currentIndex - 1, self.imagesCount());
      return self.currentPreview(self.images()[currentIndex]);
    };
    return self;
  };

  ko.applyBindings(new ViewModel());

}).call(this);
