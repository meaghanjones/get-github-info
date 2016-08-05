var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for (var index = 0; index < response.length; index +=1){
      $("#showUserInfo").append("<li>" + response[index].name + " " + response[index].description);
    };
    console.log(response.length)
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
