//   •-- MADE BY --•
//   | Letta - Sama ! 💗🐰
//   •-------------•
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!

//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
let { MessageType } = (await import('@adiwajshing/baileys')).default

import fetch from 'node-fetch'

//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://api.lolhuman.xyz/api/random/nsfw/'
let api = '?apikey=SGWN'

let a = 'https://revita.herokuapp.com/api/nsfw/'
let b = '?apikey=ApiRevita'

//> Pentagram
let tres = 'https://xpent4.herokuapp.com/api/nsfw/'

//> REST API
let zres = 'https://api-reysekha.herokuapp.com/api/nsfw/'
let zapi = '?apikey=APIKEY'

//> Lolhuman
let resl = 'https://api.lolhuman.xyz/api/random2/nsfw/'
let apil = '?apikey=SGWN'

//> Xteam
let xres = 'https://xteam.xyz/randomimage/'
let xapi = '?APIKEY=NezukoTachibana281207'


//--------------------------------

// ••••••••••••••••• OPTIONS •••••••••••

// > Example :

// OPTIONS
// • false = Free
// • true = premium

//+- Contoh: -+
// let nsfww = (ch == true ? false : <Options, pilih true atau false>)

//### *FREE* ###
// let nsfww = (ch == true ? false : false)

//### *PREM* ###
// let nsfww = (ch == true ? false : true)

let ahegao = (ch == true ? false : false)
let anal = (ch == true ? false : false)
let ass = (ch == true ? false : false)
let bdsm = (ch == true ? false : false)
let blowjob = (ch == true ? false : false)
let cums = (ch == true ? false : false)
let ecchi = (ch == true ? false : false)
let ero = (ch == true ? false : false)
let erofeet = (ch == true ? false : false)
let erogirl = (ch == true ? false : false)
let holoero = (ch == true ? false : false)
let erokitsune = (ch == true ? false : false)
let eroneko = (ch == true ? false : false)
let eroyuri = (ch == true ? false : false)
let feet = (ch == true ? false : false)
let femdom = (ch == true ? false : false)
let futanari = (ch == true ? false : false)
let gangbang = (ch == true ? false : false)
let hentai = (ch == true ? false : false)
let holo = (ch == true ? false : false)
let kitsune = (ch == true ? false : false)
let kuni = (ch == true ? false : false)
let loli = (ch == true ? false : false)
let manga = (ch == true ? false : false)
let milf = (ch == true ? false : false)
let mstrb = (ch == true ? false : false)
let neko = (ch == true ? false : false)
let panties = (ch == true ? false : false)
let pussy = (ch == true ? false : false)
let oppai = (ch == true ? false : false)
let spank = (ch == true ? false : false)
let tentacles = (ch == true ? false : false)
let thighs = (ch == true ? false : false)
let tits = (ch == true ? false : false)
let trap = (ch == true ? false : false)
let uniform = (ch == true ? false : false)
let waifu = (ch == true ? false : false)
let yaoi = (ch == true ? false : false)
let yuri = (ch == true ? false : false)
//-------------------------------------

//---------- TEXT -----------
let next = 'ɴ ᴇ x ᴛ'
let fot = botdate
let txtprem = '❗ ɴsғᴡ ɪɴɪ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ\nʜᴀʀᴀᴘ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ! 📞'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`➩ Random Image Nsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `

  let teks = `┊ 📮 Silahkan Pilih Dibawah!

┊› Atau ketik ${usedPrefix}nsfw neko

❏──···––`
//---------------------------

//--------- BUTTON SELECTIONS ----------


