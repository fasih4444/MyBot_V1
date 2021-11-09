/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const HeartBot = require('drkbot-npm');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');
const MLang = Language.getString('messages');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'ss ?(.*)', fromMe: wk, desc: Lang.desc_ss}, (async (message, match) => {
  if (match[1] === '') return await message.sendMessage(Lang.need_ss);
  var bufferdata = ''
  try {
    var enc = await HeartBot.shot(match[1])
    bufferdata = enc
  } catch {
    return await message.client.sendMessage(message.jid,'🤖 Parece que hay un Error!', MessageType.text);
  }
  await message.sendMessage(Buffer.from(bufferdata), MessageType.image, {mimetype: Mimetype.png, caption: `${MLang.by}`})
}));
