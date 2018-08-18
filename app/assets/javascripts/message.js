
$(document).on('turbolinks:load',function() {
function buildHTML(message){
  var img = message.image ? `<img src= ${message.image}>` : "";
  var html = `<div class="chatspace__list--message" data-id=${ message.id }>
                <div class="chatspace__list--message-indent">
                  <div class="chatspace__list--message-indent-name">
                    ${message.user_name}
                  </div>
                  <div class="chatspace__list--message-indent-time">
                    ${message.date}
                  </div>
                  <div class="chatspace__list--message-indent-body">
                    ${message.content}
                  </div>
                  <div class="chatspace__list--message-indent-body">
                    ${ img }
                  </div>
                </div>
              </div>`
  return html;
}

  function scroll(){
    $('.chatspace__list').animate({scrollTop: $('.chatspace__list')[0].scrollHeight},'fast');
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chatspace__list').append(html);
      $('.chatspace__fotter--search-bottum').prop('disabled', false);
      scroll($('.chatspace__list'))
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
  })

  var interval = setInterval(function() {
    if (window.location.pathname.match(/\/groups\/\d+\/messages/)) {
        var messageId = $('.chatspace__list--message:last').data('id');
      $.ajax({
        url: location.href,
        type: 'GET',
        data: {id: messageId},
        dataType: 'json'
      })
      .done(function(data) {
        var html = '';
        data.forEach(function(data) {
          html = buildHTML(data);
        });
        $('.chatspace__list').append(html);
        scroll();
      })
      .fail(function(){
        alert('error');
      })
    } else{
      clearInterval(interval);
    }
  }, 5000);
})
