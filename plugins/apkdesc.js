const Config = require('../config');
const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');

if (Config.WORKTYPE == 'public') {

/*GAMES*/
DrkBox.addCommand({pattern: "games ?(.*)", fromMe: true}, (async (message, match) => {
		if (match[1] === "1") {
			await message.sendMessage('💎 *1v1 Lol Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/7rUiaB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "2") {
			await message.sendMessage('💎 *Among Us Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/0H2otFf', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "3") {
			await message.sendMessage('💎 *Archero* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/Ml6gGm', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "4") {
			await message.sendMessage('💎 *Battle Ops* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/gFxnTmM', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "5") {
			await message.sendMessage('💎 *Boom Karts* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/WYUio5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "6") {
			await message.sendMessage('💎 *CSR Racing 2* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/pUFhf5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "7") {
			await message.sendMessage('💎 *Death Target* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/8BYwIU', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "8") {
			await message.sendMessage('💎 *Dust Settle* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/BIDP93', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "9") {
			await message.sendMessage('💎 *Harry Poter (puzzles)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/5Hb5HJ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "10") {
			await message.sendMessage('💎 *Jetpack Joyride Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/O8lnRe', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "11") {
			await message.sendMessage('💎 *Metal SLug (todos)* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/c5ekal', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "12") {
			await message.sendMessage('💎 *Minecraft Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/AXAqB4', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "13") {
			await message.sendMessage('💎 *Plantas Vs Zombies Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/wpC9IC', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "14") {
			await message.sendMessage('💎 *Sky Fighter* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/1A3Pay', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "15") {
			await message.sendMessage('💎 *Sniper 3D Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/74OFrB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "16") {
			await message.sendMessage('💎 *State Of Survival* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/zhe7dUr', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "17") {
			await message.sendMessage('💎 *Subway Surfer Mod* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/grcoQ7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "18") {
			await message.sendMessage('💎 *WWE Undefeated* 💎\n##desc\n⚠️ ##aviso\n📌 https://ouo.io/KZlvr9', MessageType.text, {quoted: message.data});
		}
}));
}
else if (Config.WORKTYPE == 'private') {}
