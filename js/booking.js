// grab the values from local storage and set them on the page
$('#event_name').html(localStorage.getItem('eventName'))
$('#event_description').html(localStorage.getItem('eventDescription'))
$('#adult_price').html(localStorage.getItem('adultPrice'))
$('#children_price').html(localStorage.getItem('childrenPrice'))
$('#oap_price').html(localStorage.getItem('oapPrice'))

// on input change calculate the total
$('.select-control').change(function () {
  var totalAdult = 0
  var priceAdult = localStorage.getItem('adultPrice')
  var totalChildren = 0
  var priceChildren = localStorage.getItem('childrenPrice')
  var totalOAP = 0
  var priceOAP = localStorage.getItem('oapPrice')
  var total = 0

  $('#quantityAdult').each(function () {
    totalAdult += parseInt(this.value) || 0
    $('.adultTotal').html(totalAdult * priceAdult)
  })
  $('#quantityChildren').each(function () {
    totalChildren += parseInt(this.value) || 0
    $('.childrenTotal').html(totalChildren * priceChildren)
  })

  $('#quantityOAP').each(function () {
    totalOAP += parseInt(this.value) || 0
    $('.oapTotal').html(totalOAP * priceOAP)
  })
  $('.total').html(totalAdult * priceAdult + totalChildren * priceChildren + totalOAP * priceOAP)
  $('.summary').show()
})

// stripe payment

jQuery(function ($) {
  var $form = $('frmBooking')
  var handler = StripeCheckout.configure({
    key: 'pk_test_6qm3EHfHRfeq8gHq3wfExSZD',
    token: function (token) {
      if (token.id) {
        $('#thankyoupayment').html('You will recieve an email in your inbox shortly with the reciept. Keep this safe as it will be required at the event.')
      }
    }
  })

  $('#customButton').on('click', function (e) {
    handler.open({
      name: $('#event_name').text(),
      currency: 'gbp',
      description: $('#event_description').text(),
      amount: $('#total_value').text() * 100
    })
    e.preventDefault()
  })

  $(window).on('popstate', function () {
    handler.close()
  })
})
