
// FOOTER MENU - SMARTPHONE < 768px - sbalování a rozbalování menu v patičce  při přepnutí do mobilního zobrazení

$(document).ready(function() { 

  $( ".footer h3" ).click(function() {
    if (window.innerWidth < 768) {
      $(this).toggleClass("active");
      $(this).next(".collapsed-menu").slideToggle("1000");
    }  
  });

  if (window.innerWidth < 768) {      
     $( "ul.collapsed-menu" ).addClass( "collapsed" );   
  }  
  
  $(window).on('resize', function() {
  
    if (window.innerWidth < 768) {      
     $( "ul.collapsed-menu" ).addClass( "collapsed" );   
    }  else {      
     $( "ul.collapsed-menu" ).removeClass( "collapsed" );   
    } 
  
  });
      
});


// MAIN MENU - chování hlavního menu napříč zařízeními

 $(document).ready(function() {
  $(window).on('resize', function() {   // Tablet/Mobile transform
    if (window.innerWidth < 768) {
     $(".menu-level2").removeClass("hidden");
    } 
  });
 });
 
   
  $(document).ready(function() {     
    if (('ontouchstart' in window)) {    // TOUCHING DEVICES
    
        // TABLET
            
        $(".menu-level1-li > a").click(function() { 
          $('.carousel').carousel('cycle');   // CONTINUE CAROUSEL AUTOCYCLE
          $(this).parent().toggleClass("active-hover");
          $(this).parent().find(".menu-level2").toggleClass("opened").removeClass("hidden");
          if ($(".login-popupC").is(':visible')) {     // HIDE LOGIN POPUP IF VISIBLE
           $(".login-popupC").hide();
          }                        
          
      });    
  
    
    
   } else {   // DESKTOP 
      
    
          $(".menu-level1-li > a").click(function() {    
          $(this).parent().find(".menu-level2").toggleClass("clicked").removeClass("opened hidden").addClass("this");
          $(this).parents().find(".menu-level2.leaved.clicked").parent().removeClass("active-hover");
          $(this).parents().find(".menu-level2.leaved.clicked").addClass("hidden");
          $(this).parents().find(".menu-level2.leaved.clicked").removeClass("clicked");
          $(this).parents().find(".menu-level2.opened").removeClass("opened clicked");    
        });  
  
      }
    
   // ALL MEDIA
   
      $(".menu-level1-li").mouseenter(function() {
        if (window.innerWidth > 767) {   
          $('.carousel').carousel('pause');   // STOP CAROUSEL AUTOCYCLE
          $(this).addClass("active-hover");
          $(this).find(".menu-level2").addClass("opened").removeClass("hidden leaved");
          if ($(".login-popupC").is(':visible')) {     // HIDE LOGIN POPUP IF VISIBLE
           $(".login-popupC").hide();
          }  
        }  
      });   
       
      $(".menu-level1-li").mouseleave(function() {     
        if (window.innerWidth > 767) { 
          $('.carousel').carousel('cycle');   // CONTINUE CAROUSEL AUTOCYCLE
          $(this).find(".menu-level2").addClass("leaved");
          if (!$(this).find(".menu-level2").hasClass("clicked")) {
              $(this).removeClass("active-hover");
              $(this).find(".menu-level2").addClass("hidden");
          } 
        }  
    });
    
       $(".menuClose").click(function() {  // MENU CLOSE BUTTON 
        if (window.innerWidth > 767) {            
        $('.carousel').carousel('cycle');   // CONTINUE CAROUSEL AUTOCYCLE
          $(this).parent().parent().toggleClass("active-hover");
          $(this).parent(".menu-level2").toggleClass("opened");
          $(this).parent(".menu-level2").addClass("hidden");
          $(this).parent(".menu-level2").removeClass("clicked");
        }
      });
            
  
});

// RESPONSIVE MENU  - iniciace hamburgeru a menu v mobilním zobrazení


$(document).ready(function(){
	$('#dl-menu').slicknav();
});


// RESPONSIVE BREADCRUMBS  - drobečková navigace a její chování  (max jeden řádek, pakliže jich je více, tak se sbalí a dá rozkliknout)

