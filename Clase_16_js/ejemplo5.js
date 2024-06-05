const alternar = document.getElementsByClassName(`alternar`)[0]

alternar.addeventlistener(`click`, function(e){
    e.currentTarget.classlist.toggle(`activo`);
})