// Shamelessly taken from @feross
function addCommasToInteger (x) {
  var rgx = /(\d+)(\d{3})/
  x += ''

  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + ',' + '$2')
  }
  return x
}

$(document).ready(function () {
  $.ajaxSetup({cache: false})
  var slug
  slug = $('.views').data('slug')

  if (slug) {
    $.ajax({
      type: 'POST',
      url: '/views',
      data: {
        slug: slug
      },
      dataType: 'json',
      success: function (data) {
        $('.views').text(addCommasToInteger(data.views) + ' views')
      },
      error: function (data, textStatus, errorThrown) {
        $('.views').remove()
      }
    })
  }

  $('a[data-group]').click(function (e) {
    var imageURL = 'url(' + $(this).attr('href') + ')'
    $('#overlay').show()
    $('#image-placeholder').css('background-image', imageURL)
    e.preventDefault()
  })

  $('#overlay').click(function (e) {
    $('#overlay').hide()
  })
})
