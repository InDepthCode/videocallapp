
const loginForm = document.getElementById("login-form");

function handleLogin(event) {
    event.preventDefault();

    // get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        email: email,
        password: password
    };

    fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if (!response.ok) {
            return response.text().then(text => {
                alert(text); // you can display this message or log it
                throw new Error(text); // stop further processing
            });
        }
        return response.json();
    }).then(response => {
        localStorage.setItem('connectedUser', JSON.stringify(response));
        window.location.href = 'index.html'
    }).catch(error => {
        console.log('Post Request Error ', error);
    });

}

loginForm.addEventListener("submit", handleLogin)

