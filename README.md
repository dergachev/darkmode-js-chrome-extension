# Darkmode.js Chrome Extension

This is a toy Chrome Extension we use to inject Darkmode.js into any webpage.

## Installation

This extension is not published to the Chrome webstore, so you need to install it manually.
See https://stackoverflow.com/questions/24577024/install-chrome-extension-form-outside-the-chrome-web-store for instructions.

## Usage

After installing the extension, find it's icon (moon) and click on it. This will inject darkmode.js library, which (if it's working correctly) will inject a button in tthe bottom-right corner of a given page, which when clicked will activate a dark color mode for the page.

## Docs

See the following helpful links:

* https://developer.chrome.com/extensions/activeTab
* https://darkmodejs.learn.uno/

Also note that popup.js inlines the contents of the following JS file:

* https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js

And at the bottom of it, it automatically activates it as follows:

```
new Darkmode().showWidget();
```

## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
