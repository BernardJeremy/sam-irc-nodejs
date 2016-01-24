$('#loginForm').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'http://localhost:8080/user/',
    type: 'GET',
    dataType: 'html',
    success: function(codeHtml, statut) {
      $('body').append(codeHtml);
    },

    error: function(resultat, statut, erreur) {
      alert('FAIL AJAX : ' + statut + ' ' + erreur);
    },
  });
});
