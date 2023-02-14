const container = document.querySelector('.container');

function displayFollowers(followers){
    
    const newFollowers = followers
    .map((person) => {
        const {avatar_url, login, html_url} = person
        return `<article class="card"> 
            <img src="${avatar_url}" alt="${login}" />
            <h4>${login}</h4>
            <a href="${html_url}" class="btn" target="_blank">view profile</a>
        </article>`
    })
    .join('');
    container.innerHTML = newFollowers;
    

}
export default displayFollowers;