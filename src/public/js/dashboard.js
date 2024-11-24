//queryselectorall always give us an array it take each buttons

const deleteButtons = document.querySelectorAll('.btn-view');
console.log(deleteButtons);

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
        if(response.ok){
            window.location.reload()
            alert('deleted suucessfully🎉') 

        }





    })

})




