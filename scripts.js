$(function() {
  

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
                    for (let i = 0; i < data[1].length; i++) {
                        let title = data[1][i];
                        let excerpt = data[2][i];
                        let url = data[3][i];
                        let article = `<li><h3>${title}</h3>
                                            <p>${excerpt}</p>
                                            <a href="${url}" target="blank">Go to</a>
                                        </li>`;
                        $('#results').append(article).fadeIn();
                    }
                },
                error: function(err){
                    console.log('There has been some problems...')
                }
            })
        }
    })
})