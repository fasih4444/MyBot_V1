/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const axios = require('axios');
const Config = require('../config');
const dbot = require('dbot-api');
const gis = require('g-i-s');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('wallpaper');
const iLang = Language.getString('scrapers');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'img ?(.*)', fromMe: wk, desc: iLang.IMG_DESC}, (async (message, match) => { 
        if (!match[1]) return await message.sendMessage(infoMessage(iLang.NEED_WORDS));
     // await message.sendMessage(Lang.NEW_IMG,match[1],MessageType.text);

     res = gis(`${match[1]}`, google)
     async function google(error, result){
        if (error){
	   await message.sendMessage('🤖 Parece que tenemos un error.', MessageType.text);
        } else {
           var gugWp = result
           var randomWp =  gugWp[Math.floor(Math.random() * gugWp.length)].url
           var image_a = await axios.get(`${randomWp}`, { responseType: 'arraybuffer' })
           await message.client.sendMessage(message.jid, Buffer.from(image_a.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
       }
     }
}));

DrkBox.addCommand({pattern: 'wallpaper ?(.*)', fromMe: wk, desc: iLang.IMG_DESC}, (async (message, match) => { 
        if (!match[1]) return await message.sendMessage(infoMessage(iLang.NEED_WORDS));

     res = gis(`fondos de pantalla 4k ${match[1]}`, google)
     async function google(error, result){
        if (error){
	   await message.sendMessage('🤖 Parece que tenemos un error.', MessageType.text);
        } else {
           var gugWp = result
           var randomWp =  gugWp[Math.floor(Math.random() * gugWp.length)].url
           var image_a = await axios.get(`${randomWp}`, { responseType: 'arraybuffer' })
           await message.client.sendMessage(message.jid, Buffer.from(image_a.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
       }
     }
}));
