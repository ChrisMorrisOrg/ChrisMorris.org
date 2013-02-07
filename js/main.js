$(document).ready(function(){
  $.ajaxSetup({cache:false});
  var slug;
  slug = $('.views').data('slug');

  if(slug){
    $.ajax({
      type: 'POST',
      url: 'http://chrismorris.org/views',
      data: {
        slug: slug
      },
      dataType: 'json',
      success: function(data) {
        $('.views').text(data.views + " views");
        $('.views').removeClass('inactive').addClass('active');
      },
      error: function(data, textStatus, errorThrown) {
        $('.views').text("ERR");
        $('.views').removeClass('inactive').addClass('active');
      }
    });
  }

  function getQuote(){
    $.ajax({
      type: 'GET',
      url: 'http://chrismorris.org/quotes',
      dataType: 'json',
      success: function(data) {
        $('.box').html("“" + data.quote + "”" + "<span class=\"quoteAuthor\">~ " + data.author + " ~</span>");
      },
      error: function(data, textStatus, errorThrown) {
        $('.box').html("“Doesn't it just suck when the quotes system fails?”" + "<span class=\"quoteAuthor\">~ Chris Morris ~</span>");
      }
    });
  };
  
  function resizeSidebar(){
    if(($(document).width()/parseFloat($("body").css("font-size"))) > 48)
      $('#sidebar').height($(document).height());
    else
      $('#sidebar').height('auto');
  }


  $('#getQuote').click(function(){
    getQuote();
  });


  resizeSidebar();
  getQuote();
});