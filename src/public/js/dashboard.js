//queryselectorall always give us an array it take each buttons

const deleteButtons = document.querySelectorAll('.btn-view');

const logout_btn = document.getElementById('logout-btn');

const search_btn = document.getElementById('search-bar');

const search_button = document.getElementById('search-btn')

//mapping for getting each button foradding each in addevntlistenre  item== button
deleteButtons.forEach((item) => {
    item.addEventListener('click', async () => {
        console.log("delete id", item.id);

        // we assingning item.id to the :id in router through path params so , item.id is value and key as :id
        const response = await fetch(`/deleteUser/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }



        })
        if (response.ok) {
            window.location.reload()
            alert('deleted suucessfully🎉')

        }





    })


})

logout_btn.addEventListener('click', async (e) => {
    e.preventDefault()
    const response = await fetch('/logout', {
        method: "GET",
        headers: {
            "Content-Type": 'application/json'
        }


    })
    if (response.ok) {
        window.location.href = "/login"

    }
})



// search_button.addEventListener('click', async(e)=>{
//     e.preventDefault()
//     const response = await fetch(`/getAllUsers?name=${search_btn.value}`, {          ///writing query
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     })
//     console.log(search_btn.value);

//     if (response.ok) {
//         // window.location.()

//     }

// })







