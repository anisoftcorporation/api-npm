# npm-api
This module will do query NPM registry to fetch any NPM module details including statistics.

To use the module first simply install the module using the below command.

**npm install npm-api**

To add it to your package.json use below command while installing

**npm install npm-api --s**

**How to use npm-api**

The current version of the module has only two functions to use

1. getstat (modulename,startdate,enddate,callback)

2. getdetails (modulename,callback)
```
  var api = require('npm-api');
  var dem = api.getstat('express','2016-11-12','2016-12-09',test);
  api.getdetails('simple-html-template',test);

function test(data)
{

	console.log(data);
}
```

The above code
