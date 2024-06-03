const items = document.getElementsByClassName(`item`) 
console.log(itmes)

function cambiarVisibilidad(numItem){
    const item = items[numItem];

    if(item.style.visibility == ``){
        item.style.visibility = `hidden`;
    } else {
        item.style.visibility = `;`
    }
}

function cambiarVisibilidad(numItem){
    const item = items[numItem];

    if(item.style.visibility == ``){
        item.style.visibility = `none`;
    } else {
        item.style.visibility = `;`
    }
}

