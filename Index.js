let nextpage=0;
function u(){
nextpage+=1;
if (nextpage===1) {
  p2()
}
if (nextpage === 2) {
  p3()
}
if (nextpage === 3) {
  p4()
}
if (nextpage === 4) {
  p5()
}
if (nextpage === 5) {
  p6()
}
if (nextpage === 6) {
  p7()
}
if (nextpage === 7) {
  p8()
}if (nextpage === 8) {
  p11()
}
}

function p2(){
  document.getElementById('text').innerHTML = "Witold miał czworo rodzeństwa: braci Jerzego i Józefa oraz siostry Wandę i Marię."
} 
function p3() {
  document.getElementById('text').innerHTML = "Witold Od 1910 r. mieszkał wraz z rodziną  w Wilnie, gdzie uczył się w szkole handlowej.Ożenił się w 1931 r. z młodą nauczycielką Marią Ostrowską. Miał dwójkę dzieci Andrzeja i Zosię. Ze względu na trwającą wojne musiał uczestniczyć w działaniach zbrojnych i kospiracyjnych."

  }
  
function p4() {
    document.getElementById('text').innerHTML = 'Witold slużył Wojsku Polskiemu w latach 1918-1921. Brał udział w obronie Grodna, w 1929 r. w bitwie warszawskiej, również w wyzwoleniu Wilna. Walczył jako ułan. Został odznaczony dwa razy krzyżem walecznym. Po wojnie zdał maturę i rozpoczoł studia na Akademii Sztuk Pięknych. Nie udało mu się skończyć studiów,gdyż musiał zaopiekować się chorym ojcem i zająć się zadłużonym majątkiem rodzinnym.'
}
function p5(){
document.getElementById('text').innerHTML = 'We wrześniu 1939 r. został dowódcą plutonu w szwadronie kawalerii dywizyjnej 19 Dywizji Piechoty Armii Prusy. Po rozbiciu jego dywizji przez Niemców nie złożył broni i walczył w partyzantce do października. Rozwiazał swój oddział 17 października 1939 r. i poszedł do kospiracji. Podczas walki kospiracyjnej Witold został członkiem Tajnej Armii Polskiej. Pełnił funkcje szefa sztabu a później inspektora głównego. Podczas okupacji ukrywał sìę w stolicy posługując się dokumentami porucznika Tomasza Serafińskiego.'
}
function p6() {
  document.getElementById('text').innerHTML = '<stroke style="color:#FF008063;">Witold w latach:1940/1943 r. był dobrowolnym więźniem w niemieckim obozie koncentracyjnym Auschwitz.'+'<br><img id="hyj" srcset="./a.jpeg" align="right" src="./a.jpeg" alt="./a.jpeg">Specjalnie dał się złapać podczas ulicznej łapanki w Żoliborzu 19 września 1940 r. Wykonywał wtedy misję rozpoznania warunków w obozie o którym niewiele wiedziano.Zbierał informacje dla polskiego podziemia o obozie Auschwitz i organizował na jego terenie ruch oporu'

}
function p7() {
  document.getElementById('text').innerHTML = 'Witold Piletski przebywał w obozie 2 lata i 7 miesięcy. Zoorganizował ruch oporu z 100 osobami,pisał raporty o holokauście-tzw.zbrodni przeciwko ludzkości,celowej zagładzie Żydów .Opracował również plan zbrojnego uwolnienia więźniów. Miesiąc po aresztowaniu przesłał raport Komendatowi Głównemu Związku Walki Zbrojnej generałowi Stefanowi Roweckiemu o tym co dzieje się w Auschwitz.Raport został przekazany do Londynu. Władze nie mogli uwierzyć w działalność obozu. Nie mieli pojęcia co niemcy robią z żydami. Po nieudanej prośbie o zbrojne odbicie więźniów Witold uciekł z obozu. Po udanej ucieczce awansował na rotmistrza,a później służył w działaniach bojowych. Na rozkaz generała Władysława Andersa wysłano go do Polski aby zajmował się działalnością wywiadowczą'



}
function p8() {
document.getElementById('text').innerHTML = 'Został skazany przez władze komunistyczne Polski Ludowej na karę śmierci. Został stracony w 1948 r. Unieważnienie wyroku nastąpiło w 1990 r. Pośmiernie odznaczony w 2006 r. Orderem Orła Białego,a w 2013 r. awansowany na stopień pułkownika.'
  

}
function p11() {
  document.getElementById('text').innerHTML = 'Dziekuję za wysluchanie zrudla <br>=wikipedia<br>=Portal i.pl<br><stroke style="color:#2DC9AEB5">Opracował Prezentacje Krystian Popiolek w programie js html css :)'
}