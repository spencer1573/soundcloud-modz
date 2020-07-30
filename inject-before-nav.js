// console.log('4 **## request exists? ', window.XMLHttpRequest)

// let oldXHROpenTwo = window.XMLHttpRequest.prototype.open
// window.XMLHttpRequest.prototype.open = function () {
//   console.log('2** window happened from inject ')
//   this.addEventListener('load', function () {
//     const responseBody = this.responseText
//     console.log(`Response Body: {responseBody}`)
//   })
//   return oldXHROpenTwo.apply(this, arguments)
// }

// while (i < 1000) {
//   console.log('i count ', i)
//   i++
// }

;(function (XHR) {
  console.log('tried to set red')
  document.body.style.backgroundColor = 'red'
  ;('use strict')

  var element = document.createElement('div')
  element.id = 'interceptedResponse'
  element.appendChild(document.createTextNode(''))
  document.body.appendChild(element)

  var open = XHR.prototype.open
  var send = XHR.prototype.send

  XHR.prototype.open = function (method, url, async, user, pass) {
    this._url = url // want to track the url requested
    open.call(this, method, url, async, user, pass)
  }

  XHR.prototype.send = function (data) {
    var self = this
    var oldOnReadyStateChange
    var url = this._url

    function onReadyStateChange() {
      if (self.status === 200 && self.readyState == 4 /* complete */) {
        // document.getElementById("interceptedResponse").innerHTML +=
        // '{"url":"' + url + '", "data":' + self.responseText + '}*****';
        console.log('url ', url)
        console.log('url ', self.responseText)
      }
      if (oldOnReadyStateChange) {
        oldOnReadyStateChange()
      }
    }

    if (this.addEventListener) {
      this.addEventListener('readystatechange', onReadyStateChange, false)
    } else {
      oldOnReadyStateChange = this.onreadystatechange
      this.onreadystatechange = onReadyStateChange
    }
    send.call(this, data)
  }
})(XMLHttpRequest)
