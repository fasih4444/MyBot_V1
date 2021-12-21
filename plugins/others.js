/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType, Mimetype, GroupSettingChange } = require('@adiwajshing/baileys')
const { errorMessage, infoMessage } = require('../helpers')
const axios = require('axios')
const Config = require('../config');
const dbot = require('dbot-api');
const got = require('got');
const fs = require('fs');

const Language = require('../language')
const Lang = Language.getString('other')
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');
const iErr = '🤖 Parece que hay un error'

let wk = Config.WORKTYPE == 'public' ? false : true

    DrkBox.addCommand({ pattern: 'ip ?(.*)', fromMe: wk, desc: Lang.descIp}, async (message, match) => {
        if (!match[1]) return await message.sendMessage(errorMessage(Lang.needIp))
        await message.sendMessage(infoMessage(Lang.search))
        await axios.get(`http://ip-api.com/json/${match[1]}?fields=status,message,country,regionName,city,zip,timezone,currency,org,mobile,query`).then(async (response) => {
            const {query, country, regionName, city, zip, timezone, currency, org, mobile} = response.data
            const msg = `*Ip:* ${query} \n\n*Pais:* ${country}\n*Region:* ${regionName}\n*Ciudad:* ${city}\n*Zip Code:* ${zip}\n*Timezone:* ${timezone}\n*Moneda:* ${currency}\n*Servicio:* ${org}\n*Mobile:* ${mobile}`
            await message.sendMessage(msg, MessageType.text)
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(iErr))
          })
    });

    DrkBox.addCommand({ pattern: 'logo ?(.*)', fromMe: wk, desc: Lang.descLogo}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(needLogo);
        var ttinullimage = await axios.get(`http://docs-jojo.herokuapp.com/api/gaming?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    DrkBox.addCommand({pattern: 'insult', fromMe: wk}, async (message, match) => {
	  const url = `https://evilinsult.com/generate_insult.php?lang=es&type=json`;
	  try {
		  const response = await got(url);
		  const json = JSON.parse(response.body);
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*Insulto Random:* 👿🤬\n\n' + json.insult, MessageType.text);
	  } catch {
		  return await message.client.sendMessage(message.jid, iErr, MessageType.text);
	  }
  });

// No Prefix
    DrkBox.addCommand({on: 'text', fromMe: wk, onlyGroup: true}, (async (message, match) => {
        if (message.message.includes('github.com')) {
            await message.sendMessage('🤖 Enlace de GitHub detectado.\nCerrando chat.', MessageType.text, {quoted: message.data});
            await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        } else if (message.message.includes('darkbox')) {
            await message.sendMessage('🤖 hey así se llama mi creador.', MessageType.text, {quoted: message.data});
        }
    }));

    DrkBox.addCommand({pattern: 'bin ?(.*)', fromMe: wk}, async (message, match) => {
	    if (match[1] === '') return await message.sendMessage(infoMessage("🤖 Necesito el BIN!"))
	    const url = `https://lookup.binlist.net/${match[1]}`;
	    try {
		    const response = await got(url);
		    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await message.client.sendMessage(message.jid,
		    `💳 *BIN:* ${match[1]}\n` + 
		    ' *TIPO:*\n' + 
		    json.scheme + '\n' + 
		    json.type + '\n' + 
		    json.brand + '\n' + 
                    ' *PAIS:*\n' + 
                    json.country.name + '\n' + 
                    json.country.emoji + '\n' + 
		    json.country.currency + '\n' + 
                    ' *BANCO:*\n' + 
                    json.bank.name, MessageType.text);
	    } catch {
		    return await message.client.sendMessage(message.jid, iErr, MessageType.text);
	    }
    });

DrkBox.addCommand({pattern: 'send ?(.*)', fromMe: wk}, async (message, match) => {
   if (!match[1]) return await message.sendMessage(infoMessage('🤖 *Envíale un mensaje a alguien de forma anonima por medio del BOT*\nForma de usar el comando.\n\n/send número al que le vas a enviar el msj, signo de + , mensaje a enviar\n\n/send 57xxxxxxx+Hola como estas.'))

    const num = match[1]
          text = num.split('+')
    const id = `${text[0]}@s.whatsapp.net`
    const msg = `${text[1]}`

    var exists = await message.client.isOnWhatsApp(`${text[0]}`)
    if (exists) {
       await message.client.sendMessage(message.jid, '🤖 El número ingresado está registrado en whatsapp, su mensaje será enviado.', MessageType.text)
       await message.client.sendMessage(id,
         'Hola soy 🤖 *DrkBot*\n' +
         'Te han enviado esté mensaje por medio de chat anonimo.\n\n' +
         `*Mensaje:* ${msg}`, MessageType.text)
       await message.client.sendMessage(message.jid, '🤖 Su mensaje fue enviado con éxito.', MessageType.text)
    } else {
       await message.client.sendMessage(message.jid, '🤖 Su mensaje no pudo ser enviado.\nEl número ingresado no está registrado en whatsapp o está mal escrito.\n\nRecuerda que el número debe ser escrito en formato internacional, codigo del pais más número telefonico.', MessageType.text)
    }
})
