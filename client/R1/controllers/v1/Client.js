'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var ClientImplementation = require('../../../implementation/ClientService.js');
    
var ClientData;

        


    module.exports.getClient = function getClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.getClient(args, (error, data) => {
        ClientData = data;
        if (Object.keys(ClientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                                                                console.log('Start Pagination......');
            paginationService.getPages(args.pageNumber.value, args.pageSize.value, ClientData).then(function(result) {
                res.writeHead(200, {
                    "Total": result.total,
                    "Per-Page": result.pageSize,
                    "Total-Pages": result.totalPages
                });
                res.end(JSON.stringify(result.pagedData));
            }).catch(function(error) {
                res.end(JSON.stringify(error));
            });
                                                    } else {
            res.end();
        }
    });
};
module.exports.getClientById = function getClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.getClientById(args, (error, data) => {
        ClientData = data;
        if (ClientData && Object.keys(ClientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(ClientData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putClient = function putClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.putClient(args, (error, data) => {
        ClientData = data;
        if (ClientData && Object.keys(ClientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ClientData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postClient = function postClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.postClient(args, (error, data) => {
        ClientData = data;
        if (ClientData && Object.keys(ClientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ClientData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchClient = function patchClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.patchClient(args, (error, data) => {
        ClientData = data;
        if (ClientData && Object.keys(ClientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(ClientData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteClient = function deleteClient (req, res, next) {
    var args = req.swagger.params;
    ClientImplementation.deleteClient(args, (error, data) => {
        ClientData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
