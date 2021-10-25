const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], });
const txt = require('./txt.json');

const prefix = '-';

client.on('ready', () => {
    console.log('online');
    client.user.setActivity('Your Adventures', { type: "WATCHING" });
});

client.on('guildMemberAdd', guildMember => {
    guildMember.guild.channels.cache.get('882422959514472468').send(`Welcome <@${guildMember.user.id}> to our project! To start your adventure go to the general channel and send "-start". To start over your adventure text -reset. If you need any help dm Ryan. Enjoy! \nPS: theres an ending if you can reach it.`);
});

let i = 1;
let talkErk = false;

client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.author == client.user && user != client.user) {

        if (i == 4002 || i == 5002) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                i = 1;
            });
        }

        // choices
        else if (i == 11) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('✅');
                message.react('❎');
                i++;
            });
        } else if (i == 13) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('💰');
                message.react('🍺');
                i++;
            });
        } else if (i == 1504) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('1️⃣');
                message.react('2️⃣');
                message.react('🍻');
                i++;
            });
        } else if (i == 3002) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('✔');
                message.react('❌');
                message.react('➡');
                i++;
            });
        } else if (i == 1001) {
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('🏹');
                message.react('🔨');
                message.react('🐟');
                i++;
            });
        }

        //checkpoints
        else if (i == 406 || i == 501) {
            i = 12;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (i == 2005 || i == 2501) {
            i = 3000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        }

        //choice actions
        else if (reaction.emoji.name === '✅') {
            i = 400;
            talkErk = true;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '❎') {
            i = 500;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '💰') {
            i = 1000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '🍺') {
            i = 1500;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '✔') {
            i = 4000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '❌') {
            i = 5000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '1️⃣') {
            if (talkErk == true) {
                i = 2500;
            } else {
                i = 2000;
            }
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '2️⃣') {
            i = 10000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '🍻') {
            i = 11000;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '🏹') {
            i = 1050;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '🔨') {
            i = 1100;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } else if (reaction.emoji.name === '🐟') {
            i = 1150;
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
            });
        } 
        
        else if (reaction.emoji.name === '➡') {
            if (i == 1501 && talkErk == true) {
                i = i * 10;
            } else if (i == 3003 || i == 11005 || i == 10008) {
                i = 1501;
            } else if (i == 1057 || i == 1104 || i == 1155) {
                i = 1000
            }
            reaction.message.edit(txt[i]).then(message => {
                message.reactions.removeAll();
                message.react('➡');
                i++;
                if (i == 15011) {
                    i = 1502;
                }
            });
        }
    }
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'start') {
        let startChannel = client.channels.cache.get('882491136202113056');

        startChannel.send('New Netherlands, 1664').then(message => {
            message.react('➡');
        });
    } else if (command === 'reset') {
        message.channel.send('The story has been reset!');
        i = 1;
        talkErk = false;
    } else if (command === 'clear') {
        message.channel.bulkDelete(100);
    }
});

client.login('ODgyMDM4OTY2ODM5Mjc5NjM2.YS1kzQ.iFxucYIDVFolo2Tpb9FdejZhtuc');