process.env.NODE_ENV = 'test';


const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');

const app = require('../server/server.js');


chai.use(chaiHttp);
const { expect } = chai;

const server = http.createServer(app);

describe('server', () => {
  // TODO: 100% coverage
  before((done) => { // Before each test we empty the database
    server.listen(3001, done);
  });

  after((done) => {
    server.close(done);
  });

  describe('api router', () => {
    it('/test should succeed', (done) => {
      chai.request(app)
        .get('/api/test')
        .end((err, res) => {
          expect(res).to.be.json;
          expect(res.body.result).to.equal('success');
          done();
        });
    });
  });

  describe('index router', () => {
    it('should serve index.html at /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.be.html;
          // TODO: check if it's the correct html file
          done();
        });
    });

    it('should serve css', (done) => {
      chai.request(app)
        .get('/static/css/style.css')
        .end((err, res) => {
          expect(res.type).to.equal('text/css');
          done();
        });
    });
  });
});

// TODO: clientside tests (another file)
