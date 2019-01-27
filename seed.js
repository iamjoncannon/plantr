
let { db, Gardener, Vegetable, Plot } = require('./models.js')

// create a few vegetables - 4 vegetables - 

const broccoli = new Vegetable ({
	name: "broccoli",
	color: "green",
	planted_on: Date
})

const kale = new Vegetable ({
	name: "kale",
	color: "green",
	planted_on: Date
})

console.log(kale.name)

// create a few gardeners - 3 gardeners

// create more plots than gardeners - 2 plots for each gardener

// link the plots to gardeners

// link the vegetables to the plots

// const page = new Page({
// 		title: req.body.title,
// 		slug: slug,
// 		content: req.body.pageContent,
// 		status: 'open',
// })


// page.setAuthor(instance)

// await page.save();


db.sync(
	{force: true}

).then(() =>{
	console.log(db)
	db.close()
})



