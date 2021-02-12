(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);

$(document).ready(function(){
   
    $.get("https://localhost:44325/api/movie", function(data){        

        for(let i = 0; i < data.length; i++){
            $("#movies").append(`<tr>
            <td>Title: ${JSON.stringify(data[i].title)}</td>
            <td>Director: ${JSON.stringify(data[i].director)}</td>
            <td>Genre: ${JSON.stringify(data[i].genre)}</td>
            </tr>`);
        }
        
        // data.map(function(el){
        //     $("#movies").append(`<div>
        //     <div>Title: ${JSON.stringify(el.title)}</div>
        //     <div>Director: ${JSON.stringify(el.director)}</div>
        //     <div>Genre: ${JSON.stringify(el.genre)}</div>
        //     </div><br>`);
        // })
        //$("#movie1").css("color", "red")
    // console.log(data);
    })
})
