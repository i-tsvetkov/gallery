// Generated by CoffeeScript 1.10.0
(function() {
  var ViewModel, images,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  images = ["imgs/redwood-national-park-1587301_640.jpg", "imgs/yellowstone-national-park-1589616_640.jpg", "imgs/wild-1246231_640.jpg", "imgs/lion-515028_640.jpg", "imgs/aries-44188_640.jpg", "imgs/guinea-pig-449983_640.jpg", "imgs/black-and-white-201942_640.jpg", "imgs/ostrich-202659_640.jpg", "imgs/waterfall-163579_640.jpg", "imgs/camel-1378571_640.jpg", "imgs/black-stork-208599_640.jpg", "imgs/great-spotted-woodpecker-1597030_640.jpg", "imgs/thorns-419688_640.jpg", "imgs/rose-185961_640.jpg", "imgs/sedona-1598194_640.jpg", "imgs/horseshoe-bend-4040_640.jpg"];

  ViewModel = function() {
    var currentIndex, preview, self;
    self = this;
    self.images = ko.observableArray(images);
    self.imagesCount = ko.pureComputed(function() {
      return self.images().length;
    });
    self.previewVisible = ko.observable(false);
    self.currentPreview = ko.observable('');
    self.bodyOverflow = ko.pureComputed(function() {
      if (self.previewVisible()) {
        return 'hidden';
      } else {
        return 'visible';
      }
    });
    self.isLoading = ko.observable(true);
    currentIndex = 0;
    preview = document.getElementById('preview');
    self.showPreview = function(url, e) {
      self.previewVisible(true);
      self.setPreviewImg(url);
      return currentIndex = Number(e.target.getAttribute('index'));
    };
    self.setPreviewImg = function(url) {
      self.currentPreview('');
      self.isLoading(true);
      self.currentPreview(url);
      return preview.focus();
    };
    self.hidePreview = function() {
      return self.previewVisible(false);
    };
    self.hideLoader = function() {
      return self.isLoading(false);
    };
    self.previewKeydown = function(_, e) {
      switch (e.key) {
        case 'Escape':
          self.hidePreview();
          break;
        case 'ArrowRight':
        case 'Enter':
          self.goRight();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          self.goLeft();
      }
      return true;
    };
    self.goRight = function() {
      currentIndex = modulo(currentIndex + 1, self.imagesCount());
      return self.setPreviewImg(self.images()[currentIndex]);
    };
    self.goLeft = function() {
      currentIndex = modulo(currentIndex - 1, self.imagesCount());
      return self.setPreviewImg(self.images()[currentIndex]);
    };
    return self;
  };

  ko.applyBindings(new ViewModel());

}).call(this);
