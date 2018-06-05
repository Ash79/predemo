'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Client.json';
var bodyParam = 'clients/v1'; 
     


exports.getClient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ClientData = [];
    if(ClientFD) {
        ClientData = JSON.parse(ClientFD);
    }
    cb(null, ClientData);
}
exports.getClientById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var id = args['id'] ? args['id'].value: null;
    var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ClientData = [];
    if(ClientFD) {
        ClientData = JSON.parse(ClientFD);
    }
    var myRecord;
    for(var i=0;i<ClientData.length;i++) {
        if(ClientData[i]['id'] == id) {
             myRecord = ClientData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putClient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ClientData = [];
   if(ClientFD) {
       ClientData = JSON.parse(ClientFD);
   }
   var myRecord;
   for(var i=0;i<ClientData.length;i++) {
       if(ClientData[i]['id'] == id) {
            ClientData[i] = Object.assign(ClientData[i],body);
            myRecord = ClientData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ClientData));
   cb(null, myRecord);
}


exports.postClient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var ClientData = [];
    if(ClientFD) {
        ClientData = JSON.parse(ClientFD);
    }
    ClientData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ClientData));
    cb(null, body);
}


exports.patchClient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ClientData = [];
   if(ClientFD) {
       ClientData = JSON.parse(ClientFD);
   }
   var myRecord;
   for(var i=0;i<ClientData.length;i++) {
       if(ClientData[i]['id'] == id) {
            ClientData[i] = Object.assign(ClientData[i],body);
            myRecord = ClientData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ClientData));
   cb(null, myRecord);
}



exports.deleteClient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   //var body = args[bodyParam].value;
   var ClientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var ClientData = [];
   if(ClientFD) {
       ClientData = JSON.parse(ClientFD);
   }
   var found = false;
   for(var i=0;i<ClientData.length;i++) {
       if(ClientData[i]['id'] == id) {
            ClientData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(ClientData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


