$(function() {
  $('#modulo').click(function() {
    $('.init_hidden').filter('#moduloDef, #moduloDefTitle').toggle();
    $('.init_hidden').not('#moduloDef, #moduloDefTitle').hide();
  });

  $('#alert').click(function() {
    $('.init_hidden').filter('#alertDef, #alertDefTitle').toggle();
    $('.init_hidden').not('#alertDef, #alertDefTitle').hide();
  });
  $('#plusEquals').click(function() {
    $('.init_hidden').filter('#plusEqualsDef, #plusEqualsDefTitle').toggle();
    $('.init_hidden').not('#plusEqualsDef, #plusEqualsDefTitle').hide();
  });
  $('#string').click(function() {
    $('.init_hidden').filter('#stringDef, #stringDefTitle').toggle();
    $('.init_hidden').not('#stringDef, #stringDefTitle').hide();
  });
  $('#escape').click(function() {
    $('.init_hidden').filter('#escapeDef, #escapeDefTitle').toggle();
    $('.init_hidden').not('#escapeDef, #escapeDefTitle').hide();
  });
  $('#boolean').click(function() {
    $('.init_hidden').filter('#booleanDef, #booleanDefTitle').toggle();
    $('.init_hidden').not('#booleanDef, #booleanDefTitle').hide();
  });

  $('li').click(function() {
    $('li.ig-ja-bold').removeClass('ig-ja-bold');
    $(this).addClass('ig-ja-bold');
  });
});
