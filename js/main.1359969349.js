$(document).ready(function(){
  $.ajaxSetup({cache:false});
  var slug;
  slug = $('.views').data('slug');

  $('#getQuote').click(function(){
    getQuote();
  });

  resizeSidebar();
//  $(window).resize(function(){
//    resizeSidebar();
//  });

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

  getQuote();

  document.getElementById("container").className = "active";
});
  
function resizeSidebar(){
  if(($(document).width()/parseFloat($("body").css("font-size"))) > 48)
    $('#sidebar').height($(document).height());
  else
    $('#sidebar').height('auto');
}

window.onbeforeunload = function(){document.getElementById("container").className = "inactive";};


<!-- Plugins -->
  <!-- Google Analytics -->
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36771574-1']);
    _gaq.push(['_setDomainName', 'chrismorris.org']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  <!-- Facebook -->
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=1721669711307072";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  <!-- Twitter -->
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
