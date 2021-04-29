// creating an object of the class GitHub
const github = new GitHub;
// Creating an object of the class UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// creating an eventlistener for search input
searchUser.addEventListener('keyup', (e) => {
  //Get input Text
const userText = document.getElementById('searchUser').value;
if(userText !== ''){
  // making an http call
  github.getUser(userText)
  .then(data => {
    if(data.profile.message === 'Not Found') {
      // Show alert
      ui.showAlert('User Not Found', 'alert alert-danger');
    } else {
      //show profile
      ui.showProfile(data.profile)
    }
  });
} else {
  // clear profile
  ui.clearProfile();
}
e.preventDefault();
});

