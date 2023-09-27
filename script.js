document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        // Add your login logic here (e.g., validation or authentication)
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const signupUsername = document.getElementById("signup-username").value;
        const signupPassword = document.getElementById("signup-password").value;
        // Add your signup logic here (e.g., user registration)
    });
});
