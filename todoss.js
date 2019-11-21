// var lis = document.querySelectorAll("li");
// for(var i = 0 ; i < lis.length ; i++)
// {
//     lis[i].addEventListener("click",function(){
//         this.classList.toggle("libackground");
//     })
    
// }

$("ul").on("click","li",function(){
    $(this).toggleClass("libackground");
    event.stopPropagation();
})

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });         
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){

    if(event.which===13)
    {
        var newtodo = $(this).val();
        $("ul").append("<li>" + '<span><i class = "fas fa-trash"></i>  </span> ' + newtodo + "</li>");
        $(this).val("");
    }
})

$(".fa-plus").on("click",function(){
    $("input").fadeToggle();
});
