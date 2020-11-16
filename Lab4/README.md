# Lab 4
## Gra przeglądarkowa
### Opis
Celem gry jest ‚zebranie’ przez gracza jak największej ilości jabłek nie padając wężem na ściany ani nie gryząc się.  

#### Obiekt Apple 
Służy do tworzenia na planszy jabłka.  

Konstruktor przyjmuje dwa argumenty, wskaźniki do elementu canvas i jego kontekstu dwuwymiarowego.  

Pola klasy:  

canvas – przyjmuje wartość parametru, odnosi się do elementu canvas w dokumencie html.  
ctx – przyjmuje wartość parametru, odnosi się do kontekstu dwuwymiarowego elementu canvas.  
size – długość boku kwadratu reprezentującego jabłko na planszy.  
onBoard – wartość boolowska. Potrzebna w obiekcie Game. Określa czy jabłko znajduje się już na planszy.  Jeżeli onBoard jest ustawiona na false, gra utworzy nowe jabłko, w nowej lokalizacji.
x – poziome położenie jabłka, w konstruktorze ustawione na zero.  
y – pionowe położenie jabłka, w konstruktorze ustawione na zero.  
scoreValue – ilość punktów, która gracz otrzyma za ‚zjedzenie’ jabłka.  
    
Metody klasy:  

randomize – ta metoda ustawia pola x oraz y jabłka. Wartości generowane są losowo. Mogą zawierać liczby całkowite w przedziale od zera do wielkości elementu canvas podzielonej przez size jabłka  
drawApple – ta metoda rysuje jabłko na planszy gry. Najpierw ustawiam kolor na zielony a następnie używając canvasowej metody rect umieszcza jabłko zgodnie z wartościami x, y oraz size. Ostatecznie kolor rysowania jest zmieniony z powrotem na czarny  
#### Obiekt Snake.  
Konstruktor Snake. Wywołanie będzie tworzyć nowy obiekt typu Snake. Następne dwie zmienne, wskazują na element canvas oraz jego kontekst. Gdy to jest już gotowe, tworzy instancje obiektu Snake, używając wcześniej zadeklarowanego konstruktora. Jako argumenty przekazuje dwie zmienne, jedną wskazującą na canvas i drugą na jego kontekst.  

Pola klasy:  

canvas – to samo co w obiekcie Apple.  
ctx – to samo co w obiekcie Apple.  
speed – prędkość węża. Ta wartość będzie wykorzystana w funkcji setInterval.  
size – rozmiar boku jednego segmentu, z którego będzie zbudowany wąż.  
bodyParts – liczba segmentów, z których w danej chwili składa się wąż.  
bodyPartsHolder – tablica, przechowująca wszystkie segmenty węża w postaci mini obiektów. Obiekty te posiadają dwa pola: x oraz y(współrzędne danego segmentu na planszy).  
direction – łańcuch znaków, według którego ustawiany jest kierunek poruszania się węża. Domyślnie ustawiony na „right”. Zmieniany w trakcie działania programu za pomocą strzałek.  
paused – wartość boolowska. True oznacza, że gra jest zaupauzowana. Wykorzystywane przez obiektGame.
alive – wartość boolowska, true oznacza, że wąż żyje i gra toczy się dalej. Jeśli to pole zmieni się na false, pętla gry zatrzymuje się. Wykorzystywane przez obiektGame.  
eaten – wartość boolowska. Ustawiana na true, kiedy wąż zje jabłko. Wykorzystywane przez obiekt Game.  

Metody klasy:  

