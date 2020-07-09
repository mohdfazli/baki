
$('body').ready(function(){
    $('#br1').val(localStorage.br1);
    $('#br2').val(localStorage.br2);
    $('#cimb').val(localStorage.cimb);
    $('#bimb').val(localStorage.bimb);
    $('#agro').val(localStorage.agro);
    $('#total').val(localStorage.total);
  return false;
});

$( "#br1, #br2, #cimb, #bimb, #agro, #total" ).keyup(function() {
  var br1 = parseInt($("#br1").val());
  var br2 = parseInt($("#br2").val());
  var cimb = parseInt($("#cimb").val());
  var bimb = parseInt($("#bimb").val());
  var agro = parseInt($("#agro").val());
  var total = br1+br2+cimb+bimb+agro;
  $("#total").val(total);
  localStorage.br1 = br1;
  localStorage.br2 = br2;
  localStorage.cimb = cimb;
  localStorage.bimb = bimb;
  localStorage.agro = agro;
  localStorage.total = total;
});
