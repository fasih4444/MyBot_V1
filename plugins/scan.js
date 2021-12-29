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
      var stst = await message.client.getStatus(id)
      var sstst = stst.status == '' ? '🤖 😎 🤖' : stst.status
      var picture = await message.client.getProfilePicture(id).catch(() => picture = 'https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg')
      var msg = `═══✪〘 *USUARIO* 〙✪═══\n❖ *ID:* ${id.split('@')[0]}\n❖ *Bio:* ${sstst}\n═══✪〘 *DrkBot* 〙✪═══\n\n*Escribele:*\nhttps://wa.me/${num}`
           
      var photo = await axios.get(picture, {responseType: 'arraybuffer'})
      await message.sendMessage(Buffer.from(photo.data), MessageType.image, {mimetype: Mimetype.jpg, caption: msg })
    } else {
       await message.client.sendMessage(message.jid,'```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
    }
}));
