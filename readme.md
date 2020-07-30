### Cannot stress how important this is for targeting the correct hostname.

https://developer.chrome.com/extensions/events#filtered

taken directly from the chrome extension documentation:

Filtered events are intended to allow a transition from manual filtering code like this:

```
     chrome.webNavigation.onCommitted.addListener(function(e) {
        if (hasHostSuffix(e.url, 'google.com') ||
            hasHostSuffix(e.url, 'google.com.au')) {
          // ...
        }
      });
```

into this:

```
      chrome.webNavigation.onCommitted.addListener(function(e) {
        // ...
      }, {url: [{hostSuffix: 'google.com'},
                {hostSuffix: 'google.com.au'}]});
```

### attributions

play button from june 27, 2020 is from here:

<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

TODO:

- put the attributions to the icons in something visible to the user maybe in a dropdown from the chrome extension
- a node watcher from here:
  https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
