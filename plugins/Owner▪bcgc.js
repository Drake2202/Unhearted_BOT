import fs from 'fs'

let handler = async (m, { conn, text } ) => {
  if (!text) throw 'Ingrese un texto para enviar el anuncio a todos los grupos'
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": catalogo }, "title": `π’πππππππ ππ ππππππ’`, "description": "Unhearted", "currencyCode": "USD", "priceAmount1000": "200000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
  let teks = `\t\t\t\t*Anuncio | grupos*\n\n${text}`
  for (let id of groups) {
  await conn.sendMessage(id, { text: teks, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fproducto })
  }
  conn.reply(m.chat, `β *_El anuncio se envΓ­o a -${groups.length}- grupos!_*`, m)
}

handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc)$/i

handler.owner = true

export default handler
