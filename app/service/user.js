const Service = require('egg').Service;

class UserService extends Service {
	async find(uid){
		const user = await this.app.mysql.get('user',{id:uid});
		return { user };
	}

	async add(username){
		const result = await this.app.mysql.insert('user',{username:username});
		console.log(result);	
		return result.affectedRows === 1;
	}

	async fetch(){
		const result = await this.app.mysql.select('user');
		return result;
	}

	async fetchByCondition(){
		const result = await this.app.mysql.select('user',{where:{username:'qqqqqq'}});
		return result
	}

	async update(){
		const row = {
			id:4,
			username:'mimi'
		}
		const result = await this.app.mysql.update('user',row);
		return result.affectedRows === 1;
	}

	async delete(id){
		const result = await this.app.mysql.delete('user',{id:id});
		console.log(result);
		return result.affectedRows === 1;
	}

	async fetchSqlite(){
		const res = await this.app.db.all("select * from sc_user");
		return res;
	}
}

module.exports = UserService;