$(document).ready(function(){
       $('.content').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000
      });
   $('.pop').click(function(){
        console.log($(this)[0]);
        var x=$(this)[0].children[0];
        console.log(x);
        console.log($(x).attr('src'));
        $('#imagepreview').attr('src', $(x).attr('src')); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });
  });