/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { getBuffer } = require('../whatsasena/');
const Config = require('../config')

const HeartBot = require('./datos')
const request = require('request')
const fs = require('fs')
const axios = require('axios')

const Language = require('../language');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({pattern: 'greenhorror ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", match[1])
    var buffer_data = await axios.get(img, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));

DrkBox.addCommand({pattern: 'thunder ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await HeartBot.textpro("https://textpro.me/thunder-text-effect-online-881.html", match[1])
    var buffer_data = await getBuffer(img)
    await message.sendMessage(buffer_data, MessageType.image, { mimetype: Mimetype.png, caption: `${MLang.by}` })
}));
