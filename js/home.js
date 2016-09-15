// Handle MouseEnter and MouseLeave for Work Items

$('.work-item').mouseenter(function() {
  $(this).find('.work-item-info').removeClass('item-hidden');
});

$('.work-item').mouseleave(function() {
  $(this).find('.work-item-info').addClass('item-hidden');
});

// Handle Masonry/Packery grid for Social Media (Homepage)

var elem = document.querySelector('.social-media-grid');
var pckry = new Packery(elem, {
  itemSelector: '.social-media-item',
  columnWidth: '.grid-sizer',
  percentageWidth: true
})

// Handle Navigation Toggle

var navigationState = false;

$('.nav-toggle').click(function() {
  if (!navigationState) {
    $('.navigation-main').css('display', 'block');
    $('.nav-toggle').addClass('nav-open');

    setTimeout(function() {
      $('.navigation-main').removeClass('navigation-closed');
    }, 25);

    navigationState = true;
  } else {
    $('.navigation-main').addClass('navigation-closed');
    $('.nav-toggle').removeClass('nav-open');
    navigationState = false;
    setTimeout(function() {
      $('.navigation-main').css('display', 'none');
    }, 300);
  }
})

// Handle Smooth scroll

$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        $(target).velocity('scroll', {
            duration: 1000,
            offset: -80,
            easing: 'easeInOutQuint'
        });
    });
});

//Handle Filtering

$('.content-filter').click(function(e) {
  e.preventDefault;

  var filterType = $(this).attr('data-filter');

  var listItem = $(this).children('li');

  listItem.addClass('active');
  listItem.parent().siblings().find('li').removeClass('active');

  console.log('Filter Type: ' + filterType);

  $('.work-item.filterable').each(function() {
    item = $(this);

    if (item.attr('data-worktype') != filterType && filterType != 'all') {
      item.addClass('animate-fade');

      setTimeout(function() {
        console.log('attempting...');
        $('.animate-fade').css('display', 'none');
      }, 300);
    } else if (item.attr('data-worktype') === filterType || filterType === 'all') {
      $('.animate-fade').css('display', 'block');
      item.removeClass('animate-fade');
    }
  })

  return false;
})
