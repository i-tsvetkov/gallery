ViewModel = ->
  self = this
  self.images = ko.observableArray images
  self.imagesCount = ko.pureComputed -> self.images().length
  self.previewVisible = ko.observable false
  self.currentPreview = ko.observable ''
  self.bodyOverflow = ko.pureComputed -> if self.previewVisible() \
                                          then 'hidden' \
                                          else 'visible'
  self.isLoading = ko.observable true
  currentIndex = 0
  preview = document.getElementById 'preview'

  self.showPreview = (url, e) ->
    self.previewVisible true
    self.setPreviewImg url
    currentIndex = Number(e.target.getAttribute('index'))

  self.setPreviewImg = (url) ->
    self.currentPreview ''
    self.isLoading true
    self.currentPreview url
    preview.focus()

  self.hidePreview = ->
    self.previewVisible false

  self.hideLoader = ->
    self.isLoading false

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
    self.setPreviewImg self.images()[currentIndex]

  self.goLeft  = ->
    currentIndex = (currentIndex - 1) %% self.imagesCount()
    self.setPreviewImg self.images()[currentIndex]

  return self

ko.applyBindings(new ViewModel())

