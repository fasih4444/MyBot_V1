/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const Config = require('../config');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'slot', fromMe: wk}, async (message, match) => {

a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw8 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck8 = pw8[Math.floor(Math.random() * pw8.length)]
d = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
r = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
k = `┃ │  ${luck6} │  ${luck7} │ ${luck8}`
if (r == '┃ │  💰 │  💰 │ 💰'){
slt = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸DrK𝈹┝╾──╮
╽ ┌──────────┐ ┃
${d}
┃ ├──────────┤ ┃
${r}
┃ ├──────────┤ ┃
${k}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯

*GANASTE*`
await message.client.sendMessage(message.jid, slt, MessageType.text)
} else {
slt = `┌ ﹍﹍𝈺﹉﹉﹉𝈻﹍﹍ ┐ 
╭──╼┥𝈸BoT𝈹┝╾──╮
╽ ┌──────────┐ ┃
${d}
┃ ├──────────┤ ┃
${r}
┃ ├──────────┤ ┃
${k}
╿ └──────────┘ ╿
╰─┨⃞🔮𝉃𝜄𝜐𝉃𝜍𝜅𝉃𝛾🔮⃞ ┠─╯

*SIGUE INTENTANDO*`
await message.client.sendMessage(message.jid, slt, MessageType.text)
}
})
