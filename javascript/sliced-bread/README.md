# The best beverage testing

## Run locally
export PORT='your localhost port'
export REACT_APP_DOMAIN='http://localhost:$PORT'

`git clone git@github.com:ys-jh/sliced_bread.git`

`cd sliced_bread/javascript/sliced_bread`

Run `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Difficulties
- Spent sometime to play around java spring framework, wasted quite a bit time. Then decided to build on javaScript.

## Further to do 

### Backend
- convert backend to es6 and Typescript
- add api token
- should send image from `/get-best-drink` api
- `place-order` api should save data in json
- apis add verification for request  
- covering with e2e test 

### Frontend
- use custom theme to simplified styles
- autoComplete city and country information
- cover component actions tests
