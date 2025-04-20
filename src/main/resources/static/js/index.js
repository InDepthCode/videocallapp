// method to load users!

function displayUsers(userList, userListElement) {
    userListElement.innerHTML="";

    userList.forEach(user => {
        const listItems = document.createElement("li");
        listItems.innerHTML= `
            <div>
            <i class = "fa fa-user-circle"></i>
            ${user.username} <i class="user-email"> (${user.email})</i>
             <i class="fa fa-lightbulb-o ${user.status === "online" ? "online" : "offline"}"></i>
             </div>
        `;

        userListElement.appendChild(listItems);
    })
}

function loadAndDisplayUsers(){

    // check if user is connected

    const connectedUser = localStorage.getItem('connectedUser');
    if(!connectedUser){
        window.location = "login.html"
        return;
    }
    const userListElement = document.getElementById("userList");
    
    userListElement.innerHTML="Loading....";
    
    fetch('http://localhost:8080/api/v1/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            displayUsers(data, userListElement);
        })
}

window.addEventListener("load" ,loadAndDisplayUsers);

const logoutBtn = document.getElementById("logoutBtn");

function handleLogout() {
    fetch('http://localhost:8080/api/v1/users/logout' , {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: localStorage.getItem('connectedUser')
    }).then((response) => {
        return response;
    }).then((data) => {
        localStorage.removeItem('connectedUser');
        window.location.href = "login.html"
    })
}

logoutBtn.addEventListener("click", handleLogout)