var api = require('./api.js');
var dem = api.getstat('express1','2016-11-12','2016-12-09',test);
  api.getdetails('simple-html-template',test);

function test(data)
{

	console.log(data);
}