const sections = [
   {
	title: '◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥',
	rows: [
  {title: `${ ahegao == true ? p : f}` + "A • Ahegao", rowId: ".nsfw ahegao"},
	{title: `${ anal == true ? p:f}` + "A • Anal", rowId: ".nsfw anal"},
	{title: `${ ass == true ? p:f}` + "A • Ass", rowId: ".nsfw ass"},
	{title: `${ bdsm== true ? p:f}` + "B • BDSM", rowId: ".nsfw bdsm"},
	{title: `${ blowjob == true ? p:f}` + "B • BlowJob", rowId: ".nsfw blowjob"},
	{title: `${ cums == true ? p:f}` + "C • Cumsluts", rowId: ".nsfw cums"},
	{title: `${ ecchi == true ? p:f}` + "E • Ecchi", rowId: ".nsfw ecchi"},
	{title: `${ ero == true ? p:f}` + "E • Ero", rowId: ".nsfw ero"},
	//{title: `${ erofeet == true ? p:f}` + "E • Ero Feet", rowId: ".nsfw erofeet"},
	//{title: `${ erogirl == true ? p:f}` + "E • Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${ holoero == true ? p:f}` + "E • Ero Holo", rowId: ".nsfw holoero"},
	//{title: `${ erokitsune == true ? p:f}` + "E • Ero Kitsune", rowId: ".nsfw erokitsune"},
	//{title: `${ eroneko == true ? p:f}` + "E • Ero Neko", rowId: ".nsfw eroneko"},
	//{title: `${ eroyuri== true ? p:f}` + "E • Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${ feet == true ? p:f}` + "F • Feet", rowId: ".nsfw feet"},
	{title: `${ femdom == true ? p:f}` + "F • Femdom", rowId: ".nsfw femdom"},
	{title: `${ futanari == true ? p:f}` + "F • Futanari", rowId: ".nsfw futanari"},
	{title: `${ gangbang == true ? p:f}` + "G • Gangbang", rowId: ".gb"},
	{title: `${ hentai == true ? p:f}` + "H • Hentai", rowId: ".nsfw hentai"},
	{title: `${ holo == true ? p:f}` + "H • Holo", rowId: ".nsfw holo"},
	//{title: `${ kitsune == true ? p:f}` + "K • Kitsune", rowId: ".nsfw kitsune"},
	//{title: `${ kuni == true ? p:f}` + "K • Kuni", rowId: ".nsfw kuni"},
	{title: `${ loli == true ? p:f}` + "L • Loli", rowId: ".nsfw loli"},
	{title: `${ manga== true ? p:f}` + "M • Manga", rowId: ".nsfw manga"},
	{title: `${ milf == true ? p:f}` + "M • Milf", rowId: ".nsfw milf"},
	{title: `${ mstrb == true ? p:f}` + "M • Mstrb", rowId: ".nsfw mstrb"},
	{title: `${ neko == true ? p:f}` + "N • Neko", rowId: ".nsfw neko"},
	{title: `${ oppai == true ? p:f}` + "O • Oppai", rowId: ".nsfw oppai"},
	{title: `${ panties == true ? p:f}` + "P • Panties", rowId: ".nsfw panties"},
	{title: `${ pussy == true ? p:f}` + "P • Pussy", rowId: ".nsfw pussy"},
	{title: `${ spank == true ? p:f}` + "S • Spank", rowId: ".nsfw spank"},
	{title: `${ tentacles == true ? p:f}` + "T • Tentacles", rowId: ".nsfw tentacles"},
	{title: `${ thighs == true ? p:f}` + "T • Thighs", rowId: ".nsfw thighs"},
	{title: `${ tits == true ? p:f}` + "T • Tits", rowId: ".nsfw tits"},
	{title: `${ trap == true ? p:f}` + "T • Trap", rowId: ".nsfw trap"},
	{title: `${ uniform == true ? p:f}` + "U • Uniform", rowId: ".nsfw uniform"},
	{title: `${ waifu == true ? p:f}` + "W • Waifu", rowId: ".nsfw waifu"},
	{title: `${ yaoi == true ? p:f}` + "Y • Yaoi", rowId: ".nsfw yaoi"},
	{title: `${ yuri == true ? p:f}` + "Y • Yuri", rowId: ".yuri"},
	]
    },
]





const listMessage = {


  text: teks,


  footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',


  title: `❏––––[ *NSFW* ]–––`,


  buttonText: "- -NSFW- -",


  sections


}


//--------------------------------

//------------ CASE NSFW ! ------------
  try {
    if (/(nsfw|hentai)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {

case 'ahegao':
        if (ahegao == true) { 
	    if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ahegao' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break

case 'anal':
         if (anal == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'anal' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break

case 'ass':
         if (ass == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(tres + 'ass')).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'bdsm':
         if (ass == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(tres + 'bdsm')).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'blowjob':
         if (blowjob == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          conn.sendButton(m.chat, tekk, fot, bj.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'cums':
         if (cums == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(tres + 'cum')).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ecchi':
         if (ecchi == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ecchi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
case 'ero':
         if (ero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ero' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'erofeet':
         if (erofeet == true) {
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'erofeet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'erogirl':

         if (erogirl == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'lewdanimegirls' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'holoero':
         if (holoero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'holo' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'erokitsune':
         if (erokitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'erok' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'eroneko':
         if (eroneko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'eron' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroyuri':
         if (eroyuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'eroYuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'feet':
         if (feet == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(zres + 'foot' + zapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'femdom':
         if (femdom == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(tres + 'femdom')).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'futanari':
         if (futanari == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'futanari' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'girlsolo':
         if (girlsolo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'solo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'hentai':
         if (hentai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hentai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holo':
         if (holo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hololewd' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kitsune':
         if (kitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'kitsune' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kuni':
         if (kuni == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'kuni' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'loli':
         if (loli == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'loli' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'manga':
         if (manga == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'manga' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'milf':
         if (milf == true) { 
         if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'milf' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'mstrb':
         if (mstrb == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(tres + 'mstrb')).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'neko':
         if (neko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let nk = await(await fetch(`https://api.waifu.pics/nsfw/neko`)).json()
          conn.sendButton(m.chat, tekk, fot, nk.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'oppai':
         if (oppai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'sideoppai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'panties':
         if (panties == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(zres + 'panties' + zapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'pussy':
         if (pussy == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'pussy' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'spank':
         if (spank == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'spank' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tentacles':
         if (tentacles == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(zres + 'tentacles' + zapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tits':
         if (tits == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'tits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'thighs':
         if (thighs == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'thighs' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'trap':
         if (trap == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'uniform':
         if (uniform == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'uniform' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'waifu':
         if (waifu == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'yaoi':
         if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yaoi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

case 'yuri':
       if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let yr = await(await fetch(`https://raw.githubusercontent.com/VarrelKun/data/main/nsfw/yuri.json`)).json()

          conn.sendButton(m.chat, tekk, fot, yr, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break

default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }

        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)

               switch (_type) {
           case 'A':

               break

           case '':
            
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`⋮☰ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['nsfw <type>', 'hentai <type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw|hentai)/i

export default handler
