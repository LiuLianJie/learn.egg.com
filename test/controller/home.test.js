const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test controller/home.test.js', ()=>{
	
	describe('get /', ()=>{
		it('should status is 200 and get the body', () => {
			return app.httpRequest()
				.get('/')
				.expect(200)
				.expect('Hello World');
		})
	});

	describe('get /fetchSqlite', () => {
		it('should get all user data', () => {
			const data = [ { id: 1, username: '1', password: '2', reate_time: '111' },
			  { id: 3,
			    username: 'update',
			    password: 'lj33',
			    reate_time: '1525529331642.0' } ];

			return app.httpRequest()
				.get('/fetchSqlite')
				.expect(200)
				.expect(data)
		})
	});
});