/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const Config = require('../config');
const base64 = require('base-64');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'reglas ?(.*)', fromMe: wk}, async (message, match) => {
    if (!match[1]) return await message.sendMessage('🤖 Necesito el número al que le vas a enviar las reglas')

    const num = match[1]
    const id = `${num}@s.whatsapp.net`
    const idCod = base64.encode(`${message.jid}`)

    var exists = await message.client.isOnWhatsApp(id)
    if (exists) {
      await message.client.sendMessage(id,
        'Hola soy 🤖 *DrkBot*\n' +
        'Te están invitando a un chat anonimo, para poder responderle a esa persona vas a necesitar el codigo de respuesta de ese chat.\n' +
        '*Las reglas de este chat son las siguientes:*\n' +
        '1. Al final de este chat te va a llegar un mensaje con un codigo el cual podras usar para responder.\n' +
        '2. Para responder es de la siguiente forma.\n' +
        '*/send codigo respuesta + mensaje a responder*\n' +
        '⚠️ El signo de mas(+) es el que separa el codigo del mensaje a responder, que no se te olvide colocarlo.', MessageType.text)
      await message.client.sendMessage(id, idcod, MessageType.text)
    } else {
      await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})

DrkBox.addCommand({pattern: 'send ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage('🤖 *Envíale un mensaje a alguien de forma anonima por medio del BOT*\nForma de usar el comando.\n\n/send número al que le vas a enviar el msj, signo de + , mensaje a enviar\n\n/send 57xxxxxxx+Hola como estas.')

    const num = match[1]
          text = num.split('+')
    const id = `${text[0]}@s.whatsapp.net`
    const msg = `${text[1]}`

    var exists = await message.client.isOnWhatsApp(`${text[0]}`)
    if (exists) {
       await message.client.sendMessage(id, msg, MessageType.text)
    } else {
       await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})

DrkBox.addCommand({pattern: 'resp ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage('🤖 Forma de responder.\n\n/rsend codigo de respuesta, signo de + , mensaje de respuesta\n\n/rsend xxxxxxxx+mensaje a responder')

    const codNum = match[1]
          text = codNum.split('+')
    const idDecod = base64.decode(`${text[0]}`)
    const id = idDecod
    const msg = `${text[1]}`

    var exists = await message.client.isOnWhatsApp(id)
    if (exists) {
        await message.client.sendMessage(id,
         '🤖 Hola\n' +
         `Tu mensaje de respuesta de ${message.jid} es:\n\n` +
         `*Mensaje:* ${msg}`, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid, '🤖 Su respuesta no pudo ser enviada.\nEl formato de respuesta no es correcto.', MessageType.text)
    }
})
