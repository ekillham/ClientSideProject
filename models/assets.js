const mongoose = require('mongoose');

const assetsSchema = mongoose.Schema({
				name: {
						type: String
				},
        os: {
                type: String
        },
        cpu: {
                type: String
        },
        ram: {
                type: String
        },
        type: {
                type: String
        },
        rack: {
                type: String
        }

},
			{ versionKey: false // You should be aware of the outcome after set to false
});

const Assets = module.exports = mongoose.model('Assets', assetsSchema);

//Get all Assets
module.exports.getAssets = (callback, limit) => {
	Assets.find(callback).limit(limit).sort([['Name', 'ascending']]);
}
//Get Single Asset
module.exports.getAssetsById = (id, callback) => {
        Assets.findById(id, callback);
}

//Add Asset
module.exports.addAssets = (assets, callback) => {
	const add = {
		name: assets.name,
		os: assets.os,
		cpu: assets.cpu,
		ram: assets.ram,
		type: assets.type,
		rack: assets.rack
	}
		Assets.create(add, callback);
}

//Remove Asset
module.exports.removeAssets = (id, callback) => {
	const query = {_id: id};
	Assets.remove(query, callback);
}
