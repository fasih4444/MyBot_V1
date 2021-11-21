/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran

Special Thanks:
@Unique_hunter for Helps
*/

const DrkBox = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'wallpaper', fromMe: wk, desc: Lang.WP}, (async (message, match) => {
        var r_text = new Array ();
        r_text[0] = "";
        var i = Math.floor(1*Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Hecho por *DrkBot*'})
}));

DrkBot.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
        if (!match[1]) return await message.sendMessage(infoMessage(Lang.NEED_WORDS));
        dbot.pinterest(match[1]).then(async (result) => {
            await message.client.sendMessage(message.jid,Lang.NEW_IMG,match[1],MessageType.text);

            var a = Math.floor(result.length*Math.random());
    	    var b = Math.floor(result.length*Math.random());
    	    var c = Math.floor(result.length*Math.random());
    	    var d = Math.floor(result.length*Math.random());
    	    var e = Math.floor(result.length*Math.random());

            var respoimage = await axios.get(`${a}`, { responseType: 'arraybuffer' })
            var respoimage = await axios.get(`${b}`, { responseType: 'arraybuffer' })
            var respoimage = await axios.get(`${c}`, { responseType: 'arraybuffer' })
            var respoimage = await axios.get(`${d}`, { responseType: 'arraybuffer' })
            var respoimage = await axios.get(`${e}`, { responseType: 'arraybuffer' })

await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image)
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image)
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image)
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image)
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image)
            
        });
    }));
