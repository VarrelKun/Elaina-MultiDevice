import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn }) => {
	let gb = await (await fetch('https://raw.githubusercontent.com/BlackGopal/database/main/sfw/blush.json')).json()
    let neko = pickRandom(gb)
	     let stiker = await sticker(null, neko, global.packname, global.author)
	
	let fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6285736178354-1625305606@g.us" } : {}) 
                       },
            message: { 
                        "videoMessage": { 
                        "title": `${conn.getName(m.sender)} Blushes >\\\<`,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': `${conn.getName(m.sender)} Blushes 😳`,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
	//--------------- EHE --------------//
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', false, {asSticker: true}, {quoted: fgif})
}
handler.tags = ['action']
handler.help = ['blush']
handler.command = /^(blush)$/i

export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}