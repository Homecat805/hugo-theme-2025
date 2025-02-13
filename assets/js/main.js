$(document).ready(function(){

    'use strict';

    // menu-main sider ---------------------------------------- start
    const navTarget = $('#header').children('.nav');
    const navOpenBtn = $('#header').find('.nav-toggle').children('.open');
    const navCloseBtn = $('#header').find('.nav-toggle').children('.close');
   
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

   
    // stage-left sider ---------------------------------------- start
    const leftTarget = $('#stager').find('aside');
    const leftOpenBtn = $('#stager').find('.aside-open');
    const leftCloseBtn = $('#stager').find('.aside-close');
    
    leftOpenBtn.click(function(){
        leftTarget.animate({left: 0});
        leftCloseBtn.show();
        leftOpenBtn.hide();
    });

    leftCloseBtn.click(function(){
        leftTarget.animate({left: "-100vw"});
        leftOpenBtn.show();
        leftCloseBtn.hide();
    });
    // stage-left sider ---------------------------------------- end

    // menu-tree ---------------------------------------------- start
    const menuTitleOpen = $('#menu-tree').find('.menu-tree-toggle');
    menuTitleOpen.click(function(){
        $(this).next('.menu-tree').toggle();
    });

    const itemActive = $('#menu-tree').find('.active');
    itemActive.parent().parent('.menu-tree').show();
    // menu-tree ---------------------------------------------- end
  
});
