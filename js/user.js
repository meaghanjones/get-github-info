var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?&per_page=300&access_token=' + apiKey).then(function(response){
    // $("#showUserPhoto").text("<img src=" + response[0].owner.avatar_url) + ">");
    for (var index = 0; index < response.length; index +=1){
      if (response[index].description !== null) {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: " + response[index].description + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      } else if (response[index].description === " ") {
        $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given" + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      } else {
          $("#showUserInfo").append("<li>" + "Repo Name: " + response[index].name + " || " + "Description: none given" + "<br>" + "Clone Repo here: " + "<a href = '" + response[index].clone_url + "'" + ">" + response[index].clone_url + "</a>");
      }

    }
    console.log(response.length);
    console.log(response);
  }).fail(function(error){
    $("#showErrorMessage").text("User " + userName + " " + error.responseJSON.message + ". " + "Please try again." );
  });
};

exports.userModule = User;
