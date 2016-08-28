ViewModel = ->
  self = this
  self.images = ko.observableArray images
  self.imagesCount = ko.pureComputed -> self.images().length
  self.previewVisible = ko.observable false
  self.currentPreview = ko.observable ''
  currentIndex = 0
  preview = document.getElementById 'preview'

  self.showPreview = (url, e) ->
    self.currentPreview url
    self.previewVisible true
    currentIndex = Number(e.target.getAttribute('index'))
    preview.focus()

  self.hidePreview = ->
    self.previewVisible false

  self.previewKeydown = (_, e) ->
    switch e.key
      when 'Escape'
        self.hidePreview()
      when 'ArrowRight', 'Enter'
        self.goRight()
      when 'ArrowLeft', 'Backspace'
        self.goLeft()
    return true

  self.goRight = ->
    currentIndex = (currentIndex + 1) %% self.imagesCount()
    self.currentPreview self.images()[currentIndex]

  self.goLeft  = ->
    currentIndex = (currentIndex - 1) %% self.imagesCount()
    self.currentPreview self.images()[currentIndex]

  return self

ko.applyBindings(new ViewModel())

