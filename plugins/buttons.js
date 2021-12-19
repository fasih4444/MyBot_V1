const DrkBox = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({ pattern: 'test', fromMe: wk}, (async (message, match) => {

   const buttonMessage = {
            contentText: '✪〘 *FUNCIONANDO* 〙✪',
            footerText: 'Prueba',
            buttons: [
                {
                    buttonId: `/menu`,
                    buttonText: {
                        displayText: "📒 MENU"
                    },
                    "type": "RESPONSE"
                },
                {
                     buttonId: `/ping`,
                     buttonText: {
                         displayText: "🪀 PING"
                    },
                    "type": "RESPONSE"
                },
            ],
            headerType: 1
        }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
}));
