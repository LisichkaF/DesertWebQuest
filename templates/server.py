from flask import Flask, url_for, request, redirect

app = Flask(__name__)

loged = False
@app.route('/')
@app.route('/index')
def index():
    if loged:
        return f'''<!DOCTYPE html>
            <html lang="ru">
            <head>
            <link rel="icon" type="image/x-icon" href="Dust.ico">
            <link rel="stylesheet" type="text/css" href="{url_for('static', filename='../static/css/MainStyle.css')}" />
            <title>Testorion</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div class="navbar">
                    <h2>Web Quest</h2>
                  </div> 
                <div class="header">
                    <h1>Сайт-тестирование</h1>
                    <p>Для проверки знаний</p>
                  </div>
                <div class="row">
                    <div class="main">
                        <div class="card">
                        <button onclick="alert(level_id)">Выведи переменную на экран</button>
                        <div class="js-containerStart">
                          <h1 id="LocationTitle">Тюрьма Хамонд</h1>
                          <br>
                          <h3 id="QuestTitle">Пробуждение</h3>
                          <div id="QuestText">ааа</div>
                          <button class="QuestButton" id="StartButton">
                            <h4 id="Button1Title">Я еретик</h4>
                            <div id="Button1Text">Похоже вы поклонялись запретным богам, но во время одного из обрядов вас нашли.</div>
                          </button>
                          <button class="QuestButton" id="FirstAnswerButton">
                            <h4 id="Button2Title">Я преступник</h4>
                            <div id="Button2Text">Возможно вы убили или обокрали кого-то, в любом случае вы теперь здесь.</div>
                          </button>
                          <button class="QuestButton" id="SecondAnswerButton">
                            <h4 id="Button3Title">Я беглец</h4>
                            <div id="Button3Text">Вы бежите большую часть жизни, возможно вы даже не помните от чего, но похоже вам придеться задержаться здесь.</div>
                          </button>
                        </div>
                          <div class="js-containerFirst hidden">
                            ddfdfdfdf
                          </div>
                          <div class="js-containerSecond hidden">
                            fffff
                          </div>
                        </div>
                    </div>
                </div>
                </body>'''
    else:
        return redirect("/login", code=302)


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return f'''<!DOCTYPE html>
            <html lang="en">
            <head>
            <link rel="icon" type="image/x-icon" href="{url_for('static', filename='Dust.ico')}" />
            <link rel="stylesheet" type="text/css" href="{url_for('static', filename='../static/css/Lisostyle.css')}" />
            <title>Testorion</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
            <div class="title">
                Desert BRPG
            </div>
            <div class="thing">
            <form class="registrationForm">
            <div class="js-containerLogin">
            <button class="TabButton" style="width: 100px;"><h3>Log in</h3></button><button class="UnactiveTabButton" id="TabButtonLogin" style="width: 100px;"><h3>Sign in</h3></button>
            <div class="registrationFon">
                <h3>Log in</h3>
                <hr class="hrblack">
             <p>Ваша почта<input type="email" style="font-family: 'Arial';" placeholder="example@mail.com" oninput="this.className = ''"></p>
             <p>Ваш пароль <input type="password" style="font-family: 'Arial';" display: none placeholder="password" oninput="this.className = ''"></p>
             <button class="button" href="GameScreen.html" style="width: 100px;">Log in</button>
             <hr class="hrblack">
            </div>
            </div>
             <div class="js-containerSignin hidden">
                <button class="UnactiveTabButton" id="TabButtonSign" style="width: 100px;"><h3>Log in</h3></button><button class="TabButton"  style="width: 100px;"><h3>Sign in</h3></button>
                <div class="registrationFon">
                    <h3>Sign in</h3>
                <hr class="hrblack">
                <p>Ваше имя<input  type="nickname" name="nickname" id="nickname" style="font-family: 'Arial';" placeholder="Max Fray" oninput="this.className = ''"></p>
                <p>Ваша почта<input type="email" name="email" id="email" style="font-family: 'Arial';" placeholder="example@mail.com" oninput="this.className = ''"></p>
                <p>Ваш пароль <input type="password" name="password" id="password" style="font-family: 'Arial';" display: none placeholder="password" oninput="this.className = ''"></p>
                <button class="button" type="submit" style="width: 130px;">Sign in</button>
                <hr class="hrblack">
                </div>
            </form>
            </div>
            </dfo>
                © Lisichka Farengeit, 2020
            </body>
            </html>
            '''
    elif request.method == 'POST':
        print(request.form['nickname'])
        print(request.form['email'])
        print(request.form['password'])
        return "Форма отправлена"
        loged = True
        return redirect("/login", code=302)


if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1')