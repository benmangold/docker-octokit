FROM node:12

RUN useradd -ms /bin/bash octokit

RUN chown -R octokit:octokit /home/octokit

RUN chmod 755 /home/octokit

USER octokit

WORKDIR /home/octokit

COPY package.json /home/octokit

COPY package-lock.json /home/octokit

COPY smoketest.js /home/octokit

COPY app/ /home/octokit/app

RUN npm i

RUN node smoketest.js

RUN rm smoketest.js

CMD npm run app
