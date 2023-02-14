let _main= document.getElementsByTagName('main')[0];

function para(){
    _st= _main.scrollTop
    if( _st>400){
      
        document.getElementsByTagName('nav')[0].classList.add('nav1')
    }
    else{
        document.getElementsByTagName('nav')[0].classList.remove('nav1')
    }
}

let _open = document.getElementsByClassName('fa-bars')[0];
let art = document.getElementsByClassName('art')[0];

_open.onclick= () =>{
    _open.classList.toggle('fa-times');
    _open.classList.toggle('turn');
     art.classList.toggle('show');
     
}




const _product=document.querySelectorAll('.product-container');
const _nxtbtn= document.querySelectorAll('.nxt-btn');
const _prebtn= document.querySelectorAll('.pre-btn');

_product.forEach((item,i)=>{
    let container= item.getBoundingClientRect();
    let containerwidth=container.width;



    _nxtbtn[i].addEventListener('click', ()=>{
        item.scrollLeft+=containerwidth;
        

    })

    _prebtn[i].addEventListener('click', () =>{
        item.scrollLeft -=containerwidth;
    })
})
