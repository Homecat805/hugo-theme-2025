$(document).ready(function(){

    'use strict';

    // menu-main sider ---------------------------------------- start
    const navTarget = $('#header').children('.nav');
    const navOpenBtn = $('#header').find('.toggle').children('.open');
    const navCloseBtn = $('#header').find('.toggle').children('.close');
   
    navOpenBtn.click(function(){
        navTarget.animate({left: 0});
        navCloseBtn.show();
        navOpenBtn.hide();
    });

    navCloseBtn.click(function(){
        navTarget.animate({left: "-100vw"});
        navOpenBtn.show();
        navCloseBtn.hide();
    });
    // menu-main sider ---------------------------------------- end

    // menu-tree sider ---------------------------------------- start
    const stageSider = $('#stager').find('aside');
    const stageSiderOpenBtn = $('#footer').find('.tolist').children('.open');
    const stageSiderCloseBtn = $('#footer').find('.tolist').children('.close');

    stageSiderOpenBtn.click(function(){
        stageSider.animate({left: 0});
        stageSiderCloseBtn.show();
        stageSiderOpenBtn.hide();
    });

    stageSiderCloseBtn.click(function(){
        stageSider.animate({left: "-100vw"});
        stageSiderOpenBtn.show();
        stageSiderCloseBtn.hide();
    });

    // menu-tree sider ---------------------------------------- end


    
    // menu-tree ---------------------------------------------- start
    const menuTitleOpen = $('#menu-tree').find('.menu-tree-toggle');
    menuTitleOpen.click(function(){
        $(this).next('.menu-tree').toggle();
    });

    const itemActive = $('#menu-tree').find('.active');
    itemActive.parent().parent('.menu-tree').show();
    // menu-tree ---------------------------------------------- end
  
});

// scroll wheel  ---------------------------------------------- start
$('.toggles').find('.totop').hide();

$(window).scroll(function() {
    var distance = $(this).scrollTop();
    if ( distance > 100) {
        $('.toggles').find('.totop').show();
    } else {
        $('.toggles').find('.totop').hide();
    }
});

// scroll wheel ----------------------------------------------- end  
