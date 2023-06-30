const { Favorite } = require('../DB_connection');

module.exports = async (req, res) => {
	try {
		const { id, name, image, species, gender } = req.body;
		console.log(name);
		console.log(image);
		console.log(species);
		console.log(gender);
		if (!id || !name || !image || !species || !gender)
			return res.status(401).send('Faltan datos');

		await Favorite.findOrCreate({
			where: { id, name, image, species, gender },
		});
		const allFav = await Favorite.findAll();
		return res.status(200).json(allFav);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};
