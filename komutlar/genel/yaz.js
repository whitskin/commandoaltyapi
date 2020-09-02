const commando = require('discord.js-commando');
const Discord = require('discord.js');
const figlet = require('figlet');

module.exports = class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'yaz',
            aliases: ['yazdır', 'konus'],
            group: 'eglence',
            memberName: 'yaz',
            description: 'Bota istediğiniz yazdırır.',
            guildOnly: true,
            throttling: {
                 usages: 1,
                 duration: 10
             },
                     args: [
                {
                    key: 'yaz',
                    prompt: 'Ne yazıyım?',
                    type: 'string'
                },
            ]
        });
    }

  
  async run(msg, args) {
  const { yaz} = args;
  msg.delete()
  msg.channel.send(yaz)
    }
};
