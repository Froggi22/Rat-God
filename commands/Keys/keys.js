module.exports = {
	description: 'Key Guides',
	options: [
		{
			name: 'pawn-bishop-king',
			description: 'Keys in Both pawn and bishop + king buildings',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'Key',
					description: 'What kind of key',
					type: 'STRING',
					choices: 'a'
				}
			]
		},
		{
			name: 'other',
			description: 'Other locations',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'Key',
					description: 'What kind of key',
					type: 'STRING',
					choices: 'a'
				}
			]
		}
	]
};
