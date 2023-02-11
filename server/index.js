const express = require('express');
const app = express();
const cros = require('cors')
const mongoose = require('mongoose');
const User = require('./models/user.model');

mongoose.connect('mongodb://localhost:27017/auth')

app.use(cros())
app.use(express.json())

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.listen(1337,() =>{
    console.log('Server Started')
})
