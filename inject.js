document.body.style.backgroundColor = '#d5e7e7'

const previousButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M7 6h2v12H7V6zm2 6l8 6V6l-8 6z"/></svg>`
const playButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M8 5v14l11-7z"/></svg>`
const pauseButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
const nextButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M7 18l8-6-8-6v12zm8-12v12h2V6h-2z"/></svg>`

const shuffleButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M13.586 17l-8-8H3V7h3.414l8 8H17v2h-3.414zM3 15h2.586l2.207-2.207 1.414 1.414-2.501 2.501-.293.292H3v-2zm14-6h-2.586l-2.207 2.207-1.414-1.414L13.586 7H17v2zm4 7l-4 3v-6l4 3zm0-8l-4 3V5l4 3z"/></svg>`
const shuffleOrangeButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#f50" d="M13.586 17l-8-8H3V7h3.414l8 8H17v2h-3.414zM3 15h2.586l2.207-2.207 1.414 1.414-2.501 2.501-.293.292H3v-2zm14-6h-2.586l-2.207 2.207-1.414-1.414L13.586 7H17v2zm4 7l-4 3v-6l4 3zm0-8l-4 3V5l4 3z"/></svg>`

const repeatButtonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M12 8H9a4 4 0 1 0 0 8h6a4 4 0 0 0 2.104-7.403l1.77-1.18.02.018A6 6 0 0 1 15 18H9A6 6 0 1 1 9 6h3V4l4 3-4 3V8z"/></svg>`
const repeatButtonOrangeOneSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#f50" d="M11.027 16a4.55 4.55 0 0 0 .23 2H9A6 6 0 1 1 9 6h3V4l4 3-4 3V8H9a4 4 0 1 0 0 8h2.027zm7.725-2.61a3.997 3.997 0 0 0-1.648-4.792l1.77-1.18.02.017A5.987 5.987 0 0 1 21 12c0 1.3-.413 2.503-1.116 3.486a4.496 4.496 0 0 0-1.132-2.096z"/><path fill="#f50" d="M15.5 20a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm-.5-5v4h1v-4h-1zm-1 0v1h1v-1h-1z"/></svg>`
const repeatButtonOrangeInfiniteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#f50" d="M12 8H9a4 4 0 1 0 0 8h6a4 4 0 0 0 2.104-7.403l1.77-1.18.02.018A6 6 0 0 1 15 18H9A6 6 0 1 1 9 6h3V4l4 3-4 3V8z"/></svg>`

const speakerButtonHighSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2zm0 4a5 5 0 0 0 0-10V5a7 7 0 0 1 0 14v-2z"/></svg>`
const speakerButtonLowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9zm10 4a1 1 0 0 0 0-2V9a3 3 0 0 1 0 6v-2z"/></svg>`
const speakerButtonMuteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#333" d="M18 10.584l-2.293-2.291-1.414 1.414 2.293 2.291-2.291 2.291 1.414 1.415 2.292-2.292 2.294 2.292 1.414-1.415-2.293-2.291 2.291-2.29-1.414-1.415-2.292 2.291zM4 9h4.002L12 5v14c-2.446-2.667-3.778-4-3.998-4H4V9z"/></svg>`

const initializeButtons = () => {
  const previousTarget = getTarget('.playControls__prev')
  previousTarget.innerHTML = previousButtonSvg

  const nextTarget = getTarget('.playControls__next')
  nextTarget.innerHTML = nextButtonSvg

  const playPauseTarget = getTarget('.playControl')
  setPlayPause(playPauseTarget)

  const shuffleTarget = getTarget('.shuffleControl')
  setShuffle(shuffleTarget)

  const repeatTarget = getTarget('.repeatControl')
  setRepeat(repeatTarget)

  const volumeTarget = getTarget('.volume')
  setVolume(volumeTarget)
}

const getTarget = (selector) => {
  const queryTarget = document.querySelectorAll(selector)
  const target = queryTarget.length > 0 ? queryTarget[0] : {}
  return target
}

const setPlayPause = (target) => {
  if (target) {
    if (target.classList) {
      if (target.classList.contains('playControl')) {
        const titleAttribute = target.getAttribute('title')
        if (titleAttribute === 'Play current') {
          target.innerHTML = playButtonSvg
        } else if (titleAttribute === 'Pause current') {
          target.innerHTML = pauseButtonSvg
        }
      }
    }
  }
}

const setShuffle = (target) => {
  if (target) {
    if (target.classList) {
      if (target.classList.contains('shuffleControl')) {
        if (target && target.classList.contains('m-shuffling')) {
          target.innerHTML = shuffleOrangeButtonSvg
        } else {
          target.innerHTML = shuffleButtonSvg
        }
      }
    }
  }
}

const setRepeat = (target) => {
  if (target) {
    if (target.classList) {
      if (target.classList.contains('repeatControl')) {
        if (target.classList.contains('m-none')) {
          target.innerHTML = repeatButtonSvg
        } else if (target.classList.contains('m-one')) {
          target.innerHTML = repeatButtonOrangeOneSvg
        } else if (target.classList.contains('m-all')) {
          target.innerHTML = repeatButtonOrangeInfiniteSvg
        }
      }
    }
  }
}

const setVolume = (target) => {
  if (target) {
    if (target.classList) {
      if (target.classList.contains('volume')) {
        dataLevel = parseInt(target.getAttribute('data-level'))
        targetButton = target.getElementsByClassName('volume__button')[0]
        if (dataLevel === 0) {
          targetButton.innerHTML = speakerButtonMuteSvg
        } else if (dataLevel > 0 && dataLevel <= 5) {
          targetButton.innerHTML = speakerButtonLowSvg
        } else if (dataLevel >= 6) {
          targetButton.innerHTML = speakerButtonHighSvg
        }
      }
    }
  }
}

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes) return

    const target = mutation.target

    if (mutation.type === 'attributes') {
      // Play/Pause button
      setPlayPause(target)
      // Shuffle/Unshuffle button
      setShuffle(target)
      // Repeat - three variations
      setRepeat(target)
      // Volume - three variations
      setVolume(target)
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true,
})

// function modXHR() {
//   var origOpen = XMLHttpRequest.prototype.open
//   XMLHttpRequest.prototype.open = function () {
//     console.log('request started!')
//     this.addEventListener('load', function () {
//       console.log('request completed!')
//       console.log(this.readyState) //will always be 4 (ajax is completed successfully)
//       console.log(this.responseText) //whatever the response was
//     })
//     origOpen.apply(this, arguments)
//   }
// }

// function modXHR() {
//   var original_xhr = XMLHttpRequest
//   window.XMLHttpRequest = function () {
//     /* logic that notifies your plugin goes here */

//     original_xhr.apply(this, Array.prototype.slice.call(arguments))
//     // alert ("I redefined this function");
//     console.log('xhr happened ')
//   }
// }

const main = () => {
  initializeButtons()
  // modXHR()
}

main()
