const container2 =document.querySelector('.container2');
const btnLogin =document.querySelector('.btn-login');
const iconClose =document.querySelector('.icon-close');

btnLogin.addEventListener('click',()=>{
    container2.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    container2.classList.remove('active-popup');
})


let string = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = 0;
            document.querySelector('input').value = string;
        }
        else{
            if(string == 0){
                string = "" + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
            else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            }
        } 
    })
})