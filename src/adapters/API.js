const githubEndpoint = "https://api.github.com/"
const usersEndpoint = `${githubEndpoint}users/`

const reposEndpoint = username => `${usersEndpoint}${username}/repos/`

const getUserRepos = username => {
    console.log(reposEndpoint(username))
    // return fetch(reposEndpoint(username), {
    //     headers: {
    //         Authorization: 
    //     }
    // })
    return fetch(reposEndpoint(username))
    .then(resp => resp.json())
}

export default { getUserRepos }