const { Octokit } = require("@octokit/rest");

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
const GITHUB_REPO = process.env.GITHUB_REPO
const GITHUB_USER = process.env.GITHUB_USER



const octokit = new Octokit({
    auth: GITHUB_PERSONAL_ACCESS_TOKEN,
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
    }
})

const query = async () => {
    return await octokit.request('GET /repos/{owner}/{repo}', {
        owner: GITHUB_USER,
        repo: GITHUB_REPO
    })
}

const app = async () => {
    try {
        const response = await query();
        console.log(JSON.stringify(response))
    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

app()
