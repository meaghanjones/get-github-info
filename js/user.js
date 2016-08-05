var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    for (var index = 0; index < response.length; index +=1){
      if (response[index].description !== null) {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: " + response[index].description);
      } else if (response[index].description === " ") {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given");
      } else {
          $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given");
      }

    };
    console.log(response.length)
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
