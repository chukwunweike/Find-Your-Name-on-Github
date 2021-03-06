class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  // Display profile in UI
  showProfile(user){
   this.profile.innerHTML = ` 
    <div class="card card-body mb-3">
      <div class="row">
         <div class="col-md-3">
           <img class="img-fluid mb-2" src="${user.avatar_url}">
           <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
         </div>
         <div class="col-md-9">
           <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
           <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
           <span class="badge badge-success">following:${user.following}</span>
           <span class="badge badge-info">Followers:${user.followers}</span>
           <span class="badge badge-primary">Location:${user.location}</span>
           <br><br>

           <ul class="list-group"> 
             <li class="list-group-item">Company: ${user.company}</li>
             <li class="list-group-item">Websites/Blog: ${user.blog}</li>
             <li class="list-group-item">member Since: ${user.bio}</li>
           </ul>
         </div>
      </div>
    </div>

    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>

   `
  }

  // show alert message
  showAlert(message, className) {
    // clear any remaing alert
    this.clearAlert();
    // create a div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    //Add text 
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.searchContainer');
    //Get search box
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);

    // Timeout after 3seconds
    setTimeout(() => {
     this.clearAlert();
    }, 3000);
  }
  
  // clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();  
    }
  }
   
  //Clear profile
  clearProfile() {
    this.profile.innerHTML = " ";
  }
}