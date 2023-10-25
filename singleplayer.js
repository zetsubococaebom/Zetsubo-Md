/*
> Dilarang Menjual Bot Ini Jikalau Anda Belum Menambahkan Beberapa Fitur, Minimal 8 Klo Lu Mau Jual

> Kalo Mau Recode Kasih Credit gw ›
         TheZetsub0Xygen/Ryo〽️

📝| Created By TheZetsub0Xygen / Ryo
🖥️| Base Ori By TheZetsub0Xygen / Ryo


*/

require('./config')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const { uptotelegra } = require('./lib/upload')
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')

//  Base
module.exports = ryokun = async (ryokun, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
const botNumber = await ryokun.decodeJid(ryokun.user.id)
const globalelit = `${global.ownNumb}@s.whatsapp.net`
const isOwner = globalelit.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const isCreator = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// Group
const groupMetadata = m.isGroup ? await ryokun.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

//Pirtek
const { bersihin } = require('./latx/bersihin.js')
const { bugui } = require('./latx/bugui.js')
const { bugui2 } = require('./latx/bugui2.js')
const { ios1 } = require('./latx/ios1.js')
const { ios2 } = require('./latx/ios2.js')
const { iphone } = require('./latx/iphone.js')
const { jids0 } = require('./latx/jids0.js')
const { jids1 } = require('./latx/jids1.js')
const { judul } = require('./latx/judul.js')
const { mdelay } = require('./latx/mdelay.js')
const { titik } = require('./latx/titik.js')
const { vapi } = require('./latx/vapi.js')
const { zxvbug } = require('./latx/zxvbug.js')
const { zetssnotgay } = require('./latx/zetsubonotgay.js')

// Akses
let premium = JSON.parse(fs.readFileSync('./dtbs/premium.json'))

//React
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]

//Status
if (!ryokun.public) {
if (!m.key.fromMe) return
}

//Quoted 

const qpay = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: '0@s.whatsapp.net',
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐ ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 ✽ : ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

        if (m.message) {
            ryokun.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }



switch (command) {
    //Menu
case 'menu': case 'help': {
m.reply(`📚Haloo, Saya adalah Zetsubo-Md / Bot WhatsApp Yang Menggunakan Library Whiskeysockets Baileys

🖥️Berikut adalah list menu dari Bot Ini=

[[ ༑📚𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝒁𝒆𝒕𝒔𝒖𝒃𝒐༢⿻ ༑]]
🍻| .self
🍻| .public
🍻| .toimg | reply stiker
🍻| .toaudio | reply video
🍻| .sticker | reply gambar
🍻| .s | reply gambar 
🍻| .smeme | reply gambar • teks bawah|teks atas
🍻| .tomp4 | reply stiker
🍻| .ai pertanyaan/perintah
🍻| .prompt-gpt pertanyaan/perintah
🍻| .dall-e Ilustrasi 
🍻| .gptgo pertanyaan/perintah
🍻| .addprem nomor/tag
🍻| .delprem nomor/tag
🍻| .sendpirtek
[[ ༑📚𝑪𝒓𝒆𝒂𝒕𝒆 𝑩𝒚 𝒁𝒆𝒕𝒔𝒖𝒃𝒐༢⿻ ༑]]

😆Thx XD, Jangan Lupa Kasih Star Dan Fork Di Github`)
}
break

    // Status
case 'public': {
if (!isCreator) return m.reply('*khusus Premium*') 
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
ryokun.public = true
m.reply('succes')
}
break

case 'self': {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!isCreator) return m.reply('*khusus Premium*') 
ryokun.public = false
m.reply('succes')
}
break

    // Tes Case
case 'sipinter' : {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
m.reply('*hanya orang goblok yang kena setpp*\n  -mr.c / sipaling pinter ')
}
break

case 'iniryo' : {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
ryokun.sendMessage(m.chat, { text: `_ryo itu ganteng banget, aku jdi suka ama dia 😣😖😫_` }, { quoted: qpay })
}
break

case 'tesbug': {
var etc = { scheduledCallCreationMessage: {
 callType: `AUDIO`,
 scheduledTimestampMs: 0,
 title: `Tes Bug`
 }
}
ryokun.relayMessage(m.chat, etc, {})
m.reply('p')
}
break

    //Convert 
case 'sticker':
case 'stiker':
case 's':{
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ryokun.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ryokun.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'smeme': {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
 if (!text) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ryokun.downloadAndSaveMediaMessage(qmsg)
let Bjirka = await uptotelegra(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${Bjirka}`
let pop = await ryokun.sendImageAsSticker(m.chat, smeme, m, {
packname: global.packname,
author: global.author
})
fs.unlinkSync(pop)
}
}
break

case 'toimage':
case 'toimg': {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!/webp/.test(mime)) return m.reply(`Reply sticker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await ryokun.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
ryokun.sendMessage(m.chat, {
image: buffer
}, {
quoted: m
})
fs.unlinkSync(ran)
})

}
break
case 'tomp4':
case 'tovideo': {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!/webp/.test(mime)) m.reply(`m.reply stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await ryokun.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await ryokun.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted: m
})
await fs.unlinkSync(media)

}
break
case 'toaud':
case 'toaudio': {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/m.reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await ryokun.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
ryokun.sendMessage(m.chat, {
audio: audio,
mimetype: 'audio/mpeg'
}, {
quoted: m
})

}
break

    //Openai
case "ai": case "chatgpt": case "openai": {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!m.text) return m.reply (`Example : ${m.prefix + m.command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/openai?text=${q}`) 
var json = await js.json()
m.reply(json.result)
}
break
case "prompt-gpt": {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!m.text) return m.reply (`Example : ${m.prefix + m.command} buatkan lirik lagu tentang persahabatan dengan genre pop dan panjang 8 baris|# Lirik Lagu,# Genre: Pop,# Panjang: 8 baris,# Tema: Persahabatan
`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://aemt.me/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
m.reply(json.result)
}
break
case "gptgo": {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!m.text) return m.reply (`Example : ${m.prefix + m.command} Apa itu gpt go?`)
var js = await fetch(`https://aemt.me/gptgo?text=${q}`) 
var json = await js.json()
m.reply(`Berikut Adalah Hasil Dari Gpt-Go \n\n\n\n\n ${json.result}`)
}
break
case "dall-e": {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!m.text) return m.reply (`Example : ${m.prefix + m.command} Gunung Dengan Cuaca Hujan`)
imgurl = `https://aemt.me/dalle?text=${q}`
       ryokun.sendMessage(m.chat, {
            image: {url: imgurl},
            caption: 'Nih,Btw klo ngasih ilustrasi yang bener ya'
        },{quoted: m })
    }
break

    //Owner fitur
case 'addprem':
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!isCreator) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await ryokun.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
premium.push(prem1)
fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium))
m.reply(`${prem1} Sudah menjadi premium!!!`)
ryokun.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `Kamu sekarang adalah user premium!!`},{quoted: qpay})
break
case 'delprem':
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
if (!isCreator) return 
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(prem2)
premium.splice(unp, 1)
fs.writeFileSync('./dtbs/premium.json', JSON.stringify(premium))
m.reply(`${prem2} Tidak lagi premium!!!`)
break

case 'sendpirtek': {
if (!isCreator) return m.reply('Khusus Owner')
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${ios2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️${bugui2}`)
m.reply(`*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️zetssnotgay`)
}
break

default:

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

}
} catch (err) {
const errId = `${global.ownNumb}@s.whatsapp.net`
ryokun.sendMessage(errId, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})