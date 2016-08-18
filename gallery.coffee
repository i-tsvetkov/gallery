document.addEventListener 'DOMContentLoaded', ->
  previewDiv = document.querySelector '#preview'
  previewImg = document.querySelector '#preview > img'
  rightArrow = document.querySelector '.right-arrow'
  leftArrow  = document.querySelector '.left-arrow'

  imgsSize = document.querySelectorAll('.img').length
  lastPreviewImg = 0

  showPreview = (img) ->
    previewDiv.style.display = 'flex'
    previewImg.src = img.src
    lastPreviewImg = Number(img.id.match(/\d+$/))

  hidePreview = ->
    previewDiv.style.display = 'none'

  Array.from(document.querySelectorAll('.img')).forEach (i) ->
    i.onclick = (e) ->
      showPreview e.target

  previewDiv.onclick = hidePreview
  previewImg.onclick = (e) -> e.stopPropagation()

  rightArrow.onclick = (e) ->
    e.stopPropagation()
    id = (lastPreviewImg + 1) %% imgsSize
    showPreview(document.querySelector("#id#{id}"))

  leftArrow.onclick = (e) ->
    e.stopPropagation()
    id = (lastPreviewImg - 1) %% imgsSize
    showPreview(document.querySelector("#id#{id}"))


