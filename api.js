var https = require('https');
var apiurl = "api.npmjs.org";
var registryurl = 'registry.npmjs.org';

exports.getdetails=function (packagename,callback){
return https.get({
	host: registryurl,
	path:'/'+packagename
},function(response){
    var body ='';
	response.on('data',function(d){
	  body +=d;
	});
response.on('end',function(){

   var parse = JSON.parse(body);
   //console.log(parse);
   callback(parse);
});
});
}



exports.getstat=function (packagename,start,end,callback){
return https.get({
	host: apiurl,
	path:'/downloads/point/'+start+':'+end+'/'+packagename
},function(response){
    var body ='';
	response.on('data',function(d){
	  body +=d;
	});
response.on('end',function(){

   var parse = JSON.parse(body);
   //console.log(parse);
   callback(parse);
});
});
}