const btn = document.querySelectorAll('.btn');
const arrowMove = document.querySelector('.arrowMove');
const arrow = document.querySelector('.arrow');

btn.forEach( btn => {
    btn.addEventListener('mousedown', ()=>{
        btn.style.transform = 'translateY(2px)';
    })
    
    btn.addEventListener('mouseup', ()=>{
        btn.style.transform = 'translateY(0px)';
    })
    
    arrowMove.addEventListener('mouseover', ()=>{
        arrow.style.transform = 'translateY(3px)';
    })
})

// Dropdown top header menu

const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.top__dropdown-menu');

function addClass(elems, myClass){
    if( !elems ) { return; }

    if (typeof(elems) === 'string') {
        elems = document.querySelectorAll(elems);
    }
    else if ( elems.tagName ) { elems=[elems]; }

    for (let i = 0; i <elems.length; i++) {
        if ( ( ' '+elems[i].className+' ' ).indexOf( ' '+myClass+' ' ) < 0 ) {
            elems[i].className += ' ' + myClass;
        }
    }
}

dropdown.addEventListener('click', ()=>{
    addClass('.top__dropdown-menu', 'top__dropdown-show');
})