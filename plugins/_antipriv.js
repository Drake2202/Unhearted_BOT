/*α­₯πα­’βββββπΆππΌππΌπΏππβπ΅ππΰΏβββββα­₯πα­’
 ββ Created By https://github.com/Drake2202/Unhearted 
 ββ Unhearted
 β°ββββββββββββββββββββββ―*/

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (m.isGroup)
       return !1
    if (!m.message)
       return !0
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA'))
       return !0
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner) {
       await m.reply(`Hola *@${m.sender.split`@`[0]}*, estΓ‘ prohibido hablar al privado del bot serΓ‘s bloqueado.`, false, { mentions: [m.sender] })
       await this.updateBlockStatus(m.chat, 'block')
    }
    return !1
}
