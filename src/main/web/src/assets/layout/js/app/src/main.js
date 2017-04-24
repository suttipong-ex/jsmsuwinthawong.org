/* 
 * Copy right 2016 - 2017 Genius-Tree Co., Ltd.
 */

/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/11/29
 */
var app = angular.module('app', [
  'ui.bootstrap',
  'ipCookie',
  'ui.router',
  'ngAnimate',
  'ui-notification',
  'ngSanitize'
]);

app.constant('patentdesign', window.patentdesign);
app.constant('logConfig', window.logConfig);