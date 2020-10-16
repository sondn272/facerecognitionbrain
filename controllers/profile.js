const handleProfileGet = (db) => (req, res) =>  {
	const { id } = req.params;
	let found = false
	db.select('*').from('users').where({id}).then(user => {
		if (user.length) {
			res.json(user[0])
		}
		res.status(400).json('Not found')
	})
	.catch(err => err.status(400).json('error getting user'))
}

module.exports = { handleProfileGet }