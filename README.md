<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>question to know if u still love me</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="wrapper">
    <div class="popup">
        <img id="image" src="C:\Users\Norberto\Pictures/teary.gif">    
        <h2 class="question">Mahal mo pa ba ako?</h2>
        <div class="btn-group">
        <button class="yes-btn">YeS</button>
        <button class="no-btn">No</button>
    </div>
    </div>
    </div>
    <script src="script.js"></script>
    </body>
</html>


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: blueviolet;
}
.wrapper{
    position: relative;
    width: 600px;
    height: 400px;
    background-color:violet;
    border-radius: 20px;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h2{
    font-size: 3em;
    color: blue;
    margin: 15px 0;
}
.btn-group{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
button {
position: absolute;
width: 150px;
height: inherit;
font-size: 1.2em;
color: white;
font-weight: 600;
border-radius: 30px;
border:2px solid violet; 
outline: none;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}

button:nth-child(1) {
margin-left: -200px;
background: blueviolet;
}
button:nth-child(2) {
    margin-right: -200px;
    color: blueviolet;
}    

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click',() => {
    question.innerHTML ='gagiiiii kaya love na love kita eh huhu i love you so muuuuuch';
    var a;
    function show_hide()
    {
        if (a == 1)
        {
            document.getElementById("image").style.display="inline";
            return a=0;
        }
        else {
            document.getElementById("image").style.display="none";
            return a=1;
    
        }
    }

});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

});
