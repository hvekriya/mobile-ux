// grab the points and set the text on the page 

if (sessionStorage.getItem('loyaltyPoints')) {
  $('.loyalty-points').html(sessionStorage.getItem('loyaltyPoints'))
} else {
  $('.loyalty-points').html('0')
}

// set the text for how many points away from unlcocking a voucher
var goal = 3
var count = sessionStorage.getItem('loyaltyPoints')

var total = goal - count

$('.pointsAway').html(total)

// show the voucher when points = 3
if (sessionStorage.getItem('loyaltyPoints') == '3') {
  $('.no-voucher-text').hide()
  $('.blackwell-voucher').show()
} else {
  $('.blackwell-voucher').hide()
}

// hide the voucher and reset the points
$('.blackwell-vouchers-download-btn').click(function () {
  $('.blackwell-vouchers').hide()
  $('.no-voucher-text').show()
  sessionStorage.clear()
  location.reload()
})
