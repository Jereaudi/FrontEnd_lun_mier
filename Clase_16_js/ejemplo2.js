const link = document.getElementById(`link`)

link.addEventListener(`link`, function(e){
    e.preventDefault();
    alert(`quisiste ir a: ` + e.currentTarget.href)
})

