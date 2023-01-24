fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    //Get the necessary data
    const profilePicture = data.results[0].picture.large;
    //const name = data.results[0].name.first + " " + data.results[0].name.last;
    //const email = data.results[0].email;
    //const phone = data.results[0].phone;
    document.getElementById("profile-picture").src = profilePicture;

});