  var transfer_id = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
        var level_id = 0;
        var MainText = [["Тюрьма Хамонд", "Пробуждение", "И так, вы проснулись, в тюремной башне Хамонд, далекой и сухой. Стены здесь настолько толстые что тепло не попадает внутрь даже в самые жаркие дни. Ваша камера заполнена сеном и костями бывших заключенных. А стены сделанные из лунного мрамора покрылись мхом и лишайником. Как вы вообще здесь оказались?"], ["Тюрьма Хамонд", "Title2", "Text2"], ["Тюрьма Хамонд", "Title3", "Text3"], ["Тюрьма Хамонд", "Title4", "Text4"], ["Title5", "Title5", "Text5"], ["Title5", "Title5", "Text5"], ["Title6", "Title6", "Text6"]];
        var ButtonText = [["1", "2", "3"], ["2", "3", "4"], ["3", "4", "5"], ["4", "5", "6"], ["5", "6", "7"]]
        var ButtonTitle = [["1", "2", "3"], ["1", "2", "3"]]
        document.getElementById("LocationTitle").innerHTML = MainText[level_id][0];
        document.getElementById("QuestTitle").innerHTML = MainText[level_id][1];
        document.getElementById("QuestText").innerHTML = MainText[level_id][2];

        ;(function($D)
        {
            var $buttonStart = document.getElementById('StartButton'),
                $buttonFirst = document.getElementById('FirstAnswerButton'),
                $buttonSecond = document.getElementById('SecondAnswerButton'),
                $containerStart = $D.querySelector('.js-containerStart'),
                $containerFirst = $D.querySelector('.js-containerFirst'),
                $containerSecond = $D.querySelector('.js-containerSecond');
                $containerThird = $D.querySelector('.js-containerThird');

             $buttonStart.addEventListener('click', function(e){
                /*var data = e.target.dataset,
                isVisible = $containerFirst.style.display = 'none',
                  VisibleDo = $containerStart.style.display = "none";*/

                  /*основной текст*/
                  level_id = transfer_id[level_id][0];
                  document.getElementById("LocationTitle").innerHTML = MainText[level_id][0];
                  document.getElementById("QuestTitle").innerHTML = MainText[level_id][1];
                  document.getElementById("QuestText").innerHTML = MainText[level_id][2];

                  /*текст кнопок*/
                  document.getElementById("Button1Title").innerHTML = ButtonTitle[level_id][0];
                  document.getElementById("Button1Text").innerHTML = ButtonText[level_id][0];
                  document.getElementById("Button2Title").innerHTML = ButtonTitle[level_id][1];
                  document.getElementById("Button2Text").innerHTML = ButtonText[level_id][1];
                  document.getElementById("Button3Title").innerHTML = ButtonTitle[level_id][2];
                  document.getElementById("Button3Text").innerHTML = ButtonText[level_id][2];

            });
            $buttonFirst.addEventListener('click', function(e){
                /*var data = e.target.dataset,
                  isVisible = $containerSecond.style.display == 'block',
                  VisibleDo = $containerFirst.style.display = "none";
                  VisibleNot = $containerStart.style.display = "none";*/

                  level_id = transfer_id[level_id][1];
                  document.getElementById("LocationTitle").innerHTML = MainText[level_id][0];
                  document.getElementById("QuestTitle").innerHTML = MainText[level_id][1];
                  document.getElementById("QuestText").innerHTML = MainText[level_id][2];

                  /*текст кнопок*/
                  document.getElementById("Button1Title").innerHTML = ButtonTitle[level_id][0];
                  document.getElementById("Button1Text").innerHTML = ButtonText[level_id][0];
                  document.getElementById("Button2Title").innerHTML = ButtonTitle[level_id][1];
                  document.getElementById("Button2Text").innerHTML = ButtonText[level_id][1];
                  document.getElementById("Button3Title").innerHTML = ButtonTitle[level_id][2];
                  document.getElementById("Button3Text").innerHTML = ButtonText[level_id][2];

            });
            $buttonSecond.addEventListener('click', function(e){
               /* var data = e.target.dataset,
                  isVisible = $containerFirst.style.display == 'block',
                  VisibleDo = $containerSecond.style.display = "none";*/
                  level_id = transfer_id[level_id][2];
                  document.getElementById("LocationTitle").innerHTML = MainText[level_id][0];
                  document.getElementById("QuestTitle").innerHTML = MainText[level_id][1];
                  document.getElementById("QuestText").innerHTML = MainText[level_id][2];

                 /*текст кнопок*/
                  document.getElementById("Button1Title").innerHTML = ButtonTitle[level_id][0];
                  document.getElementById("Button1Text").innerHTML = ButtonText[level_id][0];
                  document.getElementById("Button2Title").innerHTML = ButtonTitle[level_id][1];
                  document.getElementById("Button2Text").innerHTML = ButtonText[level_id][1];
                  document.getElementById("Button3Title").innerHTML = ButtonTitle[level_id][2];
                  document.getElementById("Button3Text").innerHTML = ButtonText[level_id][2];
            });
        })(document);