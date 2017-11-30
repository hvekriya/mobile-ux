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

function getMailBody () {
  var body = ''
  if (localStorage.length == 0) {
    body = 'List is empty'
  } else {
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes('news')) {
        body +=
          '<h1>News</h1>'
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      } else if (localStorage.key(i).includes('about')) {
        body +=
          '<h1>About</h1>'
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      } else if (localStorage.key(i).includes('events')) {
        body +=
          '<h1>Events</h1>'
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      } else if (localStorage.key(i).includes('stores')) {
        body +=
          '<h1>Stores</h1>'
        '<ul data-role="listview" data-inset="true"> ' +
        '<li><a href="' + localStorage.key(i) + '" rel="external">' + localStorage.getItem(localStorage.key(i)) + '</a></li>' +
        '</ul>'
      }
    }
    return body
  }
}

$('.sendEmail').click(function (event) {
  Email.send('w1497109@my.westminster.ac.uk',
    $('#email').val(),
    'Favourites List',
    $('html').html(),
    {token: 'bc296314-2062-48ef-ade3-e9cc38cad316',
      callback: function done (message) {
        $('.email').html('Email sent to:' + $('#email').val())
        $('#email-sent').popup('open')
      }
    })
})
