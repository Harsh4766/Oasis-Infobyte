var input=document.getElementById('input');
var btn=document.querySelectorAll('.btn');

var string="";
var arr=Array.from(btn);

arr.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.value=='=')
            {
                string =eval(string);
                input.value=string;
            }
        else if(button.value=='AC')
            {
                string="";
                input.value=string;
            }
        else if(button.value=='DEL')
            {
                string = string.substring(0,string.length-1);
                input.value=string;
            }
        else{
            string=string + button.value;
            input.value=string;
        }
    });
})