const express = require('express');
const router = express.Router();

Assets = require('../models/assets');

//Get all Assets
router.get('/', (req, res) => {
	Assets.getAssets((err, assets) => {
		if(err) {
		console.log(err);
		res.send(err);
		}
	res.json(assets);
	});
});


router.get('/:id', (req, res) => {
	Assets.getAssetsById(req.params.id, (err, asset) => {
	if (err) {
	console.log(err);
	res.send(err);
	}
	res.json(asset);
	});
});

router.post('/', (req, res) => {
	const asset = req.body;
       Assets.addAssets(asset, (err, assets) => {
                if(err) {
               console.log(err);
                res.send(err);
                }
        //res.json(assets);
				return res.redirect('http://localhost:3001/app/view.html');
       });
});

module.exports = router;
