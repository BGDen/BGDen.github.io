// basic paging logic to demo the buttons
let pr = document.querySelector( '.paginate.left' ),
    pl = document.querySelector( '.paginate.right' );

pr.onclick = slide.bind( this, -1 );
pl.onclick = slide.bind( this, 1 );

let index = 0, total = 5;

function slide(offset) {
  index = Math.min( Math.max( index + offset, 0 ), total - 1 );

  document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

  pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
  pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
}

slide(0);
