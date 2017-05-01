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

// Delete Asset
router.delete('app/assets/:id', (req, res) => {
const id = req.params.id;
	Assets.removeAssets(id, (err, assets) => {
	if(err){
			res.send(err);
		}
		res.json(assets);
  	return res.redirect('http://localhost:3001/app/view.html');
});
});
//router.delete('/app/assets/:id', (req, res, next) => {
//  db.assets.remove({_id: mongojs.ObjectId(req.params.id)}, (err, assets) => {
//    if(err){
//      res.send(err);
//    }
//    console.log('Removing Product...');
//    res.json(assets);
//  });
//});

module.exports = router;
