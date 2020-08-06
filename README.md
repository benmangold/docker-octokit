# docker-octokit

a docker image with octokit installed

built and published via github actions

## releases

`bmngld/docker-octokit:0.0.2` - Initial prerelease

## container config

user - `octokit`

home - `/home/octokit`

## using this image

this image will make an octokit query for you, and output parsable json

you can configure the query via environment variables passed into the container

like this:

```bash
➜  export GITHUB_REPO=hello-node
➜  export GITHUB_USER=benmangold
➜  docker run -e GITHUB_REPO -e GITHUB_USER bmngld/docker-octokit  | jq
{
  "status": 200,
  "url": "https://api.github.com/repos/benmangold/hello-node"...
}
```

### env config

`GITHUB_PERSONAL_ACCESS_TOKEN` -  optional auth for private repos. make sure it has the permissions you want

`GITHUB_REPO` - github repo to be queried

`GITHUB_OWNER` - owner of github repo

