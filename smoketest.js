/**
 * docker-octokit/smoketest.js
 * ---
 * make a GET request to a public repo to verify things are installed correctly
 */

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit()

const smoketest = async () => {
    const response = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'benmangold',
        repo: 'hello-node'
    })
    console.log(response)
}

try {
    smoketest()
} catch (e) {
    console.log(`docker-octokit/smoketest.js: ${e}`)
}
