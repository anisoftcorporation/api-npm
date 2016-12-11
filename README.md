# api-npm
This module will do query NPM registry to fetch any NPM module details including statistics.

To use the module first simply install the module using the below command.

**npm install api-npm**

To add it to your package.json use below command while installing

**npm install api-npm --s**

**How to use api-npm**

The current version of the module has only two functions to use

1. getstat (modulename,startdate,enddate,callback)

2. getdetails (modulename,callback)
```
  var api = require('api-npm');
  api.getstat('express','2016-11-12','2016-12-09',test);
  //api.getdetails('simple-html-template',test);

function test(data)
{
       /** You will have your own code to what to do with return json **/
	console.log(data);
}
```

The above code queries npm regiistry using npm API to get download counts forthe mentioned period (start date and end date) for the mentioned package.

The allowed date format is only the one shown in above and that is "YYYY-MM-DD".

NPM api currently doesn't allow querying download count for more than 1 month date range. hence this module also is limited for a maximum date range of 1 Month. In case you need for more than 1 month you have to call multiple times with different time range.

The output of the above script will be

```
{ downloads: 7251486,
  start: '2016-11-12',
  end: '2016-12-09',
  package: 'express' }
```
In case Module name or date range is invalid then we will get an additional JSON attribute named "error" for example if we change the code to this 
```
api.getstat('express1','2016-11-12','2016-12-09',test);

```

Then the output will be like this

```
{ error: 'no stats for this package for this period (0002)' }
```

Now lets have a look at another function to see how can we get detaails of any Module from NPM registry
```
var api = require('api-npm');
 // api.getstat('express1','2016-11-12','2016-12-09',test);
  api.getdetails('simple-html-template',test);

function test(data)
{
        /** You will have your own code to what to do with return json **/
	console.log(data);
}
```
The output of the above code will be below


