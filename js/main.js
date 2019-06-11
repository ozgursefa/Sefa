
// Show and Hide search text
$('#search-button').click(function(){
    $('#search-input').toggleClass('active');
    $('.navbar-search').toggleClass('form-active');
});

// Show and Hide order menu
$('.dropdown-click').click(function(){
    $('.order-dropdown-menu').toggleClass('dropdown-active');
});