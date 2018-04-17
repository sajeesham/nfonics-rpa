//* Custom JS */
$( document ).ready( function () {

  $( '.feature-list-item a' ).on( 'click', function () {
    $( this ).parents( 'ul' ).children( 'li' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
    $( this ).parents( '.feature-list-item' ).find( '.feature-slide' ).removeClass( 'active-slide' );

    if ( $( this ).parent( 'li' ).hasClass( 'first' ) ) {
      //$( this ).parents( '.feature-list-content' ).removeAttr( 'class' ).addClass( 'feature-list-content active-1' );
      $( this ).parents( '.feature-list-item' ).find( '.slide-1' ).addClass( 'active-slide' );
    }
    else if ( $( this ).parent( 'li' ).hasClass( 'second' ) ) {
      //$( this ).parents( '.feature-list-content' ).removeAttr( 'class' ).addClass( 'feature-list-content active-2' );
      $( this ).parents( '.feature-list-item' ).find( '.slide-2' ).addClass( 'active-slide' );
    }
    else if ( $( this ).parent( 'li' ).hasClass( 'third' ) ) {
      //$( this ).parents( '.feature-list-content' ).removeAttr( 'class' ).addClass( 'feature-list-content active-3' );
      $( this ).parents( '.feature-list-item' ).find( '.slide-3' ).addClass( 'active-slide' );
    }
    else {
      //$( this ).parents( '.feature-list-content' ).removeAttr( 'class' ).addClass( 'feature-list-content active-4' );
      $( this ).parents( '.feature-list-item' ).find( '.slide-4' ).addClass( 'active-slide' );
    }

    return false;
  } );

  $( '.dcb-accordion-item.active' ).children( 'p' ).slideDown();

  $( '.dcb-accordion-item h4' ).on( 'click', function () {

    if ( $( this ).parent( '.dcb-accordion-item' ).hasClass( 'active' ) ) {
      $( this ).parent( '.dcb-accordion-item' ).removeClass( 'active' );
      $( this ).parent( '.dcb-accordion-item' ).children( 'p' ).slideUp();
    }
    else {
      $( this ).parent( '.dcb-accordion-item' ).addClass( 'active' );
      $( this ).parent( '.dcb-accordion-item' ).children( 'p' ).slideDown();
    }
  } );

} );