// found here:
// https://stackoverflow.com/questions/5202296/add-a-hook-to-all-ajax-requests-on-a-page
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
//   console.log('** 1 xhr happened')
//   var original_xhr = XMLHttpRequest
//   window.XMLHttpRequest = function () {
//     /* logic that notifies your plugin goes here */

//     original_xhr.apply(this, Array.prototype.slice.call(arguments))
//     // alert ("I redefined this function");
//     console.log('xhr happened ')
//   }
// }

// modXHR()

// let oldXHROpen = window.XMLHttpRequest.prototype.open
// window.XMLHttpRequest.prototype.open = function () {
//   console.log('2** window happened from inject-before ')
//   this.addEventListener('load', function () {
//     const responseBody = this.responseText
//     console.log(`Response Body: {responseBody}`)
//   })
//   return oldXHROpen.apply(this, arguments)
// }

// var i = 0

// window.setInterval(function () {
//   console.log('count ')
//   // console.log('i count ', i)
//   i++
//   let oldXHROpen = window.XMLHttpRequest.prototype.open
//   window.XMLHttpRequest.prototype.open = function () {
//     console.log('2** window happened from inject-before ')
//     this.addEventListener('load', function () {
//       const responseBody = this.responseText
//       console.log(`Response Body: {responseBody}`)
//     })
//     return oldXHROpen.apply(this, arguments)
//   }
//   let oldXHRSend = window
//   window.XMLHttpRequest.onreadystatechange = function () {
//     console.log('on ready state change happened ')
//     // In local files, status is 0 upon success in Mozilla Firefox
//     // if(xhr.readyState === XMLHttpRequest.DONE) {
//     //   var status = xhr.status;
//     //   if (status === 0 || (status >= 200 && status < 400)) {
//     //     // The request has been completed successfully
//     //     console.log(xhr.responseText);
//     //   } else {
//     //     // Oh no! There has been an error with the request!
//     //   }
//     // }
//   }
// }, 1)

// function xhrMod() {
//   var XHR = XMLHttpRequest.prototype
//   var open = XHR.open
//   var send = XHR.send

//   XHR.open = function (method, url) {
//     requests.push(this)
//     this._method = method
//     this._url = url
//     console.log('this ', this)
//     return open.apply(this, arguments)
//   }

//   XHR.send = function (data) {
//     // this.addEventListener('load', function() {
//     //   /* Method        */ this._method
//     //   /* URL           */ this._url
//     //   /* Response body */ this.responseText
//     // });
//     const that = this
//     // if (blocked.some(function(regex) { return that._url.match(regex) })) return;
//     console.log('that ', that)
//     return send.apply(this, arguments)
//   }
// }

// xhrMod()

// http://stackoverflow.com/a/10796951
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
