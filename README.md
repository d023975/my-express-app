npx express-generator my-express-app --no-view

npm install --save-dev npm-run-all  
npm install --save-dev @babel/core @babel/cli @babel/preset-env nodemon rimraf

docker run --name mongodb -e 'MONGO_INITDB_ROOT_USERNAME=test' -e 'MONGO_INITDB_ROOT_PASSWORD=' -p 27017:27017  -d  mongo



https://www.npmjs.com/package/dotenv
* see recommendations
  * https://www.npmjs.com/package/dotenv#should-i-commit-my-env-file