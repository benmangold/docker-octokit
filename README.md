# docker-octokit

a docker image with octokit installed which will make a simple query for you based on env vars

for use in ci, or at home

built and published via github actions

## container config

user - `octokit`

home - `/home/octokit`

## using this image

this image will make an octokit query for you, and with a little love you can get the output into jq

you can configure the query via environment variables passed into the container

like this:

```bash
➜  export GITHUB_REPO=hello-node
➜  export GITHUB_USER=benmangold
➜  docker run -e GITHUB_REPO -e GITHUB_USER bmngld/docker-octokit | tail -n +4 | jq
{
  "status": 200,
  "url": "https://api.github.com/repos/benmangold/hello-node"...
}
```

### env config

`GITHUB_PERSONAL_ACCESS_TOKEN` -  optional auth for private repos. make sure it has the permissions you want

`GITHUB_REPO` - github repo to be queried

`GITHUB_OWNER` - owner of github repo
