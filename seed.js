
let db = require('./models.js')





db.sync({force: true}).then(

	db.close()

)

