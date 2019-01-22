
let db = require('./models.js')


db.sync(
	{force: true}

).then(() =>{
	
	console.log(db)

	db.close()

})

