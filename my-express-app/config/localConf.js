const VCAP_SERVICES = {
	mongodb: [
		{
			credentials: {
				dbname: 'test',
				password: '',
				port: '27017',
				replicaset: '',
				uri: 'mongodb://localhost:27017/test',
				username: ''
			},
			label: 'mongodb',
			name: 'mongodb-jupiter',
			plan: 'v3.0-dedicated-xsmall',
			provider: null,
			syslog_drain_url: null,
			tags: [ 'mongodb', 'document' ],
			volume_mounts: []
		}
	]
};

var config = {
	vcap_services: VCAP_SERVICES
};

module.exports = config;
