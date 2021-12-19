const DrkBox = require('../events');
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true


DrkBox.addCommand({ pattern: 'test', fromMe: wk}, (async (message, match) => {

}));
