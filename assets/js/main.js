(function ($) {
    "use strict";
    
    /*--
    currency active
    -----------------------------------*/
    if ($('.currency-wrap').length) {
        var $body2 = $('body'),
            $urdanDropdown2 = $('.currency-wrap'),
            $urdanDropdownMenu2 = $urdanDropdown2.find('.currency-dropdown');
        $urdanDropdown2.on('click', '.currency-active', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.currency-dropdown').addClass('show').slideDown().parent().addClass('show');
            } else {
                $this.siblings('.currency-dropdown').removeClass('show').slideUp().parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body2.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.currency-wrap') && !$($target).parents().is('.currency-wrap') && $urdanDropdown2.hasClass('show')) {
                $urdanDropdown2.removeClass('show');
                $urdanDropdownMenu2.removeClass('show').slideUp();
            }
        });
    }
    
    /*--
    language active
    -----------------------------------*/
    if ($('.language-wrap').length) {
        var $body3 = $('body'),
            $urdanDropdown3 = $('.language-wrap'),
            $urdanDropdownMenu3 = $urdanDropdown3.find('.language-dropdown');
        $urdanDropdown3.on('click', '.language-active', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.language-dropdown').addClass('show').slideDown().parent().addClass('show');
            } else {
                $this.siblings('.language-dropdown').removeClass('show').slideUp().parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body3.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.language-wrap') && !$($target).parents().is('.language-wrap') && $urdanDropdown3.hasClass('show')) {
                $urdanDropdown3.removeClass('show');
                $urdanDropdownMenu3.removeClass('show').slideUp();
            }
        });
    }
    
    // Hero slider active
    var sliderActive = new Swiper('.slider-active', {
        loop: true,
        speed: 750,
        effect: 'fade',
        slidesPerView: 1,
        navigation: {
            nextEl: '.home-slider-next , .home-slider-next2 , .home-slider-next3',
            prevEl: '.home-slider-prev , .home-slider-prev2 , .home-slider-prev3',
        }
    });
    
    /*------ Timer active ----*/
    $('#timer-1-active').syotimer({
        year: 2021,
        month: 12,
        day: 31,
        hour: 23,
        minute: 59,
        layout: 'hms',
        periodic: false,
        periodUnit: 'd'
    });
    
    // Product slider active 1
    var sliderActiveTwo = new Swiper('.product-slider-active-1', {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-next-1',
            prevEl: '.product-prev-1',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });

    var sliderActiveTwo = new Swiper('.product-slider-active-2', {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-next-1',
            prevEl: '.product-prev-1',
        },
        slidesPerView: 2, // Display two slides at a time
        breakpoints: {
            576: {
                slidesPerView: 2, // Still display two slides at a time on smaller screens
                spaceBetween: 20 // Adjust space between slides as needed
            },
            1200: {
                slidesPerView: 4 // Change back to 4 for larger screens if needed
            }
        }
    });
    
    

    // // Add event listener to the "Send message" button
    // document.getElementById('sendMessageBtn').addEventListener('click', function() {
    //     // Close the modal
    //     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    //     myModal.hide();
        
    //     // Show the alert
    //     alert('You have successfully made a request!');
    // });



    // document.getElementById('sendMessageBtn').addEventListener('click', function() {
    //     // Close the modal
    //     var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
       
    //     // Create and style the alert
    //     var alertDiv = document.createElement('div');
    //     alertDiv.textContent = 'You have successfully made a request!';
    //     alertDiv.classList.add('custom-alert'); // Add custom class
    //     document.body.appendChild(alertDiv);
    //     myModal.hide();
    //     // Animate the alert sliding down from the top
    //     setTimeout(function() {
    //         alertDiv.style.top = '20px'; // Adjust the final top position
    //     }, 100); // Add a small delay before starting the animation
       
    //     // Remove the alert after 3 seconds (optional)
    //     setTimeout(function() {
    //         alertDiv.style.top = '-50px'; // Slide the alert back up
    //         setTimeout(function() {
    //             alertDiv.remove(); // Remove the alert after it slides up
    //         }, 500); // Wait for the transition to complete before removing
    //     }, 3000); // Adjust the duration as needed
    // });
    document.getElementById('mod').addEventListener('click', function() {
        // Get the modal element
        var modalElement = document.getElementById('exampleModal5');
    
        // Close the modal using Bootstrap's modal method
        var modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    
        // Create and style the alert
        var alertDiv = document.createElement('div');
        alertDiv.textContent = 'You have successfully made a request!';
        alertDiv.classList.add('custom-alert'); // Add custom class
        document.body.appendChild(alertDiv);
    
        // Animate the alert sliding down from the top
        setTimeout(function() {
            alertDiv.style.top = '20px'; // Adjust the final top position
        }, 100); // Add a small delay before starting the animation
       
        // Remove the alert after 3 seconds (optional)
        setTimeout(function() {
            alertDiv.style.top = '-50px'; // Slide the alert back up
            setTimeout(function() {
                alertDiv.remove(); // Remove the alert after it slides up
            }, 500); // Wait for the transition to complete before removing
        }, 3000); // Adjust the duration as needed
    });
    

    // Brand logo active
    var sliderActiveThree = new Swiper('.brand-logo-active', {
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });
    
    
    // Category slider active
    var sliderActiveFour = new Swiper('.category-slider-active', {
        loop: true,
        spaceBetween: 43,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });
    
    // Category slider active 2
    var sliderActiveFive = new Swiper('.category-slider-active-2', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 6,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            479: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });
    
    // Product slider active 2
    var sliderActiveSix = new Swiper('.product-slider-active-2', {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });
    
    // Testimonial active
    var sliderActiveSeven = new Swiper('.testimonial-active', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3
            }
        },
    });
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.product-quality');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class=" ti-arrow-up "></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var $window = $(window);
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    /*-------------------------------
	   Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.search-wrap-1').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.search-wrap-1').addClass('open');
        }
    })
    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();
    
    /*====== product-color-active ======*/
    $(".product-color-active ul li a").on('click', function(e) {
        e.preventDefault();
        $(".product-color-active ul li a").removeClass("active");
        $(this).addClass("active");
    });
    
    /*--------------------------
        Isotope active 1
    ---------------------------- */
    $('.grid').imagesLoaded(function() {
        // init Isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer',
            }
        });
    });
    
    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 20,
            max: 200,
            values: [0, 160],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    }); 
    
    
    /* NiceSelect */
    $('.nice-select').niceSelect();
    
    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    
    /*---------------------
        Select active
    --------------------- */
    $('.select-two-active').select2();
    $(window).on('resize', function(){
        $('.select-two-active').select2()
    });
    
    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    
    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });
    
    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    /*----------------------------------------
		Product details small img slider 1
    -----------------------------------------*/
    var productDetailsSmallOne = new Swiper('.product-details-small-img-slider-1', {
        loop: false,
        spaceBetween: 12,
        slidesPerView: 4,
        direction: 'vertical',
        navigation: {
            nextEl: '.pd-next',
            prevEl: '.pd-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    

    
    /*----------------------------------------
		Product details big img slider 1
    -----------------------------------------*/
    var productDetailsBigThree = new Swiper('.product-details-big-img-slider-1', {
        autoplay: false,
        delay: 5000,
        slidesPerView: 1,
        loop: false,
        thumbs: {
            swiper: productDetailsSmallOne
        }
    });
    
//filter products part
    document.addEventListener("DOMContentLoaded", function() {
        // Get all products
        const products = document.querySelectorAll('.product-wrap');

        // Get all category filter links
        const categoryFilters = document.querySelectorAll('.category-filter');

        // Add click event listener to each category filter link
        categoryFilters.forEach(function(filter) {
            filter.addEventListener('click', function(event) {
                event.preventDefault();
                const category = this.getAttribute('data-category');

                // Hide all products
                products.forEach(function(product) {
                    product.style.display = 'none';
                });

                // Show products matching the selected category
                const filteredProducts = document.querySelectorAll(`.product-wrap[data-category="${category}"]`);
                // Display filtered products next to each other in a row
                filteredProducts.forEach(function(product) {
                    product.style.display = 'inline-block';
                    product.style.verticalAlign = 'top'; // Align products to the top of the row
                    product.style.marginRight = '20px'; // Add some space between products
                    // Append filtered products directly to the shop container
                    document.getElementById('shop-1').appendChild(product);
                });
            });
        });
    });

  

    /*----------------------------------------
		Product details small img slider 2
    -----------------------------------------*/ 
    var productDetailsSmallTwo = new Swiper('.product-details-small-img-slider-2', {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
            nextEl: '.pd-next-2',
            prevEl: '.pd-prev-2',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            479: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    
    /*----------------------------------------
		Product details big img slider 2
    -----------------------------------------*/
    var productDetailsBigTwo = new Swiper('.product-details-big-img-slider-2', {
        autoplay: false,
        delay: 5000,
        slidesPerView: 1,
        loop: false,
        thumbs: {
            swiper: productDetailsSmallTwo
        }
    });
    
    // Related product active
    var relatedProductActive = new Swiper('.related-product-active', {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });
    


//       /**
//    * Testimonials slider
//    */
//   new Swiper('.testimonials-slider', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     }
//   });



    /*-----------------------
        Image Popup active
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*====== mobile-menu active ======*/
    const slinky = $('#mobile-menu').slinky();
    const slinky2 = $('#mobile-currency').slinky();
    const slinky3 = $('#mobile-language').slinky();
    
    /*====== off canvas active ======*/
    function mobileMainMenu() {
        var navbarTrigger = $('.mobile-menu-active-button'),
            endTrigger = $('.off-canvas-close'),
            container = $('.off-canvas-active'),
            wrapper = $('.main-wrapper-2');
        
        wrapper.prepend('<div class="body-overlay-2"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active-2');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
        
        $('.body-overlay-2').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active-2');
        });
    };
    mobileMainMenu();
    
    /*-------------------------
      Scroll Animation
    --------------------------*/
    AOS.init({
        once: true,
        duration: 1000,
    });
    
})(jQuery);

