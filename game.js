Player1_name = localStorage.getItem("player1_name");
Player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1NAME").innerHTML = Player1_name + " : ";
document.getElementById("player2NAME").innerHTML = Player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question turn : " + Player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn : " + Player2_name;

function send()
{
    get_word = document.getElementById("word_input").value;
    word = get_word.toLowerCase();
    console.log(word);

    
    ques_word = "<h4 id='word_display'> Q. " + word + "</h4>";
    input_box = "<br> Answer : <input type='text' id='inp_checkbox'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = ques_word + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word_input").value = "";

}