initSnake – Ta metoda inicjalizuje węża. Wypełnia tablice bodyPartsHolder obiektami o odpowiednich wartościach pół x oraz y. Również wywołuje metodę makeSnakeListen.  
updatePosition – metoda, która uaktualnia położenie wszystkich segmentów węża. Najpierw podnosi, lub obniża wartość x lub y(w zależności od aktualnej wartości pola direction) ostatniego elementu tablicy (‚głowy’ węża) o 1. Następnie uaktualnia położenia wszystkich następnych elementów o te, które ma element znajdujący się wcześniej.  
makeSnakeListen – ta metoda przypisuje do obiektu window eventListener onkeydown. Naciśnięcie którejś ze strzałek, zmienia wartość pola direction. Naciśnięcie spacji zmieni wartość pola paused na true, oraz wypisze na planszy czerwonymi literami słowo ‚PAUZA’.  
moveSnake – ta metoda wywołuje metody drawSnake oraz updatePosition.  
drawSnake – metoda iteruje przez tablicę bodyPartsHolder i wyrysowywuje na planszy wszystkie segmenty węża, bazując na wartościach x oraz y każdego z elementów.  
checkColissions – ta metoda wywoływana jest w obiekcie game i przyjmuje dwie wartości: aktualne x oraz y jabłka. Jeśli wąż wpadnie na ściane, pole alive otrzyma wartość false. To samo jeśli spełni się ostatni warunek, który sprawdza czy aby głowa węża nie ma takich samych x i y jak, którykolwiek inny segment. Trzeci z kolei warunek sprawdza czy przypadkiem głowa węża nie ma takich samych x i y jak jabłko (którego współrzędne, przekazane były jako argumenty). Jeśli tak, pole eaten zmienia się na true.  
grow – Ostatnia metoda klasy Snake. Jest wywoływana przez obiekt Game gdy wąż zje jabłko. Podnosi ona wartość pola bodyParts o 1. Dodaje również nowy element na początek tablicy bodyPartsHolder. X oraz y nowego elementu ustawiane są na -1, aby nie pojawił się na planszy zanim metoda updatePosition, nie umieści go na końcu węża.  

#### Obiekt Game  
Konstruktor Game przyjmuje dwa argumenty, wskaźniki do elementu canvas i jego kontekstu dwuwymiarowego.  

    Pola klasy:  

    canvas – to samo co w poprzednich obiektach.  
    ctx – to samo co w poprzednich obiektach.  
    width – szerokość wybranego elementu canvas.  
    height – wysokość wybranego elementu canvas.  
    state – łańcuch znaków. Określa aktualny stan gry, wykorzystywany przez metodę init. 
    Początkowa wartość to New.  
    snake – instancja obiektu Snake. Konstruktor wywołany z argumentami canvas oraz ctx obiektu Game.
    apple – instancja obiektu Apple. Konstruktor wywołany z argumentami canvas oraz ctx obiektu Game.
    appleCorrect – zmienna boolowska. Określa, czy jabłko zostało umieszczone na planszy poprawnie (nie na polu, które aktualnie zajmuje wąż).  
    score – pole, które przechowuje ilość punktów jaką udało się zdobyć graczowi, oczywiście początkowo ustawione na zero.  
    
    Metody klasy:  

    drawWelcome - metoda wywoływana przez metodę init, gdy pole state jest równe New. Metoda ta wypisuje na planszy instrukcje, oraz dodaje do obiektu window eventlistner, który powoduje, że po naciśnięciu enter pole state zmienia się na „playGame” i ponownie odpalana jest metoda init.  
    activateGame – ta metoda najpierw inicjalizuje węża wywołując metodę obiektu Snake – initSnake a następnie ustawia setInterval. W samym setInterval trochę się dzieje, ale są to głównie proste sprawdzania warunków. Najpierw metoda sprawdza czy wąż zjadł jabłko (poprzez pole obiektu Snake – eaten).Jeśli tak graczowi, doliczane są punkty, wąż rośnie a jabłko zostaje zdjęte z planszy. Kolejną rzeczą, którą robi metoda jest wyczyszczenie elementu canvas, pod warunkiem, że gra nie jest aktualnie zapauzowana. Następnie, jeśli na planszy jest jabłko, wywoływana jest metoda obiektu Apple – drawApple. Jeżeli jabłka nie ma, losowana jest nowa pozycja (tak długo, aż nie będzie pokrywać się z pozycją węża), po czym jabłko zostaje umieszczone na planszy i narysowane. Ostatnią rzeczą, która jest sprawdzana w setInterval to to czy pole obiektu Snake – alive jest równe true. Jeśli tak i gra nie jest zapauzowana, waż jest rysowany i uaktualniany jak zwykle. Jeśli pole alive jest równe false, program zmienia wartość pola state na „gameLost”, umieszcza na ekranie smutną wiadomość i ponownie odpala metodę init.  
    init – ta metoda obsługuje odpowiednie stany gry i w zależności od wartości pola statewywołuje odpowiednie metody. Jeżeli stan jest równy „gameLost”, ta funkcja resetuje wszystkie ustawienia aby przygotować grę do nowej partii.  

### Widok gry
Widok po włączeniu gry.  
![](Screen\1.jpg)  
Rozpoczęcie gry.  
![](Screen\2.jpg)  
Koniec gry poprzez ugryzienie albo wpadnięcie na ścianę (w tym wypadku to drugie).
![](Screen\3.jpg)  
Widok zapauzowanej gry.  
![](Screen\4.jpg)  