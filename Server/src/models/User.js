const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'User',
		{
			// id: {
			// 	type: DataTypes.UUID, //sadasw4324-123dsaer3-asda123
			// 	defaultValue: DataTypes.UUIDV4,
			// 	primaryKey: true,
			// 	allowNull: false
			// },
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				isEmail: true,
			},
			password: {
				type: DataTypes.STRING(64),
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
