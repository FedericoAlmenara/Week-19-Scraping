

var articleDiv = $("#articles"); 

function articleRender(){
  $.getJSON("/articles", function(data) {
    // For each one
        for (var i = 0; i < 5; i++) {
      // Display the apropos information on the page
              articleDiv.append(
                `
                <h1> ${data[i].title}<h1>
                http://www.batimes.com.ar/section/argentina/${data[i].link}

                `
                );
        }   
  });
}


function scrape(){
    articleDiv.empty();
   //$("#articles").empty();

  // Now make an ajax call for the Article
        $.ajax({
            method: "GET",
            url: "/scrape"
        })

    articleRender();
}