$(document).ready(function() {
   $(".breadcrumb ul").addClass("jquery");
   $( ".breadcrumb .container" ).prepend( '<div class="rcrumbs-toggle"></div>' );
   
   if ( $( ".breadcrumb" ).length ) {
     $(window).on('load resize', function() { 
       if ($('.breadcrumb ul')[0].scrollWidth  > $('.breadcrumb ul').innerWidth()) {
        $(".rcrumbs").addClass("rcrumbs-margin");
        $(".rcrumbs-toggle").show();
      } else  {
        if (!$(".rcrumbs-toggle").hasClass("active")) {
          $(".rcrumbs").removeClass("rcrumbs-margin");
          $(".rcrumbs-toggle").hide();
        }
       } 
    });
  }
  
  $(".rcrumbs-toggle").click(function() {
    $(this).toggleClass("active");
    $(".breadcrumb ul").toggleClass("jquery");
  });          
});


// LOGIN POPUP - vyskakovací okno pro přihlášení

$(document).ready(function() { 

     $("#login-btn").click(function() {
        $(this).toggleClass("active");
        $(".login-popupC").toggle();  
        $(".active-hover .menu-level2").toggleClass("clicked").removeClass("opened hidden");
        $(".menu-level1-li.active-hover").removeClass("active-hover");
        
        if (window.innerWidth < 768) {
          $("#search-btn").removeClass("active");
          $(".top-right-search-inputC").hide();
          
          if ( $( ".slicknav_btn" ).is( ".slicknav_open" ) ) {
           $(".slicknav_btn").toggleClass("slicknav_open slicknav_collapsed");
           $(".slicknav_nav").toggleClass("slicknav_hidden");
           $(".slicknav_nav").toggle();
          // $(".slicknav_btn").trigger( "click" );
          }
        }
    });    
    
});


//  MOBILE NON-LOGGED USER - menu button

$(document).ready(function() {  
  $(".mobile-not-logged a").click(function (e) {
    $("#login-btn").trigger("click");
  });
});

// SEARCH POPUP - vyskakovací okno pro vyhledávání

$(document).ready(function() {    
     $("#search-btn").click(function() {
        $(this).toggleClass("active");
        $(".top-right-search-inputC").toggle();
        
        if (window.innerWidth < 768) {
          $("#login-btn").removeClass("active");
          $(".login-popupC").hide();
        
          if ( $( ".slicknav_btn" ).is( ".slicknav_open" ) ) {
           $(".slicknav_btn").toggleClass("slicknav_open slicknav_collapsed");
           $(".slicknav_nav").toggleClass("slicknav_hidden");
           $(".slicknav_nav").toggle();
          // $(".slicknav_btn").trigger( "click" );
          }
        }
    });

  $(window).on('resize', function() {  // Mobile/Tablet transform
    if (window.innerWidth > 767) {
      $(".top-right-search-inputC").show();
    } else {
      $(".top-right-search-inputC").hide();
      $("#search-btn").removeClass("active");
    }      
  });
    
});

// MENU HAMBURGER ARROW  + STOP/CONTINUE CAROUSEL AUTOCYCLE  - v mobilním zobrazení se stopuje autocycle carouselu při vyjetém menu

$(document).ready(function() { 
     $(".dl-trigger").click(function() {
        $(".navigation-arrow").toggle();
        
        if ($(".dl-trigger").hasClass("dl-active")) {
          $('.carousel').carousel('cycle');   // CONTINUE CAROUSEL AUTOCYCLE
        } else {
            $('.carousel').carousel('pause');   // STOP CAROUSEL AUTOCYCLE
          }
    });
});

// ACCORDION - obecný skript pro accordion - např. stránka sample.html (dokumenty ke stažení/faq)

$(document).ready(function() { 
  $( ".accordion h3.accordion-title" ).click(function() {
       $(this).toggleClass("active");
       $(this).next(".accordion-li").slideToggle("slow").toggleClass("active");
     });
});

// INVERT TABLE ROWS AND COLUMNS  - přehození řádků tabulky (table class="invert") s jejími sloupci v mobilním zobrazení- např. sample.html 

$(document).ready(function() { 
  if (window.innerWidth < 768) {  
    $("table.invert").each(function() {
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function(){
            var i = 0;
            $(this).find("td").each(function(){
                i++;
                if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
                newrows[i].append($(this));
            });
        });
        $this.find("tr").remove();
        $.each(newrows, function(){
            $this.append(this);
        });
    });
    }
    return false;
});
   

// TABS-1 FILL TITLE TEXT - SMARTPHONES and TABLETS - sample.html - taby s obrázky (vrchní část stránky - Státní příspěvky, Příspěvky zaměstnavatele apod) - v mobilním zařízení se nadpisy k ikonám "ztratí" a zobrazí jinde - v divu na to určeném podle toho, který tab je aktivní

