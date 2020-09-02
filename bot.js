const Commando = require('discord.js-commando');

const client = new Commando.Client({
    owner: 'sahipid'
});

const path = require('path');

client.registry
    .registerGroups([
        ['genel', 'Genel komutlar'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
    const sqlite = require('sqlite');

client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);


client.login('token');
