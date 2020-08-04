$(function () {
   $('.product-one__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.blog-aside__tabs .aside__tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.blog-aside__tabs').find('.aside__tab-item').removeClass('active-tab').hide();
      $('.blog-aside__tabs .aside__tabs').find('.aside__tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('select').styler();


   $('.one-page__slider').slick({
      responsive: [
         {
            breakpoint: 601,
            settings: {
               arrows: false,
            }
         },
      ]
   });
   $('.page-rating').rateYo({

      starWidth: '12px',
      normalFill: '#ffffff',
      ratedFill: '#ffc000',
      readOnly: true,
      spacing: '3px',
   });
   $('.product-rating').rateYo({

      starWidth: '20px',
      normalFill: '#ffffff',
      ratedFill: '#ffc000',
      readOnly: true,
      spacing: '3px',
   });

   $('.followers__items').slick({
      Infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 905,
            settings: {
               slidesToShow: 2,
            }

         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }

         },
      ]

   });

   $(".menu__btn").on('click', function () {
      $(".menu__list-item").slideToggle();
   });

   $(".header__btn-menu").on('click', function () {
      $(".header__box").toggleClass('active');
   });


   $('.range-price').ionRangeSlider({
      type: 'double',
      min: 0,
      max: 350,
      from: 30,
      to: 300,
      prefix: '$',
      hide_min_max: true,
      force_edges: true,
      step: 1,
   });

   $(".list-icon").on('click', function () {
      $(".element").addClass('element-list');
      $(".list-icon").addClass('active');
      $(".grid-icon").removeClass('active');
   });


   $(".grid-icon").on('click', function () {
      $(".element").removeClass('element-list');
      $(".grid-icon").addClass('active');
      $(".list-icon").removeClass('active');
   });

   $('.newest__filter-icon').click(function (event) {
      $('.newest__filter-menu').toggleClass('newest__filter-menu--active');

   });

   $(".list-icon").on('click', function () {
      $(".favorites__item").addClass('favorites__item-list');
      $(".list-icon").addClass('active');
      $(".grid-icon").removeClass('active');
   });


   $(".grid-icon").on('click', function () {
      $(".favorites__item").removeClass('favorites__item-list');
      $(".grid-icon").addClass('active');
      $(".list-icon").removeClass('active');
   });

   $('.category__title').on('click', function () {
      $(this).toggleClass('category__title--closed');
      $(this).next().slideToggle();
   });


   var mixer = mixitup('.newest__items');
});