$(document).ready(function() { 
  var text = $(".tabs-1 .active").text();
  $('.tabs-1-title').html(text);
  $(".tabs-1 a").click(function() {
    var text = $(this).text();
    $('.tabs-1-title').html(text);
  }); 
});  

// EASY RESPONSIVE TABS - ACCORDION   - sample.html (spodní část stránky - Základní informace, Kalkulačky apod) - funkce pro přechod tabů do accordionu v mobilním rozbrazení . využívá easyResponsiveTabs.js

$(document).ready(function() {
  $('.tabs-2').easyResponsiveTabs({
    tabidentify: 'hor_1' // The tab groups identifier
  });
});



// RESPONSIVE TABLES - zatím nevyužíváno 
/*

  $(document).ready(function() { 
    
    var $th = $("thead th");
    $('tbody tr td').attr('data-attr', function () {
        return $th.eq($(this).index()).text();
    });
           
  });

*/

     
 
// COMPLEX CALCULATOR - SMARTPHONE < 768px  -  kalkulacka-podrobna.html - sbalování a rozbalování kalkulaček v mobilním zařízení

$(document).ready(function() { 

  $( ".calculator-complex-title" ).click(function() {
    if (window.innerWidth < 768) {
      $(this).toggleClass("active");
      $(this).next(".calculator-complex-content").slideToggle("1000");
    }  
  });

  if (window.innerWidth < 768) {      
     $( ".calculator-complex-content" ).addClass( "collapsed" );   
  }  
  
  $(window).on('resize', function() {
  
    if (window.innerWidth < 768) {      
     $( ".calculator-complex-content" ).addClass( "collapsed" );   
    }  else {      
     $( ".calculator-complex-content" ).removeClass( "collapsed" );   
    } 
  
  });
      
});

// STICK ELEMENT IN PARRENT  -  kalkulacka-podrobna.html - pravý panel s výsledky kalkulačky zůstává přilepený na obrazovce i při scrollování. Obecně jakýkoliv div s classou "stick-in-parent" se takto chová - position: fixed vzhledem ke svému rodiči.

$(document).ready(function() { 
  $(".stick-in-parent").stick_in_parent();
});

// show/hide toggler  -  vyhledavani.html - zobrazení/schování obsahu divu po kliknutí na odkaz - v tomto případě "Podrobné vyhledávání"

function toggler(divId) {
    $("#" + divId).toggleClass("hidden");
    $(this).toggleClass("hidden");
}  

$(document).ready(function() {  
  $(".show-hide").click(function() {
    $(this).toggleClass("active");
  });          
});

// QUICK FORM   -  kontaktni-formular.html

// QUICK FORM TOGGLE   - rozkliknutí obsahu rychlého kontaktního formuláře - max jeden řádek, u tabletů a mobilů se musí rozkliknout

/*
function pageLoad(sender, args) {
  $('.quick-form-toggle').click(function() {
    $(this).parents('.quick-form').toggleClass('open');
  });           
};
*/



// QUICK FORM STICKY POSITION   - přilepení rychlého kontaktního formuláře ke spodní části obrazovky po sescrollování o určitou výšku

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) {
            //$('.quick-form').css('position', 'fixed'); // fixed when you scroll down
            $('.quick-form').css('display', 'block'); // display when you scroll down
        }
    });
});

  
  
//  TOOLTIP  - např. kalkulacka-podrobna.html - iniciace tooltipů

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


// MOBILE TOGGLE - funds table list -  např. seznam-fondu.html nebo modelace-portfolia.html - sbalení/rozbalení fondu v tabulce v tabletu/mobilu

$(document).ready(function() {  
  $(".mobile-toggle").click(function() {
    $(this).toggleClass("active");     
        if ($(this).parent().nextAll("td").is( ".hidden-cell" )) {
          $(this).parent().nextAll("td.hidden-cell").toggleClass("hidden-cell cell");
        } else  {
           $(this).parent().nextAll("td").toggleClass("hidden-cell");
          }
  });          
});

// MY CONSEQ - funds group TOGGLE -  sbalení/rozbalení souboru fondů v tabulce

$(document).ready(function() {  

  $("tr.subtitle td.closed").parent().nextAll("tr.fund-item").hide();

  $("tr.subtitle").click(function() {
    $(this).find("td").toggleClass("opened closed");     
    $(this).find("td.opened").parent().nextUntil("tr.subtitle").css( "display", "table-row" );
    $(this).find("td.closed").parent().nextUntil("tr.subtitle").hide();
  });          
});



//  TABS CONVERT TO DROPDOWN (mobile) - konverzce tabů do tzv. comba ( = dropdown menu) v mobilním zobrazení - např. modelace-portfolia.html když to hodně zmenšíte (pod šířku 350px), ale i jinde - všude, kde jsou "tabs-3"

