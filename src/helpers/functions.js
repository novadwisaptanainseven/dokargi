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
