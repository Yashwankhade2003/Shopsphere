const showmenu=()=>{
    let panel=document.querySelectorAll('.panel-option')[0];
    let isActive=panel.classList.contains('active');
    console.log(isActive, panel.classList)
    if(isActive){
        console.l
        panel.classList.remove('active');
    }
    else{
        panel.classList.add('active');
    }

}