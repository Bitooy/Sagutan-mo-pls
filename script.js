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
