// This code goes on every page that has add to fav feature 
checkForFavourites()

$(window).on('hashchange', function(e){
    checkForFavourites() // this becuase when you go back and click on news item again the page isnt loaded so the function thats called above 
  // does not get called. 
});

var news = 0

$('.add-fav-btn').click(function () {
  var key = document.URL.split('/').pop() // cut the last part of the url and save it as the key
  // this so that we can use the key as the href in the favourites for redirecting user back this page
  localStorage.setItem(key, $('.ui-page-active .news-heading').text())
  $('.add-fav-btn').hide()
  $('.remove-fav-btn').show()
})
$('.remove-fav-btn').click(function () {
  var key = document.URL.split('/').pop() // cut the last part of the url and use it as the key
  localStorage.removeItem(key)
  $('.add-fav-btn').show()
  $('.remove-fav-btn').hide()
})

// when you come back to this page this if statement will check if the item has been added to fav

function checkForFavourites () {
  var key = document.URL.split('/').pop() // cuts the last part of the url becuase thats the key we used and checks if it exists in the storage

  if (localStorage.getItem(key) === null) {
    $('.add-fav-btn').show()
    $('.remove-fav-btn').hide()
  } else {
    $('.add-fav-btn').hide()
    $('.remove-fav-btn').show()
  }
}

// The syntax for writing the localStorage item is as follows:
// localStorage.setItem('myCat', 'Tom')

// The syntax for reading the localStorage item is as follows:
// var cat = localStorage.getItem("myCat")

// The syntax for removing the localStorage item is as follows:
// localStorage.removeItem("myCat")



// sort functions

tinysort('.latest-news ul>li',{order:'asc'});


$('.sort-asc-desc').change(function () {
  $('.latest-news ul').removeClass('ui-corner-all')
  if ($(this).val() == 'asc') {
      tinysort('.latest-news ul>li',{order:'asc'});
  } else if ($(this).val() == 'desc') {
      tinysort('.latest-news ul>li',{order:'desc'});
  }
})
