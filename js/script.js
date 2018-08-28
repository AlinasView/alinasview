/* Fixed Nav Logo*/
var nav = document.querySelector('#main-nav');
var topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
    //    document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
   //     document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll', fixNav);
/* End Fixed Nav Logo*/

/* Toggle Button*/
function toggle_show(id) {
    var e = document.getElementById(id);
    $('.show_more').hide();
    $('.show_less').show();
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';

}

function toggle_hide(id) {
    var e = document.getElementById(id);
    $('.show_more').show();
    $('.show_less').hide();
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';

}
/* End Toggle Button*/

/* Flex Panel Gallery
var panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
 End Flex Panel Gallery*/


/*$('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
  columnWidth: '.grid-sizer',
  percentPosition: true
});*/

/*$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});*/

