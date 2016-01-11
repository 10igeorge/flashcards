/* $(function() {
$("#modulo").click(function() {
  $('#definition').text("Here is some new text.")
  });
}); */

$(function() {
  $('#modulo').click(function(){
    $('.init_hidden, #initial, #defWordTitle').hide();
    $('#moduloDef, #moduloDefTitle').show();
});

$('#alert').click(function() {
  $('.init_hidden, #initial, #defWordTitle').hide();
  $('#alertDef, #alertDefTitle').show();
});

$('#plusEquals').click(function() {
  $('.init_hidden, #initial, #defWordTitle').hide();
  $('#plusEqualsDef, #plusEqualsDefTitle').show();
});

$('#string').click(function() {
  $('.init_hidden, #initial, #defWordTitle').hide();
  $('#stringDef, #stringDefTitle').show();
});

$('#escape').click(function() {
  $('.init_hidden, #initial, #defWordTitle').hide();
  $('#escapeDef, #escapeDefTitle').show();
});

$('#boolean').click(function() {
  $('.init_hidden, #initial, #defWordTitle').hide();
  $('#booleanDef, #booleanDefTitle').show();
});


});
