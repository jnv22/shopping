var express = require('express')
var app = express()
var chai = require('chai')
var assert = chai.assert;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('server tests', function() {
  var server;
  var serverRoot = 'Hello World'

  before(function() {
    app.get('/', function (req, res) {
      res.send(serverRoot);
    });
    server = app.listen(3000);
  })

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  it('should return valid 200', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        assert.equal(res.statusCode, 200)
        done();
      });
  })

  it('should return specified message', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        assert.equal(res.text, serverRoot)
        done();
      });
  })
})
