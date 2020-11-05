export const REDDIS = {
	host: process.env.REDDIS_HOST ? process.env.REDDIS_HOST : "192.168.99.104",
	//@ts-ignore
	port: process.env.REDDIS_PORT ? parseInt(process.env.REDDIS_PORT) : 6379,
	password: process.env.REDDIS_PASSWORD ?  process.env.REDDIS_PASSWORD : null
};

export const MONGODB = {
	connectionString: process.env.MONGODB_CONNECTION_STRING ? process.env.MONGODB_CONNECTION_STRING : null,
	host: process.env.MONGODB_HOST ? process.env.MONGODB_HOST : '192.168.99.104',
	port: process.env.MONGODB_PORT ? process.env.MONGODB_PORT : 27000,
	username: process.env.MONGODB_USERNAME ? process.env.MONGODB_USERNAME : 'remote',
	password: process.env.MONGODB_PASSWORD ? process.env.MONGODB_PASSWORD : 'password',
	database: process.env.MONGODB_DATABASE ? process.env.MONGODB_DATABASE : 'crusher'
}