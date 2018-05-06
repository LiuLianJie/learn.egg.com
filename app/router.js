module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/add', controller.home.add);
	router.get('/fetch', controller.home.fetch);
	router.get('/fetchDepart', controller.home.fetchDepart);
	router.get('/update', controller.home.update);
	router.get('/delete', controller.home.delete);
	router.get('/fetchSqlite', controller.home.fetchSqlite);
}