# fu

simple file upload as a service with nodejs.

## What ?

_fu_ is a simple file upload api server built with [express](https://github.com/expressjs/express) and
[express-fileupload](https://github.com/richardgirges/express-fileupload).

## Why ?

This is nothing more than an experiment, in a multitude of experiments that'd follow, if I do my [#100DaysOfCode](http://www.100daysofcode.com/) challenge seriously :)

## How ?

```bash
# With NPM
npm install
npm start

# With Yarn
yarn
yarn start
```

## Usage

- To upload a file hit the endpoint `/file` with a **POST** request of the form `payload=filename.ext`.

```bash
# example with curl
$ curl -F 'payload=@file.png' -i http://localhost:3030/file

HTTP/1.1 200 OK
X-Powered-By: Express
Location: /file/file_DIBjE8qishKn.png
Content-Type: text/html; charset=utf-8
Content-Length: 7
ETag: W/"7-U6VofLJtxB8qtAM+l+E63v03QNY"
Date: Sun, 10 Jun 2018 18:14:15 GMT
Connection: keep-alive
```

- We'll get the location in the response header as `Location: /file/newFileName.ext`.
- To get the file back, do a **GET** request to `/file` of the form `/file/newFileName.ext`

**Note:** Take a look at [config.js](/config.js) to see the defaults.

## TODO

- Make a better README
- Write better code dummy! Write vanilla JS, so as to remove deps
- ~~Set file size limits~~
- Make an init script
- Make it more [thumbor](https://github.com/thumbor/thumbor) - like.
- Use this as an excuse to do a docker tutorial.

## Changelog

- `package.json` has a `start:cors` field.
- File size limit. Check [config.js](/config.js)
