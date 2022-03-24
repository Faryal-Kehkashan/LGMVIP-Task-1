function add() {

    document.getElementById('error').innerHTML='';
    let input = document.getElementById('input').value;

    if (input == '') 
    {    document.getElementById('error').innerHTML="Please Enter Task";
     }
    else {
        let parent = document.getElementById('added-list');
    
    let li = document.createElement('li');
    li.innerHTML = input;
    parent.appendChild(li);
    document.getElementById('input').value = '';

    
    let button = document.createElement('button'); 
    button.innerText = 'remove';
    button.className = 'remove';
    li.appendChild(button);
    }
    
}
let btn = document.querySelector('ul');
btn.addEventListener('click', function(e) {
    let parent = document.getElementById('added-list');
    let li = e.target.parentNode;
    parent.removeChild(li);
})
   
    