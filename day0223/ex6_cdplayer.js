$(function(){
    
    //음악 목록 띄위기
    $("h1.title").click(function(){
        $("ul.music_list").slideDown('slow');
    })
    //곡선택시 이벤트
    $("ul.music_list li").click(function(){
        
        //제목 얻어서 title에 넣기
        let title=$(this).text();
        $("h1.title").text(title);

        //cd change효과 주기 
        //1번cd 넣고, 바꾸고, 2번 뱉고 이런 순서임
        let cdClass=$(this).attr("class");
        $("#cd").animate({width:"0"},'slow',function(){
            $("#cd").attr("class", cdClass);
            $(this).animate({width:'300px'},'slow');
        });
    
        $(this).parent().slideUp('slow');
    });
});