
// let cube = document.querySelector(".cube");
// let btnNext = document.getElementById("next");
// let btnPrev = document.getElementById("prev");
// btnNext.addEventListener("click", () => {
//   pos -= 90;
//   cube.style.transform = `rotateY(${pos}deg)`;
// });
// btnPrev.addEventListener("click", () => {
//   pos += 90;
//   cube.style.transform = `rotateY(${pos}deg)`;
// });

// $(function() {
				
//   var Page = (function() {
    
//     var $navArrows = $( '#nav-arrows' ).hide(),
//         $shadow = $( '#shadow' ).hide(),
//         slicebox = $( '#sb-slider' ).slicebox( {
//           onReady : function() {
            
//             $navArrows.show();
//             $shadow.show();
            
//           },
//           orientation : 'r',
//           cuboidsRandom : true,
//           disperseFactor : 30
//         } ),
        
//         init = function() {
          
//           initEvents();
          
//         },
//         initEvents = function() {
          
//           // add navigation events
//           $navArrows.children( ':first' ).on( 'click', function() {
            
//             slicebox.next();
//             return false;
            
//           } );
          
//           $navArrows.children( ':last' ).on( 'click', function() {
            
//             slicebox.previous();
//             return false;
            
//           } );
          
//         };
    
//     return { init : init };
    
//   })();
  
//   Page.init();
  
// });



// const carouselItems = document.querySelectorAll(".carousel_item"); 
// let ix = 1;

// setInterval(() => {
// // Accessing All the carousel Items
//  Array.from(carouselItems).forEach((item,index) => {

//    if(ix < carouselItems.length){
//     item.style.transform = `translateX(-${ix*100}%)`
//    }
//   })


//   if(ix < carouselItems.length){
//     ix++;
//   }
//   else{
//     ix=0;
//   }
// },100);
// $(function(){
//   var SetCarouselHeight = function() {
//       $("#carouselExampleSlidesOnly .carousel-inner .carousel-item > img").height(function(){
//           return $("#carouselExampleSlidesOnly").width() * 0.30;
//       });
//   }

//   SetCarouselHeight();
//   $(window).resize(function(){
//       SetCarouselHeight();
//   }); 
// });

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kaliszewskimaciej@gmail.com",
    Password: "Gunner68rh25!",
    To: 'kaliszewskimaciej@gmail.com',
    From: "kaliszewskimaciej@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
      alert("mail sent successfully "+ message)
    });
}
function xd(){
document.getElementById('xd').scrollIntoView();
}

jQuery(document).ready(function($) {

	'use strict';
      
      $('#form-submit .date').datepicker({
      });



      var owl = $("#owl-testimonial");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });


        
        $('.recommendedgroup > div').hide();
        $('.recommendedgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('recommendedgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })


        $('.weathergroup > div').hide();
        $('.weathergroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('weathergroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});

//By @k@lisz

$(window).scroll(function(){
  
  let oppai = $(this).scrollTop(); 
  
  $('#content article').css({opacity:100/oppai,filter: 'blur('+oppai/100+'px)'});  
    $('#content').css({opacity: 100/oppai}); 
  
if(oppai>190){
	if(!$('body').hasClass('abrido'))
		$('#header-main').addClass('arre'); 
  }
else{
  $('#header-main').removeClass('arre');
    }
});

$('#burger').on('click',function(e) {
  
	e.preventDefault();
  
	$('#nav-main, body, #burger').toggleClass('abrido');
  $('body').toggleClass('blockPage');
	if($('#header-main').hasClass('arre'))
		{$('#header-main').removeClass('arre').addClass('arreno');}
	else if($('#header-main').hasClass('arreno'))
		{	$('#header-main').removeClass('arreno');
			setTimeout(()=>{$('#header-main').addClass('arre')},800);}

});

$('#brandID').on('click',function(e) {
  e.preventDefault();
	 $('#nav-main, body, #burger').removeClass('abrido');
   scrollToTargetAdjusted('homepage');
});

function scrollToTargetAdjusted(targetElementID){
  var element = document.getElementById(targetElementID);
  var headerOffset = 100;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}



var previous = document.getElementById('btnPrevious')
var next = document.getElementById('btnNext')
var gallery = document.getElementById('image-gallery')
var pageIndicator = document.getElementById('page')
var galleryDots = document.getElementById('gallery-dots');

var images= [];
for (var i = 0; i < 36; i++) {
  images.push({
    title: "Image " + (i + 1),
    source: "https://picsum.photos/500/500?random&img=" + i
  });
}

var perPage = 8;
var page = 1;
var pages = Math.ceil(images.length / perPage)


// Gallery dots
for (var i = 0; i < pages; i++){
  var dot = document.createElement('button')
  var dotSpan = document.createElement('span')
  var dotNumber = document.createTextNode(i + 1)
  dot.classList.add('gallery-dot');
  dot.setAttribute('data-index', i);
  dotSpan.classList.add('sr-only');
  
  dotSpan.appendChild(dotNumber);
  dot.appendChild(dotSpan)
  
  dot.addEventListener('click', function(e) {
    var self = e.target
    goToPage(self.getAttribute('data-index'))
  })
  
  galleryDots.appendChild(dot)
}

// Previous Button
previous.addEventListener('click', function() {
  if (page === 1) {
    page = 1;
  } else {
    page--;
    showImages();
  }
})

// Next Button
next.addEventListener('click', function() {
  if (page < pages) {
    page++;
    showImages();
  }
})

// Jump to page
function goToPage(index) {
  index = parseInt(index);
  page =  index + 1;
  
  showImages();
}

// Load images
function showImages() {
  while(gallery.firstChild) gallery.removeChild(gallery.firstChild)
  
  var offset = (page - 1) * perPage;
  var dots = document.querySelectorAll('.gallery-dot');
  
  for (var i = 0; i < dots.length; i++){
    dots[i].classList.remove('active');
  }
  
  dots[page - 1].classList.add('active');
  
  for (var i = offset; i < offset + perPage; i++) {
    if ( images[i] ) {
      var template = document.createElement('div');
      var title = document.createElement('p');
      var titleText = document.createTextNode(images[i].title);
      var img = document.createElement('img');
      
      template.classList.add('template')
      img.setAttribute("src", images[i].source);
      img.setAttribute('alt', images[i].title);

      title.appendChild(titleText);
      template.appendChild(img);
      template.appendChild(title);
      gallery.appendChild(template);      
    }
  }
  
  // Animate images
  var galleryItems = document.querySelectorAll('.template')
  for (var i = 0; i < galleryItems.length; i++) {
    var onAnimateItemIn = animateItemIn(i);
    setTimeout(onAnimateItemIn, i * 100);
  }
  
  function animateItemIn(i) {
    var item = galleryItems[i];
    return function() {
      item.classList.add('animate');
    }
  }
  
  // Update page indicator
  pageIndicator.textContent = "Page " + page + " of " + pages;
  
}

showImages();

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}


