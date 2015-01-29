/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    
    $('#superHumans').accordion({header: "h3"}); 
    
     $('#nike').accordion({header: "h3"}); 
    
    $('h3').css('background', 'grey');
    
    $(".jumpman23").css("background-color", "grey");
    
    $('p:nth-child(1)').css('background-color' ,'grey');
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('p:gt(1)').css('border-style', 'solid');
   
    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    function removeAPara(){
        
    }
    
    $('#randPara').bind('click',addAPara);
    
    $('#logo').bind('click', hideTheImage);
    
    //$("li[class='']").css("border", "2px solid red");
});

function addAPara(){
    $('#randPara').append('<p>NIKE PAGE</p>');
}

function replaceWText(){
    $('#replaceWText').text('SHUMURDERS');
}

function mouseOverMe(){
    $("h1").html("JUST DO IT ");
    
}

function mouseOutMe(){
    $('h1').html('NIKE PAGE');
}

function mouseClick(){
    
    $('p').html('NIKEEE');
}

function hideTheImage(){
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage(){
    $('#logo').show('fold', {}, 2500);
    
}

function toggleTheText(){
    $('#logo').fadeOut(2500);
}

function fadeTheImage(){
    $('#logo').fadeOut(2500);
}
function fadeALittle(){
    $('#logo').fadeTo(2500, .30);
}
