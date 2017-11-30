// iterate through the localstore and filter out the data

if (localStorage.length == 0) {
  $('.fav p').show()
} else {
  $('.fav p').hide()
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes('news')) {
      $('.fav-news-list').append(
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      )
    } else if (localStorage.key(i).includes('about')) {
      $('.fav-students-list').append(
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      )
    } else if (localStorage.key(i).includes('events')) {
      $('.fav-events-list').append(
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      )
    } else if (localStorage.key(i).includes('stores')) {
      $('.fav-stores-list').append(
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      )
    }
  }
}

$('.sendEmail').click(function (event) {
  Email.send('blurb@info.com',
    $('#email').val(),
    'Favourites List',
    $('.fav').html(),
    {token: 'bc296314-2062-48ef-ade3-e9cc38cad316',
      callback: function done (message) {
        $('.email').html('Email sent to:' + $('#email').val())
        $('#email-sent').popup('open')
      }
    })
})
