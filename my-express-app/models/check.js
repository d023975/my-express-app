var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CheckSchema = new Schema({
	check_name: { type: String, required: true, max: 100 },
	check_type: { type: String, required: true, max: 100 },
	check_result: { type: String, required: true, max: 100 },
	check_ative: Boolean,
	date_of_check: { type: Date }
});

CheckSchema.virtual('name').get(function() {
	var fullCheckName = '';
	if (this.check_name && this.check_type) {
		fullCheckName = `${this.check_name} : ${this.check_type}`;
	}
	return fullCheckName;
});

//Export model
module.exports = mongoose.model('Check', CheckSchema);
