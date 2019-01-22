const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging:false
});

const Gardener = db.define('gardener', {

	name: {
		type: Sequelize.STRING, allowNull: false
	},
	age: {
		type: Sequelize.STRING, allowNull: false
	}
});1

const Plot = db.define('plot', {

	size: {
		type: Sequelize.INTEGER, allowNull: false
	},
	shaded: {
		type: Sequelize.BOOLEAN, allowNull: false
	},
});

const Vegetable = db.define('vegetable', {

	name: {
		type: Sequelize.STRING, allowNull: false
	},
	color: {
		type: Sequelize.STRING, allowNull: false
	},
	planted_on: {
		type: Sequelize.DATE, allowNull: false
	},
})


Plot.belongsTo(Gardener, { as: 'property'});

Gardener.hasMany(Plot)

Vegetable.belongsToMany(Plot, {through: 'harvest'})

Vegetable.belongsToMany(Gardener, {through: 'crop'})


module.exports =  db, Gardener, Vegetable ;
