/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBot = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('tagall');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBot.addCommand({ pattern: 'scan ?(.*)', fromMe: wk, desc: Lang.SCAN}, (async (message, match) => {
    if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text)
    var num  = match[1]
    var id = `${num}@s.whatsapp.net`

    var exists = await message.client.isOnWhatsApp(id)
    if (exists) {
      await message.client.sendMessage(message.jid, Lang.SUC.format(num, num), MessageType.text)
    } else {
      await message.client.sendMessage(message.jid, Lang.UNSUC.format(num), MessageType.text)
    }
}));
