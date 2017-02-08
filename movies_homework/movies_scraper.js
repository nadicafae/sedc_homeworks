//let containers = $("#movies");
let movies = [];

containers.each(function () {
    let title = $(this).find(".titleColumn").find("a").text();
    let year = $(this).find(".titleColumn").find("span").text();
    let rating = $(this).find(".imdbRating").find("strong").text();
    //let awards = mouseOver ? Number(mouseOver.match(/Total Award Nominations: (\d*)/)[1]) : 0;
    let img = $(this).find(".posterColumn").find("img").attr("src");
    if (title)
        movies.push({
            img,
            title,
            year,
            rating
        })
})
// let addMovies = (filterMovies)=>{
//     filterMovies.forEach((a)=>{
// containers.append(`<tr>
//             <td><img src="${a.img}" /></td>
//             <td>${a.title}</td>
//             <td>${a.year}</td>
//             <td>${a.rating}</td>
//                 </tr>`)
// })
// }
// $(() => {
//     var xml = new XMLHttpRequest();
//     xml.open("GET", "https://raw.githubusercontent.com/nadicafae/sedc_homeworks/master/movies.json", true);
//     xml.send(null);

//     xml.onreadystatechange = () => {
//         if (xml.readyState === XMLHttpRequest.DONE) {
//             let result = JSON.parse(xml.response);
//             result.forEach((a)=>{
//                 addMovies(a,containers);
//             })

//         }
//     }

// })
// $.ajax("https://raw.githubusercontent.com/nadicafae/sedc_homeworks/master/movies.json", {
//         complete: function(data) {
//             console.log(data);
//             let result = JSON.parse(data.responseText);
//             let containers = $("#movies");
//             movies = result;
//             filterMovies = movies;
//             }
        
            //console.log(filterMovies);

            //addMovies(filterMovies);
            //displayPage(pageNumber, pageSize, filterBooks, booksContainer);
        
    //})
