/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const { infoMessage } = require('../helpers')
const Config = require('../config');
const base64 = require('base-64');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'send ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage(infoMessage('🤖 *Envíale un mensaje a alguien de forma anonima por medio del BOT*\nForma de usar el comando.\n\n/send número al que le vas a enviar el msj, signo de + , mensaje a enviar\n\n/send 57xxxxxxx+Hola como estas.'))

    const num = match[1]
          text = num.split('+')
    const id = `${text[0]}@s.whatsapp.net`
    const msg = `${text[1]}`

    const idCod = base64.encode(`${message.jid}`)

    var exists = await message.client.isOnWhatsApp(`${text[0]}`)
    if (exists) {
       await message.client.sendMessage(id,
         'Hola soy 🤖 *DrkBot*\n' +
         'Te han enviado esté mensaje por medio de chat anonimo.\n\n' +
         `*Mensaje:* ${msg}\n\n` +
         'Para responder a esté mensaje escribe\n/rsend codigoRespuesta+mensaje de respuesta', MessageType.text)
       await message.client.sendMessage(id, 'Tu codigo para responder es:', MessageType.text)
       await message.client.sendMessage(id, `${idCod}`, MessageType.text)
       await message.client.sendMessage(message.jid, '🤖 Su mensaje fue enviado con éxito.', MessageType.text)
    } else {
       await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})

DrkBox.addCommand({pattern: 'rsend ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage(infoMessage('🤖 Forma de responder.\n\n/rsend codigo de respuesta, signo de + , mensaje de respuesta\n\n/rsend xxxxxxxx+mensaje a responder'))

    const codNum = match[1]
          text = codNum.split('+')
    const idDecod = base64.decode(`${text[0]}`)
    const id = idDecod
    const msg = `${text[1]}`

    await message.client.sendMessage(id,
         'Hola soy 🤖 *DrkBot*\n' +
         `Tu mensaje de respuesta de ${message.jid} es:\n\n` +
         `*Mensaje:* ${msg}`, MessageType.text)
})
