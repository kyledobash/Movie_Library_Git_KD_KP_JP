$(document).ready(function(){  

    $.get("https://localhost:44325/api/movie", function(data){        

        for(let i = 0; i < data.length; i++){
            $("#movies").append(`<tr>
            <td>${JSON.stringify(data[i].title)}</td>
            <td>${JSON.stringify(data[i].director)}</td>
            <td>${JSON.stringify(data[i].genre)}</td>
            <td><button id="edit" onclick="populateUpdate(${data[i].movieId})">Edit</button></td>
            </tr>`);
        }        
    })
})

function populateUpdate(movieId){
    $.get("https://localhost:44325/api/movie/" + movieId ,function(data){
        $("#updateMovieId").val(data.movieId);
        $("#updateMovieTitle").val(data.title);
        $("#updateMovieDirector").val(data.director);
        $("#updateMovieGenre").val(data.genre);
    })
}
function getOneMovie(id){
    $.ajax({
        url: 'https://localhost:44325/api/movie' + id,
        type: 'get',
        dataType: 'json',
        success: function(data) {
            $($("#updateForm")[0].movieId).val(data._id);
            $($("#updateForm")[0].updateTitle).val(data.title);
            $($("#updateForm")[0].updateDirector).val(data.director);
            $($("#updateForm")[0].updateGenre).val(data.genre);            
            $("#updateForm").show();
        }
    });
}

function updateMovie(){
    var dict = {
        MovieId : parseInt($("#updateMovieId").val()),
        Title : $("#updateMovieTitle").val(),
        Genre : $("#updateMovieGenre").val(),
        Director : $("#updateMovieDirector").val()
      
    }
    $.ajax({
        url: 'https://localhost:44325/api/movie/',
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function( data, textStatus, jQxhr ){
            if(data.success == true){ // if true (1)
                setTimeout(function(){// wait for 5 secs(2)
                     location.reload(); // then reload the page.(3)
                }, 500); 
             }          
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

}

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




(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
            Genre: this["genre"].value
        };
        
        $("#Save").click(function (id) {
        $.ajax({
            url: 'https://localhost:44325/api/movie' + id,
            dataType: 'json',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
        e.preventDefault();
    }

    $('#edit-movie').submit( processForm );
})(jQuery);



