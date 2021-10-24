let username = {
    github: 'cruisecx',
    youtube: 'channel/UCg2XkKHX-v-0cGBr2bVSm7g',
    facebook: 'welliton.asw',
    instagram: 'wsproto',
    twitter: '#'
}

function alteraLink(){
    for(let i of lista.children){
        let social = i.getAttribute('class')
        // let username = i.getAttribute('id')
        i.children[0].href = `https://${social}.com/${username[social]}`
    }
}

alteraLink();

function alteraDados(){
    const url = 'https://api.github.com/users/cruisecx'
    fetch(url).then(response => response.json())
    .then(data => {
        avatar.src = data.avatar_url;
        bio.innerHTML = data.bio;
        githubUser.innerHTML = data.login;
        linkGithub.href = data.html_url;
        document.querySelector('.userName').innerHTML = data.name;
    })
    
}

alteraDados();