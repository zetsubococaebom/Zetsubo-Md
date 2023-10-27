/*

> Jika Anda ingin menjual ulang bot ini, pastikan untuk selalu berperilaku etis, hindari tindakan menipu atau merugikan orang lain, dan jangan mengganti nama bot menjadi mirip atau sama dengan bot lain. Anda dapat mengganti nama bot setelah melakukan perubahan/modifikasi besar pada kode dan menjualnya sebagai karya Anda sendiri. Namun, hindari mengubahnya menjadi nama bot orang lain, kecuali jika Anda membuat nama yang berbeda untuk bot yang Anda modifikasi sendiri dengan menggunakan bot ini.

> Kalo Mau Recode Kasih Credit gw ›
         TheZetsubXygen/Ryo〽️

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
const { virtex2 } = require('./latx/virtex2.js')
const { delaybug } = require('./latx/delaybug.js')
const { ios3 } = require('./latx/ios3.js')
const { ios4 } = require('./latx/ios4.js')
const { ios5 } = require('./latx/ios5.js')
const { ios6 } = require('./latx/ios6.js')
const { ios7 } = require('./latx/ios7.js')
const { superstar } = require('./latx/superstar.js')
const { superkusuma } = require('./latx/superkusuma.js')

//Fake
const fakedoc = fs.readFileSync(`./src/bruhhh.apk`)
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)

// Akses
let premium = JSON.parse(fs.readFileSync('./dtbs/premium.json'))

//React
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]

//Media | mygirl
const fiber = fs.readFileSync(`./kawai/fiber.jpg`)
const egao = fs.readFileSync(`./kawai/egao.jpg`)
const cikimori = fs.readFileSync(`./kawai/cikimori.jpg`)
const asuka = fs.readFileSync(`./kawai/asuka.jpg`)
const ange = fs.readFileSync(`./kawai/ange.jpg`)
const mygirl = fs.readFileSync(`./kawai/mygirl.jpg`)
const mygirl2 = fs.readFileSync(`./kawai/mygirl2.jpg`)
const mygirl3 = fs.readFileSync(`./kawai/mygirl3.jpg`)
const mygirl4 = fs.readFileSync(`./kawai/mygirl4.jpg`)
const mygirl5 = fs.readFileSync(`./kawai/mygirl5.jpg`)
const mygirl6 = fs.readFileSync(`./kawai/mygirl6.jpg`)

//Music
const lostkit = fs.readFileSync(`./music/lostkitten.mp3`)
const coverup = fs.readFileSync(`./music/coverup.mp3`)


//Ini Waktu | Waktu adalah emas,maka dari itu sentuh lah rumput.dan jangan nolep dikamar terus,usahakan tu kontol jangan dikocok terus.Lutut ama sikut lu kopong nanti
const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")

//Status
if (!ryokun.public) {
if (!m.key.fromMe) return
}

//Quoted 

const ryocakep = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: fakejpg, //image 0kb
      itemCount: 909,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};

const qpay = {
	key: {
		remoteJid: 'status@broadcast',
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
					text: `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`
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

const qdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            jpegThumbnail: fakedoc,
        }
    }
}
const qvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

const qtext = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            "title": `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 〽️`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qtoko = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "productMessage": {
            "product": {
                "productImage": {
                    "mimetype": "image/jpeg",
                    "jpegThumbnail": fakejpg,
                },
                "title": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
                "description": `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 〽️`,
                "currencyCode": "IDR",
                "priceAmount1000": "1000000000000000000",
                "retailerId": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
                "productImageCount": 1
            },
            "businessOwnerJid": `0@s.whatsapp.net`
        }
    }
}

const qgif = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'gifPlayback': 'true',
            'caption': `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qinvite = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6288213840883-1616169743@g.us",
            "inviteCode": "m",
            "groupName": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            "caption": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qvideo = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'caption': `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qloc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            name: `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            jpegThumbnail: fakejpg,
        }
    }
}

const qloc2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "liveLocationMessage": {
            "title": `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            "h": `Hmm`,
            'jpegThumbnail': fakejpg,
        }
    }
}

const qkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        'contactMessage': {
            'displayName': `🖥️༐ 𝐙𝐱𝐕 ⬪ 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𒑊 : ${m.body || m.mtype}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': fakejpg,
            thumbnail: fakejpg,
            sendEphemeral: true
        }
    }
}


//Reply

const tesreply = (teks) => {
        return ryokun.sendMessage(m.chat, { text: teks }, { quoted: ryocakep })
        }

const cikireply = (teks) => {
return ryokun.sendMessage(m.chat, {
  contextInfo: {
    mentionedJid: teks
      ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
      : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail:false,
      title: `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 ϟ\n👤 名前 : ${m.pushName}`,
      body: `🕑${ucapanWaktu}`,
      previewType: "PHOTO",
      thumbnail: cikimori,
      sourceUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==",
      mediaUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA=="
    }
  },
  text: teks
}, {
  quoted: ryocakep 
 });
}

const gfreply = (teks) => {
return ryokun.sendMessage(m.chat, {
  contextInfo: {
    mentionedJid: teks
      ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
      : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail:false,
      title: `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 ϟ\n👤 名前 : ${m.pushName}`,
      body: `🕑${ucapanWaktu}`,
      previewType: "PHOTO",
      thumbnail: mygirl5,
      sourceUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==",
      mediaUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA=="
    }
  },
  text: teks
}, {
  quoted: ryocakep 
 });
}


const gf2reply = (teks) => {
return ryokun.sendMessage(m.chat, {
  contextInfo: {
    mentionedJid: teks
      ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
      : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail:false,
      title: `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 ϟ\n👤 名前 : ${m.pushName}`,
      body: `🕑${ucapanWaktu}`,
      previewType: "PHOTO",
      thumbnail: mygirl6,
      sourceUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==",
      mediaUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA=="
    }
  },
  text: teks
}, {
  quoted: ryocakep 
 });
}
const gf3reply = (teks) => {
return ryokun.sendMessage(m.chat, {
  contextInfo: {
    mentionedJid: teks
      ? [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net")
      : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail:false,
      title: `༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 ϟ\n👤 名前 : ${m.pushName}`,
      body: `🕑${ucapanWaktu}`,
      previewType: "PHOTO",
      thumbnail: mygirl4,
      sourceUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==",
      mediaUrl: "https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA=="
    }
  },
  text: teks
}, {
  quoted: ryocakep 
 });
}

//Random Reply
const inireply = [gf3reply, gf2reply, gfreply]
const randomreply = inireply[Math.floor(Math.random() * inireply.length)]

const iosname = [
    "〝🏞️͜͡𝐢𝟎𝐬 𝐊𝐢𝐥𝐥𝐞𝐫༑𐍸🍏𝐙𝐞𝐭𝐬𝐮𝐛𝐨𝐱𝐲𝐠𝐞𝐧⿻〞",
    "🍏⃟⃟༑〝Ž€ŦŞ𐍶ỮβØЖ¥𐍶G€Ň😹Fuck Ios!★",
    "🐲𐍸Z̲̅e̲̅t̲̅s̲̅u̲̅b̲̅o̲̅x̲̅y̲̅g̲̅e̲̅n̲̅𐍶🍏I̶o̶s̶ i̶s̶ m̶y̶ t̶o̶y̶🧪"
];

const iosnamecode = iosname[Math.floor(Math.random() * iosname.length)];

const killname = [
    "*👑࿆̆ℤ͓̿ⅇ̸ً̳⃔𝕋͙͆𝕊⃓𝅨𝕦̷𝕓𖫱̨࿆̆̚𝕠̸𝅨𝕏̸̚ℽ͓⃐𝕘𖫱̸⅀̷࿆̆ℿ༳༑༈〽️",
    "ೈ፝͡⃟💩̸̅̄͟͡〚𝐓⃔̀𝐡͢𝐞̤𝐙͜͝𝐞̷𝐭͗͞𝐬⃪̱͟͞𝐮͞𝐛⃩𝐨̷̤̈𝐗⃩𝐠̶̲͢𝐞ꥇ̱͢𝐧⃕𖥂𝆄",
    "𝅨😈𝐩𝟎⃟⃔͜𝐢̸𝐧𝐭𝐬 ★ 𝐙𝐞𝐭𝐬𝐮𝐛𝐨𝐗𝐲𝐠𝐞𝐧 ༑ 𝐙𝐱𝐕 ⿻",
    "༑ ⾐ 𝐗𝐲𝐠𝐞𝐧𝐠𝟎𝐝 - 𝐙𝐱𝐕 ϟ",
    "༑❄️͜͡•°𝐙͟𝚺𝐓͟𝐒𝐔𝐁͟𝚹꫰𝐗̷𝐘͜𝐆̚𝚺𝐍༐🥶𖫰᷍҉ํ⃟ৣ ̭ • anti plastik 🧊ꫬ—𝅨🌊̨̈ꨲꪾ …",
    "𝐙𝚺͟𝐓𝐒𝐔𝐁𝚶𝐗͟𝐘𝐆 😈̸̦̣͛͘ removed gay ♣️_🌈̞⃜ ...~",
    "( ˹ ■■■□90% 🌟𝐙̸̱͗͢͡𝚺𝅩̲𝐓͟𝐒̶̱͞𝐔𖫲𖫲ً͞𝐁𖫰ꥇً𝚯̸ ᎒ ˺ ) 🏳️😈 ⛂ ﾟ･:*✿ | ( ͡°╭͜ʖ╮͡° ) ˹ ✻ 𝐂̸͜𝐥𝐞͟𝐚𝐧 ً𝐀𝐱𝐨𝐥𝐨𝐭͞𝐥 ◤ ツ ˺",
    "༐󰇠͜͡҈💫͝⃟𝐓⃔̀𝐡̛𝐞̤𝐙̤̲⃩𝐞̷𝐭͗𝐬̏͜𝐮͞𝐛𝐨̷̤̈𝐗⃩𝐠͢𝐞ꥇ͡𝐧ࣩࣩ̽͜͡⃟󰉭⇣",
    ` *🦠ૅ𝗭͜͡𝗲𝘁𝘀͢𝘂𝗯𝗼̸(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)𝗦͜͡𝗶𝗻𝗴𝗹𝗲𝗣̚𝗹𝗮𝘆𝗲̸𝗿🎩*
*🌉𝟗𝟐𝟗𑪆𑪅𑪉𑘱🪽* #Z̶𝙭V̶ Vї$ḯøη😹༘`
];

const namecode = killname[Math.floor(Math.random() * killname.length)];


        if (m.message) {
            ryokun.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }



switch (command) {
    //Menu

    // Status
case 'public': {
if (!isCreator) return m.reply('*khusus Premium*') 
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
ryokun.public = true
m.reply('succes')
}
break

case "menu": case "help": {
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
let itsmenu = `
┏─•⛩️ ZxVClient ⛩️•─⬣[⿻
│
│👋 ${ucapanWaktu}
│👤 名前 	 : ${m.pushname}
│📱 タグ   : @6289651875100
│🕑 時間   : Selamat Subuh🌆
│
│🌠𝐁𝟎𝐓 𝐁𝐘 𝐙𝐄𝐓𝐒𝐔𝐁𝟎
│✦ 𝐁𝐎𝐓 𝐁𝐀𝐒𝐄 𝐁𝐘 : 
│
│ 𝐏𝐫𝐞𝐟𝐢𝐱     ‼️   : ${prefix ? prefix : '✳ 𝐌𝐮𝐥𝐭𝐢 ༢'}
│ 𝐋𝐢𝐛𝐫𝐚𝐫𝐲  📚    : 𝐖𝐬𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃.
│ 𝐑𝐚𝐦       🖥️    : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│ 𝐒𝐭𝐚𝐭𝐮𝐬    🌟     : ${ryokun.public ? '✱ 𝐏𝐮𝐛𝐥𝐢𝐜 ༣' : '✲ 𝐒𝐞𝐥𝐟 ༣'}
│
┗─•🌟 Bot Info 🌟•─⬣[⿻

┏─•🌤️ All Menu 🖥️•─⬣[⿻
│
│✦ 𝚫 *Owner Command*
│
│ .Addprem
│ .Dellprem
│ .self
│ .public
│ .sendpirtek
│
│✦ 𝚫 *Convert*
│
│ .toimg | reply stiker
│ .toaudio | reply video
│ .sticker | reply gambar
│ .s | reply gambar 
│ .smeme teks bawah|teks atas
│ .tomp4 | reply stiker
│
│✦ 𝚫 *Openai*
│
│ .ai pertanyaan/perintah
│ .prompt-gpt pertanyaan/perintah
│ .dall-e Ilustrasi 
│ .gptgo pertanyaan/perintah
│
│✦ 𝚫 *Scrapper*
│ .killcase
│ .patcase
│ .lickcase
│ .bitecase
│ .yeetcase
│ .bonkcase
│ .winkcase
│ .pokecase
│ .nomcase
│ .slapcase
│ .smilecase
│ .wavecase
│ .blushcase
│ .smugcase
│ .glompcase
│ .happycase
│ .dancecase
│ .cringecase
│ .highfivecase
│ .handhold
│ .neko
│ .shinobu
│ .megumin
│ .waifu
│
┗───────────────⬣[⿻

┏─•📍 ThanksTo 📍•─⬣[⿻
│
│ 📚 𝐙𝐞𝐭𝐬𝐮𝐛𝐨𝐗𝐲𝐠𝐞𝐧 | 𝐌𝐞
│ 📚 𝐙𝐱𝐕 𝐕𝐢𝐒𝐢𝐎𝐍 | 𝐓𝐞𝐚𝐦
│ 📚 𝐀𝐝𝐦𝐜𝐡𝐳𝐢𝐧𝐠𝐨𝐝 
│
┗─•🌟 Arigato 🌟•─⬣[⿻
`
            let hiks = {
  image: cikimori, 
  caption: itsmenu,
  contextInfo:{externalAdReply:{
title: '༑ ⾐ 𝐗𝐲𝐠𝐞𝐧𝐠𝟎𝐝 - 𝐙𝐱𝐕 ϟ',
  body: '༑ ⾐ 𝐙𝐱𝐕 𝐂𝐨𝐧𝐬𝐨𝐥𝐞 𝐕𝟐 ϟ', 
  showAdAttribution: true,
  thumbnail:ange,
  mediaType: 4,
  MediaUrl:`https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==`,
  sourceUrl:`https://instagram.com/ryo.cocaebom_?igshid=OGQ5ZDc2ODk2ZA==`,
  }}
  }
await ryokun.sendMessage(m.chat, hiks, {quoted: ryocakep })
}
break

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

//Scrapper
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold":
vision.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
randomreply(mess.wait)
let bugil = `🍻Succes Beb ÙnÚ`
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
vision.sendMessage(m.chat, {
        image: {url: data.url },
        caption: '😋 Istri Kartun :3'
    },{quoted: ryoku })
})
break
case 'neko':
case 'waifu':
case 'shinobu':
case 'megumin':{
ryokun.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
randomreply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ryokun.sendMessage(m.chat, {
        image: {url: data.url },
        caption: '😋 Istri Kartun :3'
    },{quoted: ryocakep })
})
}
break

case 'spamblock': {
if (!isCreator) return m.reply('*khusus Premium*')
await loading()
bnnd = text.split(",")[0]+'@s.whatsapp.net'
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await ryokun.updateBlockStatus(bnnd, 'block')
await ryokun.updateBlockStatus(bnnd, 'unblock')
await sleep(1000)
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