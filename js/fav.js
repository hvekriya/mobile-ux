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
  for (var i = 0; i < localStorage.length; i++) {
    return localStorage.getItem(localStorage.key(i))
  }
}

$('.sendEmail').click(function (event) {
  // var email = $('#email').val()
  // var subject = 'Favourite List'
  // var emailBody = 'Hi,' + 'Regards, BLURB'
  // document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody

  var data = {
    email: $('#email').val(),
    message: getMailBody()
  }
  $.ajax({
    type: 'POST',
    url: 'email.php',
    data: data,
    success: function () {
      alert('Success')
    }
  })
})
