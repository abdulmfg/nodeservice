var push = require('git-push');
try{

push('./first-api', 'https://github.com/abdulmfg/nodeservice', function() {
  console.log('Done!');
});
}
catch(e){
console.log(e);
}