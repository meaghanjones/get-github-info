var User = require('./../js/user.js').userModule;


$(document).ready(function() {
  $('#github-cat').hide();
  $('#newSearchUser').click(function(event){
    event.preventDefault();
    $('#showUserInfo').text("");
    var userName = $('#userName').val();
    newUserObject = new User();
    newUserObject.getRepos(userName);
    $('#github-cat').show();
  });
});
