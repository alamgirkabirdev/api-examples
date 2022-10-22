const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res =>res.json())
    .then(date => displayBuddies(date))
}
loadBuddies();
const displayBuddies = data => {
    console.log(data);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        
         const p =document.createElement('P');
         p.innerText =`name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email:${buddy.email}`;
         buddiesDiv.appendChild(p);
    }
   
}