// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',
  layoutMode: 'vertical'
});

// filter functions
var filterFns = {
  // show if
  gehandicapt: function( itemElem ) {
    var gehandicapt = itemElem.querySelector('.gehandicapt').textContent;
    return gehandicapt.match( /ja$/ );
  },
  man: function( itemElem ) {
    var man = itemElem.querySelector('.man').textContent;
    return man.match( / man$/ );
  },
  vrouw: function( itemElem ) {
    var vrouw = itemElem.querySelector('.vrouw').textContent;
    return vrouw.match( / vrouw$/ );
  },
  luier: function( itemElem ) {
    var luier = itemElem.querySelector('.luier').textContent;
    return luier.match( / ja$/ );
  }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}
