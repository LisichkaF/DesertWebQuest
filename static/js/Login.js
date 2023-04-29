;(function($D)
{
    var $buttonLogin = document.getElementById('TabButtonLogin'),
        $buttonSign = document.getElementById('TabButtonSign'),
        $containerLogin = $D.querySelector('.js-containerLogin'),
        $containerSignin = $D.querySelector('.js-containerSignin');

    $buttonLogin.addEventListener('click', function(e){
        var data = e.target.dataset,
          isVisible = $containerSignin.style.display == 'block',
          VisibleDo = $containerLogin.style.display = "none";

      $containerSignin.style.display = isVisible ? 'none' : 'block';
    });
    $buttonSign.addEventListener('click', function(e){
        var data = e.target.dataset,
          isVisible = $containerLogin.style.display == 'block',
          VisibleDo = $containerSignin.style.display = "none";

      $containerLogin.style.display = isVisible ? 'none' : 'block';
    });
})(document);