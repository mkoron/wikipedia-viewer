$(function() {
    $('.box').mouseenter(function() {
        $(this).animate({
            height: '+=100px'
        });
    });
    $('.box').mouseleave(function() {
        $(this).animate({
            height: '-=100px'
        }); 
    });
  

    $('#search').bind('keypress', function(e){
        if (e.keyCode == 13) {
            let searchTerm = $('#search').val();
            $.ajax({
                type: 'GET',
                url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=30`,
                async: false,
                dataType: 'jsonp',
                success: function(data){
                    console.log(data)
                },
                error: function(err){
                    console.log('There has been some problems...')
                }
            })
        }
    })
})