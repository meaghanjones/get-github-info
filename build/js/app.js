(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "3f486a1a2a28178f7d5806674b5ffb7bd38fff62";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for (var index = 0; index < response.length; index +=1){
      if (response[index].description !== null) {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: " + response[index].description + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      } else if (response[index].description === " ") {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given" + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      } else {
          $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given" + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      }

    };
    console.log(response.length)
    console.log(response)
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;

},{"./../.env":1}],3:[function(require,module,exports){
var User = require('./../js/user.js').userModule;


$(document).ready(function() {
  $('#github-cat').show();
  $('#newSearchUser').click(function(event){
    event.preventDefault();
    $('#showUserInfo').text("");
    var userName = $('#userName').val();
    newUserObject = new User();
    newUserObject.getRepos(userName);
    $('#github-cat').hide();
  });
});

},{"./../js/user.js":2}]},{},[3]);
