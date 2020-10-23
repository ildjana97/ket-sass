/**
 * @license gulp-4-bundler v1.0.0
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

var main=(function(){'use strict';var Main = function () {
  function Main() {
    this.init();
  }

  var _proto = Main.prototype;

  _proto.init = function init() {
    var body = document.querySelector('body');
    body.classList.add('ready');
    var mainContainerNode = document.querySelector('main .container');
    var messageNode = document.createElement('div');
    messageNode.innerHTML = "<p>\n\t\t\t\n\t\t</p>";
    mainContainerNode.appendChild(messageNode);
  };

  return Main;
}();
var main = new Main();return Main;}());