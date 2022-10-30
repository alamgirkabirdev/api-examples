

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function loadPost(){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
loadPost();

function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
       console.log(user.name)
        const li =document.createElement('li');
        li.innerText = `name:-${user.name} , email:-${user.email}`;
        ul.appendChild(li);
    }  
}
function rendomUsers(){
    fetch('https://randomuser.me/api/')
    .then(res = res.json())
    .then(data => console.log(data))

}
// function displayRendomUsers(data){
//     const ul=document.getElementById('rendom');
//     for(const user of data){
//         // console.log(user);
//         const li = document.createElement('li');
//         li.innerText = 'ami';
//         ul.appendChild(li);
//     }

// }