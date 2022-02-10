var desc1 = document.querySelector("#discription1")
var desc2 = document.querySelector("#discription2")
var desc3 = document.querySelector("#discription3")

var title1 = document.querySelector("#title1")
var title2 = document.querySelector("#title2")
var title3 = document.querySelector("#title3")

var thumbnail1 = document.querySelector("#thumbnail1")
var thumbnail2 = document.querySelector("#thumbnail2")
var thumbnail3 = document.querySelector("#thumbnail3")

var sButton = document.querySelector("#searchBtn")
var sInput = document.querySelector("#companyBox")

var url1 = document.querySelector("#link1")
var url2 = document.querySelector("#link2")
var url3 = document.querySelector("#link3")

var date1 = document.querySelector("#date1")
var date2 = document.querySelector("#date2")
var date3 = document.querySelector("#date3")

var sButton = document.querySelector("#searchBtn")
var sInput = document.querySelector("#companyBox")

fetch("https://newsdata.io/api/1/news?apikey=pub_4321bed719384d54f676f9caf3e503585594&country=us&category=business&language=en")
.then(function (response) {
    return response.json();
  })
  .then(function (news) {
    console.log(news);

    title1.textContent = news.results[0].title
    title2.textContent = news.results[1].title
    title3.textContent = news.results[2].title

    desc1.textContent = news.results[0].description
    desc2.textContent = news.results[1].description
    desc3.textContent = news.results[2].description

    var img1 = news.results[0].image_url
    thumbnail1.setAttribute("src", img1)

    var img2 = news.results[1].image_url
    thumbnail2.setAttribute("src", img2)

    var img3 = news.results[2].image_url
    thumbnail3.setAttribute("src", img3)

    if (img1 === null) {
      thumbnail1.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    if (img2 === null) {
      thumbnail2.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    if (img3 === null) {
      thumbnail3.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    var link1 = news.results[0].link
    url1.setAttribute("href", link1)

    var link2 = news.results[1].link
    url2.setAttribute("href", link2)

    var link3 = news.results[2].link
    url3.setAttribute("href", link3)

    date1.textContent = news.results[0].pubDate
    date2.textContent = news.results[1].pubDate
    date3.textContent = news.results[2].pubDate
  });

  sButton.addEventListener("click", function () {
    var value = sInput.value  

    fetch("https://newsdata.io/api/1/news?apikey=pub_4321bed719384d54f676f9caf3e503585594&q=" + value + "&country=us&language=en&category=business")
.then(function (response) {
    return response.json();
  })
  .then(function (news) {
    console.log(news);

    title1.textContent = news.results[0].title
    title2.textContent = news.results[1].title
    title3.textContent = news.results[2].title

    desc1.textContent = news.results[0].description
    desc2.textContent = news.results[1].description
    desc3.textContent = news.results[2].description

    var img1 = news.results[0].image_url
    thumbnail1.setAttribute("src", img1)

    var img2 = news.results[1].image_url
    thumbnail2.setAttribute("src", img2)

    var img3 = news.results[2].image_url
    thumbnail3.setAttribute("src", img3)

    if (img1 === null) {
      thumbnail1.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    if (img2 === null) {
      thumbnail2.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    if (img3 === null) {
      thumbnail3.setAttribute("src", "https://static.toiimg.com/thumb/msid-89392914,width-1070,height-580,imgsize-104716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg")
    }

    var link1 = news.results[0].link
    url1.setAttribute("href", link1)

    var link2 = news.results[1].link
    url2.setAttribute("href", link2)

    var link3 = news.results[2].link
    url3.setAttribute("href", link3)

    date1.textContent = news.results[0].pubDate
    date2.textContent = news.results[1].pubDate
    date3.textContent = news.results[2].pubDate
  });
  })