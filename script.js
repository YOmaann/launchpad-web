$(document).ready(function(){
   $("body").keydown(function(event){
       var a=event.key;
       $("#"+a)[0].currentTime=0;
     $("#"+a)[0].play();
    $("li").map(function(){
       if(this.innerHTML==a)
           {
           $(this).addClass("sel");
           }
        
    });
                                    
                                    }); 
    
       $("body").keyup(function(event){
       var a=event.key;
    $("li").map(function(){
       if(this.innerHTML==a)
           {
           $(this).removeClass("sel");
        
           }
        
    });
                                    
                                    }); 
    $("li").click(function(){
        var a=this.innerHTML;
        $(this).toggleClass("sel");

        if(!$("#"+a)[0].loop)
            {
    $(".channels").append('<div class="pane" el="'+a+'" value=100><div class="inner">'+a+'</div><div class="green" value="100"></div></div>');
                vol();
        $("#"+a)[0].loop=true;
        $("#"+a)[0].play();
            }
        else{
     $(".pane[el='"+a+"']").fadeOut(300,function(){
         $(this).remove();
     });
            $("#"+a)[0].loop=false;
        $("#"+a)[0].pause();
            $("#"+a)[0].duration=0;
        }
    });
    function vol()
    {
    $(".pane").map(function(){
        $(this).mousemove(function(event){
        if(event.which==1)
            {
                var x=(event.pageX-$(this).offset().left)/3;
                $(this).attr("value",x);
                $(this).children(".green").css("width",x+"%");
               $(($(this).attr("el")=="audio")?$(this).attr("el"):"#"+$(this).attr("el")).map(function(){
                   $(this)[0].volume;
                   $(this)[0].volume=x/100;
               });
            }
    });
});
    }
    vol();
});