// method to load users!

function displayUsers(userList, userListElement) {
    userListElement.innerHTML="";

    userList.forEach(user => {
        const listItems = document.createElement("li");
        listItems.innerHTML= `
            
            <div>
            <i class = "fa fa-user-circle"></i>
            ${user.username} <i class="user-email"> (${user.email})</i>
            </div>
            
             <i class="fa fa-lightbulb-o ${user.status === "online" ? "online" : "offline"}"></i>
        `;

        userListElement.appendChild(listItems);
    })
}

function loadAndDisplayUsers(){
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