// save to fav functions
// This code goes on every page that has add to fav feature 
checkForFavourites()

$(window).on('hashchange', function (e) {
  checkForFavourites() // this becuase when you go back and click on news item again the page isnt loaded so the function thats called above 
// does not get called. 
})

var news = 0

$('.add-fav-btn').click(function () {
  var key = document.URL.split('/').pop() // cut the last part of the url and save it as the key
  // this so that we can use the key as the href in the favourites for redirecting user back this page
  localStorage.setItem(key, $('.ui-page-active .store-name').text())
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

// sort functions

tinysort('ul.stores-list>li', {order: 'asc'})

$('.location-filter').change(function () {
  $('.stores-list').removeClass('ui-corner-all')
  var selectedLocation = $(this).val()
  var list = $('.stores li')

  if (selectedLocation == '') {
    list.show()
  } else {
    list.hide()
  }

  list.each(function (i, el) {
    if ($(el).children().children('.location').text() == selectedLocation) {
      $(el).show()
    }
  })
})

$('.sort-asc-desc').change(function () {
  $('.stores-list').removeClass('ui-corner-all')
  if ($(this).val() == 'asc') {
    tinysort('ul.stores-list>li', {order: 'asc'})
  } else if ($(this).val() == 'desc') {
    tinysort('ul.stores-list>li', {order: 'desc'})
  }
})

// grab the ticket prices and event details and save to storage

$('.book-now-btn').click(function () {
  var eventName = $('.ui-page-active .event-name').text()
  var eventDescription = $('.ui-page-active .event-description').text()
  var adultPrice = $('.ui-page-active .adult-price').text()
  var childrenPrice = $('.ui-page-active .children-price').text()
  var oapPrice = $('.ui-page-active .oap-price').text()

  localStorage.setItem('eventName', eventName)
  localStorage.setItem('eventDescription', eventDescription)
  localStorage.setItem('adultPrice', adultPrice)
  localStorage.setItem('childrenPrice', childrenPrice)
  localStorage.setItem('oapPrice', oapPrice)
})
