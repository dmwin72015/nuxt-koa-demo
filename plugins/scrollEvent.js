export const listScroll = (cb) => {
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    cb(scroll)
  })
}

