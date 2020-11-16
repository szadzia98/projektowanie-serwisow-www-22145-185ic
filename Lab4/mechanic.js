/* 
Początek funkcji init, która odpala się podczas eventu onload elementu body
*/

function init(){
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("2d");
    
    // ---  KLASA APPLE --- //
    /*
    Obiekt Apple, służy do tworzenia na planszy jabłka.
    Celem gry jest ‚zebranie’ przez gracza jak największej ilości jabłek.
    Konstruktor przyjmuje dwa argumenty, wskaźniki do elementu canvas i jego kontekstu dwuwymiarowego.

    Pola klasy:

    canvas – przyjmuje wartość parametru, odnosi się do elementu canvas w dokumencie html.
    ctx – przyjmuje wartość parametru, odnosi się do kontekstu dwuwymiarowego elementu canvas.
    size – długość boku kwadratu reprezentującego jabłko na planszy.
    onBoard – wartość boolowska. Potrzebna w obiekcie Game. Określa czy jabłko znajduje się już na planszy.
    Jeżeli onBoard jest ustawiona na false, gra utworzy nowe jabłko, w nowej lokalizacji.
    x – poziome położenie jabłka, w konstruktorze ustawione na zero.
    y – pionowe położenie jabłka, w konstruktorze ustawione na zero.
    scoreValue – ilość punktów, która gracz otrzyma za ‚zjedzenie’ jabłka.
    
    Metody klasy:

    randomize – ta metoda ustawia pola x oraz y jabłka. Wartości generowane są losowo. 
    Mogą zawierać liczby całkowite w przedziale od zera do wielkości elementu canvas podzielonej przez size 
    jabłka
    drawApple – ta metoda rysuje jabłko na planszy gry. Najpierw ustawiam kolor na zielony a następnie 
    używając canvasowej metody rect umieszcza jabłko zgodnie z wartościami x, y oraz size. 
    Ostatecznie kolor rysowania jest zmieniony z powrotem na czarny
    */
    
    function Apple(ctx, canvas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = 10;
        this.onBoard = false;
        this.x = 0;
        this.y = 0;
        this.scoreValue = 1;
        this.randomize = function() {
            this.x = Math.floor(Math.random() * (this.canvas.width/this.size));
            this.y = Math.floor(Math.random() * (this.canvas.height/this.size));
        };
        this.drawApple = function() {
            this.ctx.fillStyle = "green";
            this.ctx.beginPath();
            this.ctx.rect(this.x*this.size,this.y*this.size,this.size,this.size);
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.fillStyle = "black";
        };
    }
    
    // ---  KLASA SNAKE --- //
    /*
    Konstruktor Snake. Wywołanie będzie tworzyć nowy obiekt typu Snake. Następne dwie zmienne, wskazują 
    na element canvas oraz jego kontekst. Gdy to jest już gotowe, tworzy instancje obiektu Snake, 
    używając wcześniej zadeklarowanego konstruktora. Jako argumenty przekazuje dwie zmienne, jedną 
    wskazującą na canvas i drugą na jego kontekst.

    Pola klasy:

    canvas – to samo co w obiekcie Apple.
    ctx – to samo co w obiekcie Apple.
    speed – prędkość węża. Ta wartość będzie wykorzystana w funkcji setInterval.
    size – rozmiar boku jednego segmentu, z którego będzie zbudowany wąż.
    bodyParts – liczba segmentów, z których w danej chwili składa się wąż.
    bodyPartsHolder – tablica, przechowująca wszystkie segmenty węża w postaci mini obiektów. 
    Obiekty te posiadają dwa pola: x oraz y(współrzędne danego segmentu na planszy).
    direction – łańcuch znaków, według którego ustawiany jest kierunek poruszania się węża. 
    Domyślnie ustawiony na „right”. Zmieniany w trakcie działania programu za pomocą strzałek.
    paused – wartość boolowska. True oznacza, że gra jest zaupauzowana. Wykorzystywane przez obiektGame.
    alive – wartość boolowska, true oznacza, że wąż żyje i gra toczy się dalej. 
    Jeśli to pole zmieni się na false, pętla gry zatrzymuje się. Wykorzystywane przez obiektGame.
    eaten – wartość boolowska. Ustawiana na true, kiedy wąż zje jabłko. 
    Wykorzystywane przez obiekt Game.

    Metody klasy:

    initSnake – Ta metoda inicjalizuje węża. Wypełnia tablice bodyPartsHolder obiektami o odpowiednich 
    wartościach pół x oraz y. Również wywołuje metodę makeSnakeListen.
    updatePosition – metoda, która uaktualnia położenie wszystkich segmentów węża. Najpierw podnosi, 
    lub obniża wartość x lub y(w zależności od aktualnej wartości pola direction) ostatniego elementu tablicy 
    (‚głowy’ węża) o 1. Następnie uaktualnia położenia wszystkich następnych elementów o te, które ma element 
    znajdujący się wcześniej.
    makeSnakeListen – ta metoda przypisuje do obiektu window eventListener onkeydown. 
    Naciśnięcie którejś ze strzałek, zmienia wartość pola direction. Naciśnięcie spacji zmieni 
    wartość pola paused na true, oraz wypisze na planszy czerwonymi literami słowo ‚PAUZA’.
    moveSnake – ta metoda wywołuje metody drawSnake oraz updatePosition.
    drawSnake – metoda iteruje przez tablicę bodyPartsHolder i wyrysowywuje na planszy wszystkie segmenty 
    węża, bazując na wartościach x oraz y każdego z elementów.
    checkColissions – ta metoda wywoływana jest w obiekcie game i przyjmuje dwie wartości: aktualne x oraz y 
    jabłka. Jeśli wąż wpadnie na ściane, pole alive otrzyma wartość false. To samo jeśli spełni się 
    ostatni warunek, który sprawdza czy aby głowa węża nie ma takich 
    samych x i y jak, którykolwiek inny segment. Trzeci z kolei warunek sprawdza czy przypadkiem głowa węża 
    nie ma takich samych x i y jak jabłko (którego współrzędne, przekazane były jako argumenty). 
    Jeśli tak, pole eaten zmienia się na true.
    grow – Ostatnia metoda klasy Snake. Jest wywoływana przez obiekt Game gdy wąż zje jabłko. 
    Podnosi ona wartość pola bodyParts o 1. Dodaje również nowy element na początek tablicy bodyPartsHolder. 
    X oraz y nowego elementu ustawiane są na -1, aby nie pojawił się na planszy zanim metoda updatePosition, 
    nie umieści go na końcu węża.
    */
    
    function Snake(ctx, canvas) {
        var that = this;
        this.canvas = canvas;
        this.ctx = ctx;
        this.speed = 150;
        this.size = 10;
        this.bodyParts= 1;
        this.bodyPartsHolder = [];
        this.direction = "right";
        this.paused = false;
        this.alive = true;
        this.eaten = false;
        this.initSnake = function(){
            for (var i=0; i < this.bodyParts; i++) {
              this.bodyPartsHolder.push({x:i,y:0});
            };
            this.makeSnakeListen(window);

        };
        this.updatePosition = function(){
            var tempx = this.bodyPartsHolder[this.bodyParts-1].x;
            var tempy = this.bodyPartsHolder[this.bodyParts-1].y;
            var prevX = tempx;
            var prevY = tempy;
            switch(this.direction){
                case "right":
                    this.bodyPartsHolder[this.bodyParts-1].x++;
                    break;
                case "down":
                    this.bodyPartsHolder[this.bodyParts-1].y++;
                    break;
                case "left":
                    this.bodyPartsHolder[this.bodyParts-1].x--;
                    break;
                case "up":
                    this.bodyPartsHolder[this.bodyParts-1].y--;
                    break;
            }
            
            for(var i = this.bodyParts-2; i>=0;i--) {
                tempx = this.bodyPartsHolder[i].x;
                tempy = this.bodyPartsHolder[i].y;
                this.bodyPartsHolder[i].x = prevX;
                this.bodyPartsHolder[i].y = prevY;
                prevX = tempx;
                prevY = tempy;
            }
        };
        this.makeSnakeListen = function (window){
            window.onkeydown = function(e){
                switch(e.keyCode){
                    case 37:
                        if(that.direction != "right"){
                            that.direction = "left";
                        }
                        break;
                    case 38:
                        if(that.direction != "down"){
                            that.direction = "up";
                        }
                        break;
                    case 39:
                        if(that.direction != "left"){
                            that.direction = "right";
                        }
                        break;
                    case 40:
                        if(that.direction != "up"){
                            that.direction = "down";
                        }
                        break;
                    case 32 /*spacja*/:
                        if(that.paused){
                            that.paused = false;	
                        } else {
                            that.paused = true;
                            that.ctx.font = "50px serif red";
                            that.ctx.fillStyle = "red";
                            that.ctx.fillText("PAUZA", 150, 250);
                            that.ctx.fillStyle = "black";
                        }
                        break;
                }
            };
        };
        this.moveSnake = function(){
            this.drawSnake();
            this.updatePosition();
        };
        this.drawSnake = function(){
            for(var i=0; i < this.bodyParts; i++) {
                this.ctx.beginPath();
                this.ctx.rect(this.bodyPartsHolder[i].x*this.size,this.bodyPartsHolder[i].y*this.size,this.size,this.size);
                this.ctx.fill();
                this.ctx.closePath();
            };
        };
        this.checkColissions = function(appleX,appleY){
            var sneakHead = this.bodyPartsHolder[this.bodyParts-1];
            if(sneakHead.x*this.size >= canvas.width || sneakHead.x < 0){
                this.alive = false;
            }
            if(sneakHead.y*this.size >= canvas.height || sneakHead.y < 0){
                this.alive = false;
            }
            if(sneakHead.x == appleX && sneakHead.y == appleY){
                this.eaten = true;
            }
            for(var i = 0; i < this.bodyPartsHolder.length-1; i++){
                if(sneakHead.x == this.bodyPartsHolder[i].x && sneakHead.y == this.bodyPartsHolder[i].y){
                    this.alive = false;
                }
            }
        };
        this.grow = function(){
            this.bodyParts++;
            this.bodyPartsHolder.unshift({x:-1,y:-1});
        };
    }
    
    // ---  KLASA GAME --- //
    
    /*
    Konstruktor przyjmuje dwa argumenty, wskaźniki do elementu canvas i jego kontekstu dwuwymiarowego.

    Pola klasy:

    canvas – to samo co w poprzednich obiektach.
    ctx – to samo co w poprzednich obiektach.
    width – szerokość wybranego elementu canvas.
    height – wysokość wybranego elementu canvas.
    state – łańcuch znaków. Określa aktualny stan gry, wykorzystywany przez metodę init. 
    Początkowa wartość to New.
    snake – instancja obiektu Snake. Konstruktor wywołany z argumentami canvas oraz ctx obiektu Game.
    apple – instancja obiektu Apple. Konstruktor wywołany z argumentami canvas oraz ctx obiektu Game.
    appleCorrect – zmienna boolowska. Określa, czy jabłko zostało umieszczone na planszy poprawnie 
    (nie na polu, które aktualnie zajmuje wąż).
    score – pole, które przechowuje ilość punktów jaką udało się zdobyć graczowi, oczywiście początkowo 
    ustawione na zero.
    
    Metody klasy:

    drawWelcome - metoda wywoływana przez metodę init, gdy pole state jest równe New. 
    Metoda ta wypisuje na planszy instrukcje, oraz dodaje do obiektu window eventlistner, który powoduje, 
    że po naciśnięciu enter pole state zmienia się na „playGame” i ponownie odpalana jest metoda init.
    activateGame – ta metoda najpierw inicjalizuje węża wywołując metodę obiektu Snake – initSnake a 
    następnie ustawia setInterval. W samym setInterval trochę się dzieje, ale są to głównie proste 
    sprawdzania warunków. Najpierw metoda sprawdza czy wąż zjadł jabłko (poprzez pole obiektu Snake – eaten).
    Jeśli tak graczowi, doliczane są punkty, wąż rośnie a jabłko zostaje zdjęte z planszy. Kolejną rzeczą, 
    którą robi metoda jest wyczyszczenie elementu canvas, pod warunkiem, że gra nie jest aktualnie 
    zapauzowana. Następnie, jeśli na planszy jest jabłko, wywoływana jest metoda obiektu Apple – 
    drawApple. Jeżeli jabłka nie ma, losowana jest nowa pozycja (tak długo, aż nie będzie pokrywać się 
    z pozycją węża), po czym jabłko zostaje umieszczone na planszy i narysowane. Ostatnią rzeczą, która 
    jest sprawdzana w setInterval to to czy pole obiektu Snake – alive jest równe true. Jeśli tak i gra 
    nie jest zapauzowana, waż jest rysowany i uaktualniany jak zwykle. Jeśli pole alive jest równe false, 
    program zmienia wartość pola state na „gameLost”, umieszcza na ekranie smutną wiadomość i ponownie 
    odpala metodę init.
    init – ta metoda obsługuje odpowiednie stany gry i w zależności od wartości pola statewywołuje 
    odpowiednie metody. Jeżeli stan jest równy „gameLost”, ta funkcja resetuje wszystkie ustawienia aby 
    przygotować grę do nowej partii.
    */
    function Game(canvas, ctx){
        var that = this;
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.state = "New";
        this.snake = new Snake(this.ctx, this.canvas);
        this.apple = new Apple(this.ctx, this.canvas);
        this.appleCorrect = true;
        this.score = 0;
        this.drawWelcome = function() {
            ctx.font = "48px serif";
              ctx.fillText("Witaj w grze Snake!", 10, 50);
              ctx.font = "24px serif";
              ctx.fillText("Naciśnij ENTER aby rozpocząć nową gre.", 20, 150);
              ctx.fillText("W trakcie gry nacisnij SPACJE aby zapauzować.", 20, 180);
              ctx.fillText("Użyj strzałek aby pokierować wężem.", 20, 280);
              ctx.fillText("Po zjedzeniu jabłka wąż urośnie,", 20, 310);
              ctx.fillText("a Ty otrzymasz punkty!", 20, 340);
              window.onkeydown = function(e){					
                switch(e.keyCode){
                    case 13/*enter*/:
                        that.state = "PlayGame";
                        that.init();
                        break;
                }
            };
        };
        this.activateGame = function() {
            this.snake.initSnake();
            this.intervalID = setInterval(
                function(){
                if(that.snake.eaten){
                    that.score += that.apple.scoreValue;
                    document.getElementById("score").innerText = "Wynik = " + that.score;
                    that.apple.onBoard = false;
                    that.snake.grow();
                    that.snake.eaten = false;
                }
                if(that.snake.paused != true){
                    that.ctx.clearRect(0,0,that.canvas.width,that.canvas.height);
                };
                if(that.apple.onBoard) {
                    that.apple.drawApple();
                } else {
                    do {
                        that.appleCorrect = true;
                        that.apple.randomize();
                        for(var i = 0; i < that.snake.bodyPartsHolder.length; i++){									
                            if(that.apple.x == that.snake.bodyPartsHolder[i].x && that.apple.y == that.snake.bodyPartsHolder[i].y ){
                                that.appleCorrect = false;
                                break;
                            }
                        }
                    } while(!(that.appleCorrect));
                    
                    that.apple.onBoard = true;
                    that.apple.drawApple();
                }
                if(that.snake.alive){
                    if(that.snake.paused != true){
                        that.snake.moveSnake();
                        that.snake.checkColissions(that.apple.x,that.apple.y);
                    }	
                } else {
                    that.ctx.font = "50px serif";
                    that.ctx.fillStyle = "red";
                    that.ctx.fillText("Wąż zdechł", 120, 200);
                    that.ctx.font = "30px serif";
                    that.ctx.fillText("Naciśnij ENTER", 150, 250);
                    that.ctx.fillText("Twoj wynik: "+that.score, 150, 285);
                    that.ctx.fillStyle = "black";
                    clearInterval(that.intervalID);
                    that.state = "GameLost";
                    that.init();
                }
            },
            this.snake.speed);
        };
        this.init = function() {
            switch(this.state){
                case "New":
                    this.drawWelcome();
                    break;
                case "PlayGame":
                    this.activateGame();
                    document.getElementById("score").innerText = "Wynik = 0";
                    break;
                case "GameLost":
                    window.onkeydown = function(e){		
                    switch(e.keyCode){
                        case 13/*enter*/:
                            that.score = 0;
                            that.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                            that.snake = null;
                            that.snake = new Snake(that.ctx, that.canvas);
                            that.apple = new Apple(that.ctx, that.canvas);
                            that.state = "PlayGame";
                            that.init();
                            break;
                        }
                    };
                    break;
            }
        };
    };
    
    var gra = new Game(canvas, ctx);
    gra.init();
    
}