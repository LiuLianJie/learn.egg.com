const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index(){
		const ctx = this.ctx;
		this.ctx.body = 'Hello World';
	}

	async add(){
		const res = await this.ctx.service.user.add();
		if(res){
			this.ctx.body = {'status':1,'message':'ok'};
		}
	}

	async fetch(){
		const res = await this.ctx.service.user.fetch();

		if(res){
			this.ctx.body = res;
		}
	}

	async fetchDepart(){
		const res = await this.ctx.service.user.fetchByCondition();
		if(res){
			this.ctx.body = res;
		}
	}

	async update(){
		const res = await this.ctx.service.user.update();
		if(res){
			this.ctx.body = {'status':1, 'message':'ok'};
		}
	}

	async delete(){
		const res = await this.ctx.service.user.delete();
	}

	async fetchSqlite(){
		const res = await this.ctx.service.user.fetchSqlite();
		console.log("fetchSqlite: ", res);
		this.ctx.body = res;
	}
}

module.exports = HomeController;