export const disableScroll2 = () => {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

export const enableScroll2 = () => {
  window.onscroll = function () {}
}

export const disableScroll = () => {
  document.body.classList.add('stop-scrolling')
}

export const enableScroll = () => {
  document.body.classList.remove('stop-scrolling')
}

export function removeArrayByValue(arr) {
  var what,
    a = arguments,
    L = a.length,
    ax
  while (L > 1 && arr.length) {
    what = a[--L]
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1)
    }
  }
  return arr
}

export function changeValueObj(object, id, newValue) {
  for (var i in object) {
    if (object[i].id_gejala == id) {
      object[i].id_kondisi = newValue
      break // Stop this loop, we found it
    }
  }
}
