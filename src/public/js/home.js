const logout_btn = document.getElementById('logout-btn')


logout_btn.addEventListener('click', async (e) => {
    e.preventDefault()
    const response = await fetch('/logout', {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        }


    })
    if (response.ok) {
      window.location.href="/login"

    }
})


