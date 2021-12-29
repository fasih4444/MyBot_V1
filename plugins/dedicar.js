/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const Config = require('../config')
const DrkBox = require('../events')
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { yta, ytv } = require('./datos.js')
const axios = require('axios')

const Language = require('../language');
const Lang = Language.getString('scrapers');

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({pattern: 'dedicara ?(.*)', fromMe: wk}, async (message, match) => {

    const dats = match[1]
          text = dats.split(',')
    const link = `${text[0]}`
    const id = `${text[1]}@s.whatsapp.net`

    const exists = await message.client.isOnWhatsApp(`${text[1]}`)
    if (exists || link.includes('youtube.com') || link.includes('youtu.be')) {
        res = await yta(link)
        ytm = res
        const ytaudio = await axios.get(`${ytm.link}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(id,
          '🤖 Hola\n' +
          `El usuario ${message.jid} te dedica está canción.`, MessageType.text)
        await message.client.sendMessage(id, Buffer.from(ytaudio.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false})
    } else {
        await message.client.sendMessage(message.jid, '🤖 Su dedicatoria no pudo ser enviada.\n\n❖ El link tiene que ser de YouTube\n❖ El número ingresado no está registrado en whatsapp o está mal escrito.\n\n⚠️ Recuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
});

DrkBox.addCommand({pattern: 'dedicarv ?(.*)', fromMe: wk}, async (message, match) => {

    const dats = match[1]
          text = dats.split(',')
    const link = `${text[0]}`
    const id = `${text[1]}@s.whatsapp.net`

    const exists = await message.client.isOnWhatsApp(`${text[1]}`)
    if (exists || link.includes('youtube.com') || link.includes('youtu.be')) {
        res = await ytv(link)
        ytm = res
        const ytvideo = await axios.get(`${ytm.link}`, { responseType: 'arraybuffer' })
        const msg = `🤖 Hola\nEl usuario ${message.jid} te dedica esté video.`
        await message.client.sendMessage(id, Buffer.from(ytvideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: msg})
    } else {
        await message.client.sendMessage(message.jid, '🤖 Su dedicatoria no pudo ser enviada.\n\n❖ El link tiene que ser de YouTube\n❖ El número ingresado no está registrado en whatsapp o está mal escrito.\n\n⚠️ Recuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
});
