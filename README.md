jQuery plugin to create iframe shim
=================

[iframe shim](http://lineandpixel.com/blog/iframe-shim-for-google-earth) is an old technique to place HTML content on top of brower plugin's window. It has been used since the days of Flash. For example, if you have a web application which uses full screen [Google Earth](https://developers.google.com/earth/) and you want to display some content on top of Google Earth window, you need to use iframe shim.

This is a small jQuery plugin which takes a HTML element and wrap it in an iframe shim. It's very handy if you want to create a lot of HTML content on top of a plugin's window.

### How to install

Install using Bower 

```
bower install jquery-iframeshim
```


### How to use

Refer to `test.html` to see how to use it with Google Earth.

#### Sample code

```javascript
$('#banner1').iframeShim({
  classNames: 'shim1'
});
```

#### Options

Name | Description |
----|------
`classNames` | CSS class names added to iframe shim container 
