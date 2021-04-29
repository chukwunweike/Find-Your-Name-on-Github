class GitHub {
  constructor() {
   this.client_id = "8999801e46aa1c24852f";
   this.client_secret = "7c05f3cc5c05b10a67419d2962d814597d3c6852";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }  
  }
}