$( window ).load(function() {

  $('.nav-tabs-dropdown').each(function(i, elm) {
      $(elm).text($(elm).next('ul').find('li.active a').text()); 
  });   
  
  $('.nav-tabs-dropdown.online-contract-menu').each(function(i, elm) {
      $(elm).text($(elm).next('ul').find('li a.active').text()); 
  });   
    
  $('.nav-tabs-dropdown').on('click', function(e) {
      e.preventDefault();
      $(e.target).toggleClass('open').next('ul').toggle();
  });
  
  $('.nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {
      e.preventDefault();
      $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());    
  });

});


// ACCORDION IN TABLE

$(document).ready(function() {  
  $(".td-accordion-title").click(function() {
    $(this).toggleClass("open");     
    $(this).parent().nextUntil( ".fund-group" ).toggleClass("hidden").removeClass('favourite-show');;
  });            
});

//  UN/SELECT ALL CHECKBOXES  - MY CONSEQ SETTINGS

$(document).ready(function() {
  $(".prices-all-checkbox input:checkbox").click(function () {
     $(this).closest(".fund-group").nextUntil( ".fund-group" ).find('.prices-checkbox input:checkbox').not(this).prop('checked', this.checked);
     if ($(this).is(':checked')) {
        $(this).parents('.prices-all-checkbox').addClass('some-selected-group');
     } else  {
        $(this).parents('.prices-all-checkbox').removeClass('some-selected-group');
     }
  });
  $(".info-all-checkbox input:checkbox").click(function () {
     $(this).closest(".fund-group").nextUntil( ".fund-group" ).find('.info-checkbox input:checkbox').not(this).prop('checked', this.checked);
     if ($(this).is(':checked')) {
        $(this).parents('.info-all-checkbox').addClass('some-selected-group');
     } else  {
        $(this).parents('.info-all-checkbox').removeClass('some-selected-group');
     }
  });
  
  
  $(".prices-checkbox input:checkbox").click(function () {
    $(this).closest(".fund-item").prevAll( ".fund-group" ).first().find('.prices-all-checkbox input:checkbox').removeAttr('checked');
  });
  
  $(".info-checkbox input:checkbox").click(function () {
    $(this).closest(".fund-item").prevAll( ".fund-group" ).first().find('.info-all-checkbox input:checkbox').removeAttr('checked');
  });
  
 
  
  $(".prices-checkbox input").change(function(){ 
    if ($(this).is(':checked')) {
       $(this).closest(".fund-item").prevAll( ".fund-group" ).first().find('.prices-all-checkbox').addClass('some-selected-group');  
    } else  {
       if($(this).parents('.fund-tbody').find('.prices-checkbox input[type="checkbox"]:checked').length == 0){

            $(this).parents('.fund-tbody').find(".prices-all-checkbox").removeClass('some-selected-group');
        }
    }
  });
  
  $(".info-checkbox input").change(function(){ 
    if ($(this).is(':checked')) {
       $(this).closest(".fund-item").prevAll( ".fund-group" ).first().find('.info-all-checkbox').addClass('some-selected-group');  
    } else  {
       if($(this).parents('.fund-tbody').find('.info-checkbox input[type="checkbox"]:checked').length == 0){

            $(this).parents('.fund-tbody').find(".info-all-checkbox").removeClass('some-selected-group');
        }
    }
  });
  

  
  $('.prices-all-checkbox input:checkbox').filter(function() {
    return $(this).closest(".fund-group").nextUntil( ".fund-group" ).find('.prices-checkbox input:checkbox').is(':checked');
  }).closest(".prices-all-checkbox").addClass('some-selected-group'); 
  
  $('.info-all-checkbox input:checkbox').filter(function() {
    return $(this).closest(".fund-group").nextUntil( ".fund-group" ).find('.info-checkbox input:checkbox').is(':checked');
  }).closest(".info-all-checkbox").addClass('some-selected-group'); 
  
  
}); 

// RADIOS  - SELECT FUNDS

$(document).ready(function() {
  $(".star input:checked").parent().addClass('checkedFund');  

  $(".star input").change(function(){
      
    if ($(this).is(':checked')) {
       $(this).parent().addClass('checkedFund');  
    } else  {
       $(this).parent().removeClass('checkedFund');  
    }
  });
  
});

//


