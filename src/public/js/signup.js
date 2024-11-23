const username_el = document.getElementById("username");

const password_el = document.getElementById("password");

const email_el = document.getElementById("email");

const button_el = document.getElementById('signup-btn');

const err_username_el = document.getElementById('err-username');

const err_email_el = document.getElementById('err-email');

const err_password_el = document.getElementById('err-password');





button_el.addEventListener("click", async function (e) {
    e.preventDefault();

    const user_credential = {
        [email_el.id]: email_el.value,
        [username_el.id]: username_el.value,
        [password_el.id]: password_el.value
    };

    if (username_el.value.length == 0) {
        err_username_el.innerHTML = 'please fill your username ):'

    }


    if (email_el.value.length == 0) {
        err_email_el.innerHTML = 'please fill your email ):'

    }
    if (!email_el) {
        err_email_el.innerHTML = 'please enter a valid email'
    }

    if (password_el.value.length == 0) {
        err_password_el.innerHTML = 'please enter the password ):'

    }

    const respose = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // parse the data int json using JSon.stringify bcz server comm is through json
        body: JSON.stringify(user_credential)
    })


    if (respose.ok) {
        window.location.href = '/'
    } else {
        const result = await respose.json();
        console.log(result);
        // show the result txt in front end

    }



})




username_el.addEventListener('focus', () => {
    err_username_el.innerHTML = "";

})
email_el.addEventListener('focus', () => {
    err_email_el.innerHTML = "";
})

password_el.addEventListener('focus', () => {
    err_password_el.innerHTML = ""
})


