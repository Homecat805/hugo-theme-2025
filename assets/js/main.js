$(document).ready(function(){

    'use strict';

    // menu-main sider ---------------------------------------- start
    // varialbles
    const siderTarget = $('#sider');
    const siderOpenBtn = $('#title').find('.sider-toggle').children('.open');
    const siderCloseBtn = $('#title').find('.sider-toggle').children('.close');
   
    // sider open action
    siderOpenBtn.click(function(){
        siderTarget.animate({left: 0});
        siderCloseBtn.show();
        siderOpenBtn.hide();
    });

    // sider close action
    siderCloseBtn.click(function(){
        siderTarget.animate({left: "-100vw"});
        siderOpenBtn.show();
        siderCloseBtn.hide();
    });
    // menu-main sider ---------------------------------------- end


    
    // menu-tree ---------------------------------------------- start
    // menu-tree menu-title open & close
    const menuTitleClose = $('.menu-tree').find('.close');
    const menuTitleOpen = $('.menu-tree').find('.open');

    menuTitleOpen.click(function(){
        $(this).hide();
        $(this).siblings('.close').show();
        $(this).parent().next('.menu-tree').show();
        $(this).parent().parent().siblings('.menu-tree-title').children('.menu-tree').hide();
        $(this).parent().parent().siblings('.menu-tree-title').children('.container').children('.close').hide();
        $(this).parent().parent().siblings('.menu-tree-title').children('.container').children('.open').show();

    });

    menuTitleClose.click(function(){
        $(this).hide();
        $(this).siblings('.open').show();
        $(this).parent().next('.menu-tree').hide();
    });

    const itemActive = $('#menutree').find('.active');
    itemActive.parent().parents('.menu-tree').show();
    itemActive.parents().prev('.container').find('.open').hide();
    itemActive.parents().prev('.container').find('.close').show();

    // menu-tree ---------------------------------------------- end
  
});

// scroll wheel  ---------------------------------------------- start

$(window).scroll(function() {
    var distance = $(this).scrollTop();
    if ( distance > 100) {
        $('.toggles').find('.totop').show();
    } else {
        $('.toggles').find('.totop').hide();
    }
});

// scroll wheel ----------------------------------------------- end  
