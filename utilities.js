function clickOMatic(){
    alert('Hello!');
}


const click = document.getElementById('click');

click.addEventListener("click",(event)=>{
    clickOMatic();
})