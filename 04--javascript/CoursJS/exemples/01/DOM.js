let el_red = document.getElementById('red');

// console.log( elt_red, typeof elt_red );

// elt_red.classlist.add('class');

let els_green = document.getElementsByClassName('green');
console.log( els_green, typeof els_green );

let els_div = document.getElementsByTagName('div');
console.log( els_div, typeof els_div );

let btns = document.querySelectorAll('[data-switch]');
console.log( btns, typeof btns );

console.log( document.querySelectorAll('[type=button]'));

// Mettre la div id = "red" en rouge au clic sur cette meme div.
el_red.addEventListener('click', function ( event ) {
    console.log( this );
    console.log( event.target );
});

el_red.addEventListener('click', onRedEvent);
el_red.addEventListener('mouseover', onRedEvent);
el_red.addEventListener('mouseout', onRedEvent);

function onRedEvent ( event )
{
    switch (event.type)
    {
        case 'mouseover':
            this.style = "background-color : red";
            break;

        case 'mouseout':
            this.style = "background-color: transparent";
            break;
    }
}