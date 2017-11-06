$(function() {
  
    $('#test li').fadeIn('4000');
    $('#search').bind('keypress', function(e){
        if (e.keyCode == 13) {
            let searchTerm = $('#search').val();
            $.ajax({
                type: 'GET',
                url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=30`,
                async: false,
                dataType: 'jsonp',
                success: function(data){
                    $('.search-box').addClass('fixed');
                    $('#results').html('');
                    var fadeDelay = 800;
                    var leftSlide = -100;
                    for (let i = 0; i < data[1].length; i++) {
                        let title = data[1][i];
                        let excerpt = data[2][i];
                        let url = data[3][i];
                        let article = `<li style='left: ${leftSlide}px'>
                                            <a href="${url}" target="blank"></a>
                                                <h3>${title}</h3>
                                                <p>${excerpt}</p>
                                        </li>`;
                        $('#results').append(article);
                        $('#results li').animate({left: 0, opacity: 1}, fadeDelay);
                        fadeDelay += 50;
                        leftSlide -= 20;
                    }
                },
                error: function(err){
                    console.log('There has been some problems...')
                }
            })
        }
    })
})