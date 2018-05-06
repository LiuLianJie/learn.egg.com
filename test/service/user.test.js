const { app, mock, assert } = require('egg-mock/bootstrap');

let id = 0;
describe('get()', () => {
	// using generator function because of asynchronous invoking
  it('should add work well', async () => {
    // create ctx
    const ctx = app.mockContext();
    // get service.user via ctx
    const user = await ctx.service.user.add('lianjieliu');
    assert(user);
  	
  	const users = await ctx.service.user.fetch();
  	assert(users[users.length-1].username === 'lianjieliu');
  	id = users[users.length-1].id;
  });

  it('should delete user', async () => {
  	const ctx = app.mockContext();
  	const result = await ctx.service.user.delete(id);
  	assert(result === true);
  });

  it('should fetchSqlite work well', async() => {
  	const ctx = app.mockContext();
  	const result = await ctx.service.user.fetchSqlite();
  	console.log("fetchSqlite :",result);
  	assert(result);
  	assert(result.length > 0);
  });
})