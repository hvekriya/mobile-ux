$(function () { // DOM ready
  // If a link has a dropdown, add sub menu toggle.
  $('.ui-page-active nav ul li a:not(:only-child)').click(function (e) {
    $(this).siblings('.ui-page-active .nav-dropdown').toggle()
    // Close one dropdown when selecting another
    $('.ui-page-active .nav-dropdown').not($(this).siblings()).hide()
    e.stopPropagation()
  })
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(function () {
    $('.ui-page-active .nav-dropdown').hide()
  })
  // Toggle open and close nav styles on click
  $('.ui-page-active #nav-toggle').click(function () {
    $('.ui-page-active nav ul').slideToggle()
  })
  // Hamburger to X toggle
  $('.ui-page-active #nav-toggle').on('click', function () {
    this.classList.toggle('toggle')
  })
  // changes default filter text
  $('.ui-page-active .ui-input-search input').attr('placeholder', 'Search')
}) // end DOM ready

function goBack () {
  window.history.back()
}
