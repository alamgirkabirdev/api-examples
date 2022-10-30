function postsTwo (){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
// postTwo();

function displayPosts(posts){
const postsContainer = document.getElementById('posts');
for(const post of posts){
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>${post.title}</h2>
    <h1>${post.id}</h1>
    <p>${post.body}
    `;
    postsContainer.appendChild(div)
    console.log(post)
}
}