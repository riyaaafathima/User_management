
const password_el = document.getElementById('password')
console.log(password_el);


const email_el = document.getElementById('email')

const button_el = document.getElementById('login-btn');

const global_Error = document.getElementById('error')

const err_password_el = document.getElementById('err-password')

const err_email_el = document.getElementById('err-email')


button_el.addEventListener('click', async function (e) {
    e.preventDefault();

    const isEmailExist = {
        [email_el.id]: email_el.value,
        [error.id]: password_el.value,

    }



    if (password_el.value.length == 0) {
        err_password_el.innerHTML = 'please enter your password !!'
    }
    if (email_el.value.length == 0) {
        err_email_el.innerHTML = 'please enter your email !!'

    }


    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json '
        },
        body: JSON.stringify({
            password: password_el.value,
            email: email_el.value

        })

    })

    if (response.ok) {
        const result = await response.json();
        if (result.isAdmin) {
            window.location.href = '/dashboard'
        } else {
            window.location.href = "/"
        }


    } else {
        const result = await response.json();
        console.log(result);

        if (result.type == 'email') {
            err_email_el.innerHTML = result.error



        } else if (result.type == 'password') {
            err_password_el.innerHTML = result.error

        } else {
            global_Error.innerHTML = result.error
        }
    }





})


password_el.addEventListener('focus', () => {
    err_password_el.innerHTML = '';
})
email_el.addEventListener('focus', () => {
    err_email_el.innerHTML = '';
})
password_el.addEventListener('focus', () => {
    error.innerHTML = '';
})
