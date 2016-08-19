ViewModel = ->
  self = this
  self.images = ko.observableArray images
  self.imagesCount = ko.pureComputed -> self.images().length
  self.previewVisible = ko.observable false
  self.currentPreview = ko.observable ''
  currentIndex = 0

  self.showPreview = (url, e) ->
    self.currentPreview url
    self.previewVisible true
    currentIndex = Number(e.target.getAttribute('index'))

  self.hidePreview = ->
    self.previewVisible false

  self.goRight = ->
    currentIndex = (currentIndex + 1) %% self.imagesCount()
    self.currentPreview self.images()[currentIndex]

  self.goLeft  = ->
    currentIndex = (currentIndex - 1) %% self.imagesCount()
    self.currentPreview self.images()[currentIndex]

  return self

window.model = new ViewModel()
ko.applyBindings(model)

