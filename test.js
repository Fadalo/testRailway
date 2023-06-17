var expect    = require("chai").expect;

// beforeEach(async function () {
//     await db.users.clear();
//     await db.users.save([{"name": "test", "type": "1", "emailId": "test@gmail.com", "password": "aaa"},{"name": "test", "type": "2", "emailId": "test@gmail.com", "password": "aaa"}]);
//   });
  
  describe('#find()', function () {
    it('responds with matching records', async function () {
      const users = await db.users.find({type: '1'});
      users.should.have.length(3);
    });
  });