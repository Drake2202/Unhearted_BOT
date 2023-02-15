let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let user = global.db.data.users[m.sender]
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
/*var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*-Solo asuntos importantes-*`
let buttonMessage= {
'document': { url: `https://github.com/Drake2202/Unhearted_BOT` },
'mimetype': `application/${document}`,
'fileName': `𝐶𝑅𝐼𝑊𝐼𝐿𝑂𝑃⚔𝐵𝑂𝑇࿐`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Drake2202',
'mediaType': 2,
'previewType': 'pdf',
'title': botname,
'body': `Unhearted`,
'thumbnail': global.imgmenu,
'sourceUrl': 'https://wa.me/573244488043' }},
'mentions': [m.sender],
'caption': texto1,
'footer': `\n${global.saludo}`,
'buttons':[
{buttonId: `${usedPrefix}owner`, buttonText: {displayText: 'Owner🐢'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ī.am/Unhearted/ღᴀ;;;\nFN:ī.am/Unhearted/ღᴀ\nORG:ī.am/Unhearted/ღᴀ\nTITLE:\nitem1.TEL;waid=50499698072:+50499698072\nitem1.X-ABLabel:ī.am/Unhearted/ღᴀ\nX-WA-BIZ-DESCRIPTION:🎉Creador oficial de 𝐶𝑅𝐼𝑊𝐼𝐿𝑂𝑃⚔𝐵𝑂𝑇࿐.\nX-WA-BIZ-NAME:ī.am/Unhearted/ღᴀ\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ī.am/Unhearted/ღᴀ', contacts: [{ vcard }] }}, {quoted: m})
}
handler.tags =['info']
handler.help = ['script']
handler.customPrefix = /^(@50499698072)$/i
handler.command = new RegExp
export default handler
