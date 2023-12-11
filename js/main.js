
function scaleIn() {
    var element = document.getElementById('myElement');
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'scale(1.2)';


    //SCALIN VE SCALEOUT HTML DE OLLARI BILDIRMISIK KI IN UZERINE GELDIYI ZAMAN OUT ISE UZERINEN GETDIYI ZAMAN
  }



  function scaleOut() {
    var element = document.getElementById('myElement');
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'scale(1)';
  }