/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var searchdrawerContainer = querySelector('.searchdrawer-container');
  var body = querySelector('.body');
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var searchBtn = querySelector('.search');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    body.classList.remove('search');
    appbarElement.classList.remove('open');
    appbarElement.classList.remove('search');
    navdrawerContainer.classList.remove('open');
    searchdrawerContainer.classList.remove('search');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  function toggleSearch() {
    body.classList.toggle('search');
    appbarElement.classList.toggle('search');
    searchdrawerContainer.classList.toggle('search');
    searchdrawerContainer.classList.add('searched');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  searchBtn.addEventListener('click', toggleSearch);

  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();

var $cells = $("li");

$("#search").keyup(function() {
    var val = $.trim(this.value).toUpperCase();
    if (val === "")
        $cells.parent().show();
    else {
        $cells.parent().hide();
        $cells.filter(function() {
            return -1 != $(this).text().toUpperCase().indexOf(val); }).parent().show();
    }
});
