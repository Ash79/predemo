'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/clients/v1';
const samplePath = '/../../sampleData/v1/client.json';
var clientData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var clientFD = fs.readFileSync(__dirname + samplePath);
    clientData = [];
    if(clientFD) {
      clientData = JSON.parse(clientFD);
    }
  });


                        
  // GET - List all records
  it('GET List of clients', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(clientData.length);
      });
  });
    // GET - List existing record by id
  it('GET Existing client by id', function () {
    var myRecord = clientData[0];
    var uniqueParam = myRecord['id'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(clientData[0]);
      });
  });

  // GET - List non-existing record by id
  it('GET Non-Existing client by id', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing client', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+clientData[0]['id'])
      .send(clientData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(clientData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing client', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(clientData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New client', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(clientData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(clientData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing client', function () {
    var updatedSting = JSON.stringify(clientData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['id'];
    delete updatedRecord['id'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(clientData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing client', function () {
    var recordToDelete = clientData[0];
    var uniqueParam = recordToDelete['id'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing client', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});