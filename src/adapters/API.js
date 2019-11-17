const githubEndpoint = "https://api.github.com/"
const usersEndpoint = `${githubEndpoint}users/`

const reposEndpoint100PerPage = username => `${usersEndpoint}${username}/repos?per_page=100`

const getUserRepos = username => {
    // return fetch(reposEndpoint(username), {
    //     headers: {
    //         Authorization: `token TOKEN_GOES_HERE`
    //     }
    // })
    return fetch(reposEndpoint100PerPage(username))
    .then(resp => resp.json())
}

export default { getUserRepos }