$(document).ready(function() {
  $(".radioAllFunds input").click(function () {   // všechny fondy
     $(".table-checkbox").find('.table-checkbox-item input:checkbox').not(this).prop('checked', this.checked);
  });
  
  $(".radioFavouriteFunds input").click(function () {   // oblíbené fondy
  if ($(".checkedFund").parent('.fund-item').is('.hidden'))  {
     $(".checkedFund").parent('.fund-item').addClass('favourite-show');
   }  
     $(".table-checkbox").find('.table-checkbox-item input:checkbox').removeAttr('checked');
     $(".checkedFund").parent().find('.table-checkbox-item input:checkbox').not(this).prop('checked', this.checked);
  });
  
 // $(".radioCustomFunds input").on('click', function(e) { // vlastní výběr
 //    e.preventDefault();
 // }); 
  
  $(".table-checkbox-item input:checkbox").click(function () { 
    $(".radioCustomFunds input").prop("checked", true)
  });  
  
  $(".radioAllFundsReset").on('click', function(e) {  // reset filtru
     e.preventDefault();
     $(".filter-list .radio-type input").removeAttr('checked');
     $(".table-checkbox").find('.table-checkbox-item input:checkbox').removeAttr('checked');
     $(".table-checkbox").find('.some-selected-group').removeClass('some-selected-group');
  });
  
}); 



//validace formularovych poli - povinna polozka
function ValidateEmptyOnClient(source, arguments) {

    if ( arguments.Value == '') {
        arguments.IsValid = false;
    }
}

// fix dimensions of chart that was in a hidden element

$(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function () { 
    $( '.graphs-graph' ).each(function() { 
        $(this).highcharts().reflow();
    });
});


// Reflow chart for print

$(document).ready(function() { 
  var printUpdate = function () {
      $( '.graphs-graph' ).each(function() { 
        $(this).highcharts().reflow();
      });
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function (mql) {
            printUpdate();
        });
    } 
});


// DATEPICKER

$(document).ready(function() { 

  //Inicializace   
  $( ".datepicker" ).datepicker(); 

/*
  
  if (Modernizr.inputtypes.date) {  // test if browser has support for DATE input type
  // supported 
  //$( ".datepicker" ).datepicker();
} else {
  // not-supported
  $( ".datepicker" ).datepicker();
}   

*/
       
 

  //$( ".datepicker" ).datepicker();
 /* 
  // remove native datepicker (google chrome)
  (function ($) {
    $(document).ready(function (event) {
        $(document).on('click input', 'input[type="date"], input[type="text"].date-picker', function (e) {
            var $this = $(this);
            $this.prop('type', 'text').datepicker({
                showOtherMonths: true,
                selectOtherMonths: true,
                showButtonPanel: true,
                changeMonth: true,
                changeYear: true,
                dateFormat: 'yy-mm-dd',
                showWeek: true,
                firstDay: 1
            });

            setTimeout(function() {
                $this.datepicker('show');
            }, 1);
        });
    });
  })(jQuery, jQuery.ui);
  
  */
  
  // Lokalizace
  
  $.datepicker.regional['cs'] = { 
                  closeText: 'Cerrar', 
                  prevText: 'Předchozí', 
                  nextText: 'Další', 
                  currentText: 'Hoy', 
                  monthNames: ['Leden','Únor','Březen','Duben','Květen','Červen', 'Červenec','Srpen','Září','Říjen','Listopad','Prosinec'],
                  monthNamesShort: ['Le','Ún','Bř','Du','Kv','Čn', 'Čc','Sr','Zá','Ří','Li','Pr'], 
                  dayNames: ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'], 
                  dayNamesShort: ['Ne','Po','Út','St','Čt','Pá','So',], 
                  dayNamesMin: ['Ne','Po','Út','St','Čt','Pá','So'], 
                  weekHeader: 'Sm', 
                  dateFormat: 'dd.mm.yy', 
                  firstDay: 1, 
                  isRTL: false, 
                  showMonthAfterYear: false, 
                  yearSuffix: ''}; 
   
  $.datepicker.setDefaults($.datepicker.regional['cs']);
  
   
});

// MY CONSEQ COMBO - mobile

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 750) {
            $('.my-conseq-sticky').addClass('stick'); 
        } else {
          $('.my-conseq-sticky').removeClass('stick'); 
        }
    });
});


// ONLINE SMLOUVY COMBO - mobile

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('.sticky').addClass('stick'); 
        } else {
          $('.sticky').removeClass('stick'); 
        }
    });
});
       
       
// ONLINE SMLOUVY tabs

$(document).ready(function() {
  $( ".tabs-3 li:has(a.active)" ).toggleClass('active');
});