```
{ _id: 'simple-html-template',
  _rev: '2-87d91b144499201df505812eeb57d9e3',
  name: 'simple-html-template',
  description: 'This is a very simple HTML template Engine for Node JS. Where yo
u can choose what will be openning tag and closing tag',
  'dist-tags': { latest: '1.0.1' },
  versions:
   { '1.0.0':
      { name: 'simple-html-template',
        version: '1.0.0',
        description: 'This is a very simple HTML template Engine for Node JS. Wh
ere you can choose what will be openning tag and closing tag',
        main: 'engine.js',
        scripts: [Object],
        repository: [Object],
        keywords: [Object],
        author: [Object],
        license: 'ISC',
        bugs: [Object],
        homepage: 'https://github.com/anisoftcorporation/simple-html-template#re
adme',
        gitHead: '3b7fd0015ff9b68d94f9e51773e3d7cae0499f36',
        _id: 'simple-html-template@1.0.0',
        _shasum: '152b9e2451f902b86e286792cde9928b9b125586',
        _from: '.',
        _npmVersion: '2.14.7',
        _nodeVersion: '4.2.2',
        _npmUser: [Object],
        dist: [Object],
        maintainers: [Object],
        _npmOperationalInternal: [Object],
        directories: {} },
     '1.0.1':
      { name: 'simple-html-template',
        version: '1.0.1',
        description: 'This is a very simple HTML template Engine for Node JS. Wh
ere you can choose what will be openning tag and closing tag',
        main: 'engine.js',
        scripts: [Object],
        repository: [Object],
        keywords: [Object],
        author: [Object],
        license: 'ISC',
        bugs: [Object],
        homepage: 'https://github.com/anisoftcorporation/simple-html-template#re
adme',
        gitHead: '6b831fd7d960dc6c591cf9f320ff129b4ed1d0e7',
        _id: 'simple-html-template@1.0.1',
        _shasum: 'c7ae0b43e5b5620ba17351aa7315680b2612aaab',
        _from: '.',
        _npmVersion: '2.14.7',
        _nodeVersion: '4.2.2',
        _npmUser: [Object],
        dist: [Object],
        maintainers: [Object],
        _npmOperationalInternal: [Object],
        directories: {} } },
  readme: '# simple-html-template\r\nThis is a very simple HTML template Engine
for Node JS. Where you can choose what will be openning tag and closing tag\r\n\
r\nTo install , execute the command \r\n**npm install simple-html-template**\r\n
\r\nTo have it updated in dependencies section in your package.json too execute
the below command for installing the module\r\n**npm install simple-html-templat
e --save**\r\n\r\nTo use this Template engine, in your Nodejs code\r\n\r\nBelow
is Node code\r\n```\r\n//***Node JS code starts **/////////\r\nvar express = req
uire(\'express\')\r\nvar templ = require(\'simple-html-template\'); /////Require
 the Module\r\n\r\n\r\nvar app = express()\r\n\r\n\r\napp.engine(\'html\', templ
) /////Telling my App that files with .html extension will be rendered with this
 template engine. You can put anything you want\r\napp.set(\'views\', \'views\')
 // specify the views directory\r\napp.set(\'view engine\', \'html\') // registe
r the template engine\r\napp.set(\'open_tag\',\'<?\'); ////Optional , you can sp
ecify open_tag , default <?\r\napp.set(\'close_tag\',\'/?>\'); ///Optional , you
 can specify close_tag default />\r\n\r\napp.get(\'/\', function (req, res) {\r\
n  `res.render(\'index\', { title: \'Hey\', message1: \'Hello there!\',message2:
 \'how are you\' }) /// index.html will be our template file , and we are passin
g parameters that will be displayed \r\n\t  \r\n})\r\n\r\napp.listen(1947, funct
ion () {\r\n  console.log(\'Example app listening on port 1947!\')\r\n})\r\n```\
r\n///NodeJS code ended///////////////////////////////\r\n\r\nBelow is the ccont
ent of index.html which is inside views folder\r\n```\r\n<title>\r\n<?title/?>\r
\n</title>\r\n<body>\r\n<h1><?message1/?></h1>\r\n<p><?message2/?></p><h1><?mess
age1/?></h1>\r\n</body>\r\n```\r\n\r\nIf you want to use other tags rather than
<? and /? you can specify the same in app settings ass below\r\nI am planning to
 use # as open tag and /# as close tag, so first i will be changing the below se
ttings first\r\n```\r\napp.set(\'open_tag\',\'#\');\r\napp.set(\'close_tag\',\'/
#\');\r\n```\r\n\r\nThen i will modify my same index.html template file accordin
gly\r\n```\r\n<title>\r\n#title/#\r\n</title>\r\n<body>\r\n<h1>#message1/#</h1>\
r\n<p>#message2/#</p><h1>#message1/#</h1>\r\n</body>\r\n```\r\n',
  maintainers:
   [ { name: 'anisoftcorporation',
       email: 'anirbanbhattacharya1234@yahoo.co.in' } ],
  time:
   { modified: '2016-11-17T08:48:16.967Z',
     created: '2016-11-17T07:56:55.161Z',
     '1.0.0': '2016-11-17T07:56:55.161Z',
     '1.0.1': '2016-11-17T08:48:16.967Z' },
  homepage: 'https://github.com/anisoftcorporation/simple-html-template#readme',

  keywords:
   [ 'nodejs',
     'nnodejs',
     'template',
     'nodejs',
     'html',
     'nodejs',
     'html',
     'engine',
     'express',
     'template' ],
  repository:
   { type: 'git',
     url: 'git+https://github.com/anisoftcorporation/simple-html-template.git' }
,
  author: { name: 'Anirban Bhattacharya' },
  bugs: { url: 'https://github.com/anisoftcorporation/simple-html-template/issue
s' },
  license: 'ISC',
  readmeFilename: 'README.md',
  _attachments: {} }
  ```
  
  
