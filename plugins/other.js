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
const fs = require('fs');

const Language = require('../language')
const Lang = Language.getString('other')
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');
const iErr = '🤖 Parece que hay un error'

let wk = Config.WORKTYPE == 'public' ? false : true

    DrkBox.addCommand({ pattern: 'ip ?(.*)', fromMe: wk, desc: Lang.descIp}, async (message, match) => {
        const userIp = match[1]
        if (userIp === '') return await message.sendMessage(errorMessage(Lang.needIp))
        await message.sendMessage(infoMessage(Lang.search))
        await axios.get(`https://api-melodicxt-2.herokuapp.com/api/ipchecker?ip=${userIp}&apiKey=${KLang.KM}`).then(async (response) => {
            const {ip, country_name, region_code, city, postal, org } = response.data.result.result
            const ipscrap = await axios.get ('https://raw.githubusercontent.com/BotPrivateDrk/WhatsAsenaDuplicated/master/media/gif/ip.png', {responseType: 'arraybuffer'})
            const msg = `*Ip:* ${ip} \n\n*Pais:* ${country_name} \n*Region:* ${region_code} \n*Ciudad:* ${city} \n*Zip Code:* ${postal} \n*Servicio:* ${org}`
            await message.sendMessage(Buffer.from(ipscrap.data), MessageType.image, { caption: msg })
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
		  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*Insulto Random:* 👿🤬\n' +'*' + json.insult + '*', MessageType.text);
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

    DrkBox.addCommand({ pattern: 'bin ?(.*)', fromMe: wk}, async (message, match) => {
        if (match[1] === '') return await message.sendMessage(infoMessage(sBin))
        await axios.get(`https://lookup.binlist.net/${match[1]}`).then(async (response) => {
            const {scheme, type, brand, country.name, country.emoji, country.currency, country.bank.name} = response.data
            const msg = `*BIN: ${match[1]}*\n*TIPO:*\n${scheme}\n${type}\n${brand}\n\n*PAIS*\n${country.name}\n${county.emoji}\n${country.currency}\n\n*BANCO*${country.bank.name}`
            await message.sendMessage(msg)
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(iErr))
          })
    });
