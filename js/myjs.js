$(function() {
  $('#modulo').click(function() {
    $('.init_hidden').filter('#moduloDef, #moduloDefTitle').fadeToggle();
    $('.init_hidden').not('#moduloDef, #moduloDefTitle').hide();
  });

  $('#alert').click(function() {
    $('.init_hidden').filter('#alertDef, #alertDefTitle').fadeToggle();
    $('.init_hidden').not('#alertDef, #alertDefTitle').hide();
  });
  $('#plusEquals').click(function() {
    $('.init_hidden').filter('#plusEqualsDef, #plusEqualsDefTitle').fadeToggle();
    $('.init_hidden').not('#plusEqualsDef, #plusEqualsDefTitle').hide();
  });
  $('#string').click(function() {
    $('.init_hidden').filter('#stringDef, #stringDefTitle').fadeToggle();
    $('.init_hidden').not('#stringDef, #stringDefTitle').hide();
  });
  $('#escape').click(function() {
    $('.init_hidden').filter('#escapeDef, #escapeDefTitle').fadeToggle();
    $('.init_hidden').not('#escapeDef, #escapeDefTitle').hide();
  });
  $('#boolean').click(function() {
    $('.init_hidden').filter('#booleanDef, #booleanDefTitle').fadeToggle();
    $('.init_hidden').not('#booleanDef, #booleanDefTitle').hide();
  });

  $('li').click(function() {
    $('li.ig-ja-bold').removeClass('ig-ja-bold');
    $(this).addClass('ig-ja-bold');
  });
});
