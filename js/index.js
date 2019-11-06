

$(".options i").click(function(){
    
    $(".optionsChange").toggle(1000)
    
})

let list = $(".options ul li");
let hs =$("h1,h2,h3,h4,h5");
let profileOffset = $("#profile").offset().top;

list.eq(0).css("backgroundColor","red")
list.eq(1).css("backgroundColor","#09c")
list.eq(2).css("backgroundColor","tan")
list.eq(3).css("backgroundColor","tomato")
list.eq(4).css("backgroundColor","teal")


list.click(function(){
    let color = $(this).css("backgroundColor");
    hs.css("color",color)
})


$(".options img").click(function(){
    let bgImg = $(this).attr("src");
    $("#home").css("backgroundImage",`url(${bgImg})`)
})

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop >  250)
        {
            $(".navbar").css("backgroundColor","rgba(52, 58, 64, 0.8)")
        }
    else
        {
            $(".navbar").css("backgroundColor","transparent")
        }
    
    if(scrollTop > profileOffset )
        {
            $("#btnUp").fadeIn(1000)
        }
    else
        {
            $("#btnUp").fadeOut(1000)
        }
    
    
})

$("#btnUp").click(function(){
    
    $("body,html").animate({scrollTop:0},(1000))
})

$(".navbar a").click(function(){
    
    let aHref= $(this).attr("href")
    let scrollOffset =  $(aHref).offset().top;
    $("body,html").animate({scrollTop:scrollOffset},(1000))
})




$(document).ready(function(){
    
    $("#loading").fadeOut(1000 ,function(){
        
        $("#loading").css("display","none")
        $("body").css("overflow","auto");
    });
    
})


































































