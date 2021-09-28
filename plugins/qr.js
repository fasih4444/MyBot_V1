/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/
/*
const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('qr');
const MLang = Language.getString('messages');

if (Config.WORKTYPE == 'private') {
    DrkBox.addCommand({pattern: 'qr ?(.*)', fromMe: true, desc: Lang.DESC}, (async (message, match) => {
       if (match[1] === '') return await message.sendMessage("Lang.need");
       var qrimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
       await message.sendMessage(Buffer.from(qrimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`, quoted: message.data, thumbnail: ""})
    }));
}
else if (Config.WORKTYPE == 'public') {}
*/
