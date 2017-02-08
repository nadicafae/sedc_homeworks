let containers = $("#movies");


let addMovies = function(movie, containers){
    containers.append(`<tr>
                    <td><img src="${movie.img}" /></td>
                    <td>${movie.title}</td>
                    <td>${movie.year}</td>
                    <td>${movie.rating}</td>
                    </tr>`)
}

let pageSize = 20;
let pageNumber = 1;
let movies = [];
let filterMovies = [];
let sortMovies =[];

let removeRows = function (containers) {
    containers.html("");
}

let displayPage = (pageSize, pageNumber, movies, containers) =>{
    removeRows(containers);
    let startIndex = (pageNumber - 1) * pageSize;
    let endIndex = pageNumber * pageSize;
    let displayMovies = movies.slice(startIndex, endIndex);
    displayMovies.forEach (movie => addMovies(movie, containers));
}

$(()=>{
    $("#previous").on("click", () =>{
        if(pageNumber > 1){
        pageNumber -= 1;
        }
        displayPage(pageSize, pageNumber, movies, containers);
    })
    $("#next").on("click", () =>{
        maxPageNumber = Math.ceil(movies.length/ pageSize);
        if(pageNumber < maxPageNumber){
        pageNumber += 1;
        }
        displayPage(pageSize, pageNumber, movies, containers);
    })
    
    $("#searchMovie").on("input", () => {
            filterMovies = movies;
            displayPage(pageSize, pageNumber, filterMovies, containers); 
            pageNumber = 1;                 
    });

    $("#search").on("click", () =>{
        let searchMovie = $("#searchMovie").val()
        if (!searchMovie)
            displayPage(pageSize, pageNumber, filterMovies, containers); 
            pageNumber = 1;        

        searchMovie = searchMovie.toLowerCase();

        filterMovies = movies.filter((movie) => {
            if (movie.title.toLowerCase().indexOf(searchMovie) !== -1)
                return true;
            displayPage(pageSize, pageNumber, filterMovies, containers);
            return false;
        })
        displayPage(pageSize, pageNumber, filterMovies, containers);
        pageNumber = 1;
    })

    $("#sortTitle").on("click", ()=>{
        sortMovies = movies.sort((a, b) => 
        {if(a.title < b.title)
                    return -1;
                else if(a.title > b.title)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortMovies);
        pageNumber = 1;
        displayPage(pageSize, pageNumber, sortMovies, containers);
    })

    $("#sortYear").on("click", ()=>{
        sortMovies = movies.sort((a, b) => 
        {if(a.year < b.year)
                    return 1;
                else if(a.year > b.year)
                    return -1;
                else
                return 0;
            
    })
        console.log(sortMovies);
        pageNumber = 1;
        displayPage(pageSize, pageNumber, sortMovies, containers);
    })

    $("#sortRank").on("click", ()=>{
        sortMovies = movies.sort((a, b) => 
        {if(a.rating < b.rating)
                    return 1;
                else if(a.rating > b.rating)
                    return -1;
                else
                return 0;
            
    })
        console.log(sortMovies);
        pageNumber = 1;
        displayPage(pageSize, pageNumber, sortMovies, containers);
    })

    $.ajax("https://raw.githubusercontent.com/nadicafae/sedc_homeworks/master/movies.json", {
        complete: function(data) {
            //console.log(data);
            let result = JSON.parse(data.responseText);
            //let containers = $("#movies");
            movies = result;
            filterMovies = movies;
            displayPage(pageSize, pageNumber, movies, containers);
            }
    })

})