# truid-challenge

[Live Demo](https://truid.herokuapp.com/)

Solution for tru.ID's developer experience challenge. An application to implement tru.ID's simCheck API.
![tru.ID-challenge](https://dev-to-uploads.s3.amazonaws.com/i/se71dg8jdzjekroqr3um.png)
![tru.ID-challenge](https://dev-to-uploads.s3.amazonaws.com/i/suq88zqrv4bcxph7yd23.png)
![tru.ID-challenge](https://dev-to-uploads.s3.amazonaws.com/i/xu3yivqfkntdqduiwaso.png)
![tru.ID-challeng](https://dev-to-uploads.s3.amazonaws.com/i/a642ljy5ssjr80q9xnnr.png)

## Requirements 
- Nodejs v12.18.0
- tru.ID CLI


## Installation/Setup

1. Download and install Nodejs [here](https://nodejs.org/en/download/).

2. Install tru.ID's `CLI` by running the command below on your terminal
```bash
npm install -g https://cli.tru.id/tru-v0.5.0/tru-v0.5.0-darwin-x64.tar.gz
```
3. On installation complete you will be requested to provide your `Client ID` and `Client Secret`. You can obtain both from your tru.ID's console. Visit to [tru.id](http://tru.id) to register.
```
Client ID
your-truid-client-ID

Client Secret
your-truid-client-secret
```
4. On installation complete, generate your `tru.json` config file by running the command below on your command prompt `windows` users or terminal for `mac` users.

```bash
tru projects:create truid-challenge
```

5. Clone the `truid-challenge` repository by running the command below:
```bash
git clone https://github.com/emmanueletukudo/truid-challenge.git
```
6. Step 6 relies on the previous step to avoid errors ensure to generate your `tru.json` file before you continue. Run `npm run start` to start the application.

## Usage

```bash
cd truid-callenge && npm run dev

[nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node src/index.js`

Applocation is listening at 5000
[1] Browserslist: caniuse-lite is outdated. Please run:
[1] npx browserslist@latest --update-db
[1] ready - started server on http://localhost:3000
[1] event - compiled successfully
```
You can hold the command and click on the `http://localhost:3000` to launch the application. You should have a web page similar to the one below.

## Testing
The test files for the frontend can be found in `test` folder in the client directory. Similarly, the test files for endpoints can be found in `test` folder in the root directory of the application.

1. To run the test for the frontend `cd` into the client directory and run the command below:

```bash
npm run test
```
2. To run the test for the backend run the command below:
```bash
npm run test
```
## Deployment
To prepare the application for deployment, follow the steps below:
1. `CD` into the client folder and run the `npm run build` your the terminal for `mac` users and command prompt for `windows` users.
2. Chose a loud hosting server to deploy your app in my case `Heruku`. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)