import path from 'path';

// Para executar todo os padrões da pasta database
module.exports = {
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
	},
	migrations: {
		directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
	},
	seeds: {
		directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
	},
	useNullAsDefault: true,
};