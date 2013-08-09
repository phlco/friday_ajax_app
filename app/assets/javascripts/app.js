var app = {};

app.userCount = function() {
  $.ajax({
    type: 'get',
    url: '/',
    dataType: 'json'
  }).done(function(response){
    alert('There are ' + response.length + ' users.');
  })
}

app.getUserName = function() {
  alert($(this).text());
}

app.onLoad = function() {
    $('#users').on('click', '.user-name', app.getUserName);
    $('#user-count').click(app.userCount);
}

$(document).ready(app.onLoad);