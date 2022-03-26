var word, words=[], len, answers=[], syntax=0, guess, picture;
var trafienie=false;

function start(){
    words=["random","Ryszard","żółw","informatyka",]
    word = words[Math.floor(Math.random()*words.length)];
    len = word.length;

     for(var i=0; i<len; i++){
         answers[i] = "_";
     }

     document.getElementById("haslo").innerHTML = answers.join(" ");
}

function check(){
    trafienie=false;

    guess = document.getElementById("znak").value;

    for(var j=0; j<word.length; j++){
        if(word[j] == guess && answers[j]=="_"){
            answers[j]= guess;
            len--;
            trafienie=true;
        }
        document.getElementById("haslo").innerHTML= answers.join(" ");
    }
    document.getElementById("znak").value="";

    if(trafienie==false && syntax<9){
        syntax++;
        picture = "s" + syntax + ".jpg";
        document.getElementById("szubienica").innerHTML= '<img src=" ' + picture + '">';
    }
    if (len==0 && syntax <9){
        document.getElementById="wynik".innerHTML="Wygrana";
        document.getElementById="wynik".style.backgroundColor="green";
    }
    if (syntax==9){
        document.getElementById="wynik".innerHTML="Wygrana";
        document.getElementById="wynik".style.backgroundColor="red";
    }
}