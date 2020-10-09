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
    .registerCommandsIn(path.join(__dirname, 'komutlar'));
    
    const sqlite = require('sqlite');

client.setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);


client.login('NzAwNjA4NzAyNDI3OTU1Mjcw.Xplasw.e3U7seibaSc-D23NLFDjKIlgjFg');
