let submitedNovels = [];

let novelsJs = localStorage.getItem('novel');

console.log(JSON.parse(novelsJs));

if(JSON.parse(novelsJs) !== null)
    submitedNovels = JSON.parse(novelsJs);

let submitedAnthologies = [];

let antJs = localStorage.getItem('anthology');

console.log(JSON.parse(antJs));

if(JSON.parse(antJs) !== null)
    submitedAnthologies = JSON.parse(antJs);


// let pageSize = 10;
// let pageNumber = 1;

// let removeNovelRows = function(submitedNovels){
//     submitedNovels.val("");
// }

// let removeAntRows = function(submitedAnthologies){
//     submitedAnthologies.html("");
// }

$(()=>{
    let $novelName = $("#novelName");
    let $novelAuthor = $("#novelAuthor");
    let $novelPublisher = $("#novelPublisher");
    let $publicationYearNovel = $("#publicationYearNovel");
    let $pagesNumNov = $("#pagesNumNov");
    let $seriesName = $("#seriesName");
    let $seriesNum = $("#seriesNum");
    let $isbnNov = $("#isbnNov");
    let $reviewNov = $("#reviewNov");
    let $btnNovel = $("#submitNovel")

    let $anthologyName = $("#anthologyName");
    let $anthologyEditor = $("#anthologyEditor");
    let $anthologyPublisher = $("#anthologyPublisher");
    let $publicationYearAnthology = $("#publicationYearAnthology");
    let $pagesNumAnt = $("#pagesNumAnt");
    let $anthologyStories = $("#anthologyStories")
    let $storyAuthor = $("#storyAuthor")
    let $storyList = $("#storyList")
    let $btnStory = $("#addStory")
    let $isbnAnt = $("#isbnAnt");
    let $reviewAnt = $("#reviewAnt");
    let $btnAnt = $("#submitAnthology")

    $btnNovel.on('click', ()=>{

        let newNovel = new Novel($novelName.val(), $novelAuthor.val(), $novelPublisher.val(), $publicationYearNovel.val(),
        $pagesNumNov.val(), $seriesName.val(), $seriesNum.val(), $isbnNov.val(), $reviewNov.val());
        submitedNovels.push(newNovel);

        let jsNov = JSON.stringify(submitedNovels);
        localStorage.setItem('novel', jsNov);
        $novelName.val("");
        $novelAuthor.val("");
        $novelPublisher.val("");
        $publicationYearNovel.val("");
        $pagesNumNov.val("");
        $seriesName.val("");
        $seriesNum.val("");
        $isbnNov.val("");
        $reviewNov.val("");
    })

    let tableNov = $("#tableNovels");
        tableNov.html("");
        let nameNov = $novelName.val();
        let authorNov = $novelAuthor.val();
        let publisherNov = $novelPublisher.val();
        let yearNov = $publicationYearNovel.val();
        let pagesNov = $pagesNumNov.val();
        let seriesNov = $seriesName.val();
        let seriesNumberNov = $seriesNum.val();
        let isbnNov = $isbnNov.val();
        let reviewNov = $reviewNov.val();
        submitedNovels.forEach(novel =>{
        tableNov.append(`<tr>
                    <td>${novel.title}</td>
                    <td>${novel.author}</td>
                    <td>${novel.publisher}</td>
                    <td>${novel.yearOfPubl}</td>
                    <td>${novel.pagesNum}</td>
                    <td>${novel.seriesName}</td>
                    <td>${novel.seriesNum}</td>
                    <td>${novel.isbn}</td>
                    <td>${novel.review}</td>
                </tr>`)
        })

//ова треба да се среди
    // let displayPage = (pageSize, pageNumber, submitedNovels) =>{
    //     removeNovelRows(submitedNovels);
    //     let startIndex = (pageNumber - 1) * pageSize;
    //     let endIndex = pageNumber * pageSize;
    //     let displayNovels = submitedNovels.slice(startIndex, endIndex);
    //     displayNovels.forEach(novel => tableNov(novel, submitedNovels));
    // }
    // $("#previous").on("click", () =>{
    //     if(pageNumber > 1){
    //     pageNumber -= 1;
    //     }
    //     displayPage(pageSize, pageNumber, submitedNovels);
    // })
    // $("#next").on("click", () =>{
    //     maxPageNumber = Math.ceil(submitedNovels.length/ pageSize);
    //     if(pageNumber < maxPageNumber){
    //     pageNumber += 1;
    //     }
    //     displayPage(pageSize, pageNumber, submitedNovels);
    // })

    $btnStory.on('click', ()=>{
        let newStory = $anthologyStories.val();
        let storyAuthor = $storyAuthor.val();
        $storyList.append(`<li>${newStory} by ${storyAuthor}</li>`);

    })

    $btnAnt.on('click', ()=>{

        let arrStories = [];
        $storyList.find("li").each((i, story) =>{
            arrStories.push($(story).text());
    })

        let newAnthology = new Anthology($anthologyName.val(), $anthologyEditor.val(), $anthologyPublisher.val(), $publicationYearAnthology.val(),
        $pagesNumAnt.val(), arrStories, $isbnAnt.val(), $reviewAnt.val());
        submitedAnthologies.push(newAnthology);

        let jsAnt = JSON.stringify(submitedAnthologies);
        localStorage.setItem('anthology', jsAnt);
        $anthologyName.val("");
        $anthologyEditor.val("");
        $anthologyPublisher.val("");
        $publicationYearAnthology.val("");
        $pagesNumAnt.val("");
        $anthologyStories.val("");
        $storyList.html("");
        $isbnAnt.val("");
        $reviewAnt.val("");
    })

    let tableAnt = $("#tableAnthologies");
        tableAnt.html("");
        let title = $anthologyName.val();
        let editor = $anthologyEditor.val();
        let publisherAnt = $anthologyPublisher.val();
        let yearAnt = $publicationYearAnthology.val();
        let pagesAnt = $pagesNumAnt.val();
        let storiesAnt = $storyList.val();
        let isbnAnt = $isbnAnt.val();
        let reviewAnt = $reviewAnt.val();
        submitedAnthologies.forEach(anthology =>{
        tableAnt.append(`<tr>
                    <td>${anthology.title}</td>
                    <td>${anthology.editor}</td>
                    <td>${anthology.publisher}</td>
                    <td>${anthology.yearOfPubl}</td>
                    <td>${anthology.pagesNum}</td>
                    <td>${anthology.stories}</td>
                    <td>${anthology.isbn}</td>
                    <td>${anthology.review}</td>
                </tr>`)
        })
    
    //UPDATE
    
            //сортирање novels 

 let sortedNovels = [];

    $("#sortTitleN").on("click", ()=>{
        sortedNovels = submitedNovels.sort((a, b) => 
        {if(a.title < b.title)
                    return -1;
                else if(a.title > b.title)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedNovels);
        sortedNovels.forEach(novel =>{
        tableNov.replaceWith(`<tr>
                    <td>${novel.title}</td>
                    <td>${novel.author}</td>
                    <td>${novel.publisher}</td>
                    <td>${novel.yearOfPubl}</td>
                    <td>${novel.pagesNum}</td>
                    <td>${novel.seriesName}</td>
                    <td>${novel.seriesNum}</td>
                    <td>${novel.isbn}</td>
                    <td>${novel.review}</td>
                </tr>`)
        })
    })

    $("#sortAuthorN").on("click", ()=>{
        sortedNovels = submitedNovels.sort((a, b) => 
        {if(a.author < b.author)
                    return -1;
                else if(a.author > b.author)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedNovels);
        sortedNovels.forEach(novel =>{
        tableNov.replaceWith(`<tr>
                    <td>${novel.title}</td>
                    <td>${novel.author}</td>
                    <td>${novel.publisher}</td>
                    <td>${novel.yearOfPubl}</td>
                    <td>${novel.pagesNum}</td>
                    <td>${novel.seriesName}</td>
                    <td>${novel.seriesNum}</td>
                    <td>${novel.isbn}</td>
                    <td>${novel.review}</td>
                </tr>`)
        })
    })

    $("#sortYearN").on("click", ()=>{
        sortedNovels = submitedNovels.sort((a, b) => 
        {if(a.yearOfPubl < b.yearOfPubl)
                    return -1;
                else if(a.yearOfPubl > b.yearOfPubl)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedNovels);
        sortedNovels.forEach(novel =>{
        tableNov.replaceWith(`<tr>
                    <td>${novel.title}</td>
                    <td>${novel.author}</td>
                    <td>${novel.publisher}</td>
                    <td>${novel.yearOfPubl}</td>
                    <td>${novel.pagesNum}</td>
                    <td>${novel.seriesName}</td>
                    <td>${novel.seriesNum}</td>
                    <td>${novel.isbn}</td>
                    <td>${novel.review}</td>
                </tr>`)
        })
    }) 


    //сортирање anthologies

    let sortedAnthologies = [];

    $("#sortTitleA").on("click", ()=>{
        sortedAnthologies = submitedAnthologies.sort((a, b) => 
        {if(a.title < b.title)
                    return -1;
                else if(a.title > b.title)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedAnthologies);
        sortedAnthologies.forEach(anthology =>{
        tableAnt.replaceWith(`<tr>
                    <td>${anthology.title}</td>
                    <td>${anthology.editor}</td>
                    <td>${anthology.publisher}</td>
                    <td>${anthology.yearOfPubl}</td>
                    <td>${anthology.pagesNum}</td>
                    <td>${anthology.stories}</td>
                    <td>${anthology.isbn}</td>
                    <td>${anthology.review}</td>
                </tr>`)
        })

    })

    $("#sortEditorA").on("click", ()=>{
        sortedAnthologies = submitedAnthologies.sort((a, b) => 
        {if(a.editor < b.editor)
                    return -1;
                else if(a.editor > b.editor)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedAnthologies);
        sortedAnthologies.forEach(anthology =>{
        tableAnt.replaceWith(`<tr>
                    <td>${anthology.title}</td>
                    <td>${anthology.editor}</td>
                    <td>${anthology.publisher}</td>
                    <td>${anthology.yearOfPubl}</td>
                    <td>${anthology.pagesNum}</td>
                    <td>${anthology.stories}</td>
                    <td>${anthology.isbn}</td>
                    <td>${anthology.review}</td>
                </tr>`)
        })

    })

    $("#sortYearA").on("click", ()=>{
        sortedAnthologies = submitedAnthologies.sort((a, b) => 
        {if(a.yearOfPubl < b.yearOfPubl)
                    return -1;
                else if(a.yearOfPubl > b.yearOfPubl)
                    return 1;
                else
                return 0;
            
    })
        console.log(sortedAnthologies);
        sortedAnthologies.forEach(anthology =>{
        tableAnt.replaceWith(`<tr>
                    <td>${anthology.title}</td>
                    <td>${anthology.editor}</td>
                    <td>${anthology.publisher}</td>
                    <td>${anthology.yearOfPubl}</td>
                    <td>${anthology.pagesNum}</td>
                    <td>${anthology.stories}</td>
                    <td>${anthology.isbn}</td>
                    <td>${anthology.review}</td>
                </tr>`)
        })

    })
    
     //replaceWith() го враќа само првиот податок во табела

})


