
 const registerationForm =  document.getElementById("register-form")

 function handleRegisteration(event) {
     event.preventDefault()

     // ger user input
     const username = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const status  = "online"

     const user = {
         name : username,
         email : email,
         password : password,
         status : status,
     };

     fetch('http://localhost:8080/api/v1/users' ,{
         method: 'POST',
         header: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
     }).then((response) => {
         if(!response.ok){
             throw new Error('Network response was not ok')
         }
     }).then(()=>{
         localStorage.setItem("connectedUser", JSON.stringify(user));
         window.location = "index.html";
     }).catch(() => {
         console.log('Post request error ', error);
     })
 }

 registerationForm.addEventListener("submit", handleRegisteration)