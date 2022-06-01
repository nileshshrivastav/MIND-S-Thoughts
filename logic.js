// console.log(confirm('you are admin?',''));
const add = document.querySelector('#add');
const modaleWraper = document.querySelector('.shortcut-wraper');
const cancelBtn =document.querySelector('.cancel')

add.addEventListener('click',function(){
    modaleWraper.classList.add('active');
})

cancelBtn.addEventListener('click',function(){
    modaleWraper.classList.remove("active");
})

const target = document.querySelector('#target');
const userWraper = document.querySelector('.user-wraper');
const closebtn = document.querySelector('.close')

target.addEventListener('click',function(){
    userWraper.classList.add('user-active');
})

closebtn.addEventListener('click',function(){
    userWraper.classList.remove('user-active');
})