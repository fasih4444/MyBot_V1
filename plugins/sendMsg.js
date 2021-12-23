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

    var exists = await message.client.isOnWhatsApp(id)
    if (exists) {
      await message.client.sendMessage(id,
        'Hola soy 🤖 *DrkBot*\n' +
        'Te están invitando a un chat anonimo.\n\n' +
        '*Para responder es de la siguiente forma.*\n' +
        'Solo desliza hacia la derecha el msj que vas a responder y escribe\n' +
        '/resp y lo que vallas a decir', MessageType.text)
    } else {
      await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})

DrkBox.addCommand({pattern: 'send ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage('🤖 *Envíale un mensaje a alguien de forma anonima por medio del BOT*\n\nPara empezar a chatear de forma anonima enviale las reglas a quien le vas a escribir para que sepa como responderte.\nEscribe:\n*/reglas y el número a quien le vas a escribir*\n❌ */Reglas 3xxxxxxxxx*\n✅ */reglas 573xxxxxxxxx*\n\nAhora forma de empezar a escribir.\nEscribe:\n/send número al que le vas a enviar el msj, signo de + , mensaje a enviar\n\n⚠️ El comando al inicio no lleva mayúsculas y el resto del mensaje no lleva espacios entre el número y el signo de +\n❌ */Send 573xxxxxxxxx + Hola*\n✅ */send 573xxxxxxxxx+Hola*')

    const num = match[1]
          text = num.split('+')
    const id = `${text[0]}@s.whatsapp.net`
    const msg = `${text[1]}`
    const idCod = base64.encode(`${message.jid}`)

    var exists = await message.client.isOnWhatsApp(`${text[0]}`)
    if (exists) {
       await message.client.sendMessage(id,
        `${idCod}+\n` +
        '🤖 Hola\n' +
        'Te han enviado este mensaje.\n\n' +
        `*Mensaje:* ${msg}` , MessageType.text)
    } else {
       await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})

DrkBox.addCommand({pattern: 'resp ?(.*)', fromMe: wk}, async (message, match) => {
   if (!message.reply_message) return await message.client.sendMessage(message.jid,'🤖 Responde el msj que vas a responder.', MessageType.text)

    const codNum = message.reply_message.text
          text = codNum.split('+')
    const idDecod = base64.decode(`${text[0]}`)
    const id = idDecod
    const msg = match[1]

    var exists = await message.client.isOnWhatsApp(id)
    if (exists) {
        await message.client.sendMessage(id,
         '🤖 Hola\n' +
         `Tu mensaje de respuesta de ${message.jid} es.\n\n` +
         `*Mensaje:* ${msg}`, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid, '🤖 Su respuesta no pudo ser enviada.\nEl formato de respuesta no es correcto.', MessageType.text)
    }
})
