# Git Get

#### Git Get allows a user to search for a git hub user and then returns various information on the user and their public repositories. August 5th, 2016

#### By **Meaghan Jones**

## Description
A user can enter a GitHub username into a form, submit it and see names, descriptions, and the date the public repositories were created.


## Setup/Installation Requirements
1 Begin the installation by cloning the repository from github.
```
$ git clone https://github.com/meaghanjones/date_suggester.git
```
2 Install NPM and Bower dependencies
```
$npm install; bower install
```
3 Build the projevt and start the server in the browser
```
$gulp serve
```

In order to run this program you must obtain your own access token. In order to do so follow the next steps:
* Visit the settings area of your GitHUb account and select Personal Access Tokens from the sidebar. Then hit Generate New Token. (no need to select any of the options on the list)
* Place your token in the .env file at the top level of your directory with the following information<br>exports.apiKey = "YOUR API KEY HERE";<br>exports.apiKey = apiKey;
* You can then add your .env file to your .gitignore file if you wish.



## Technologies Used

* Node JS
* Gulp
* Bower

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **Meaghan Jones**
