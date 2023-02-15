//welcome to Jamrock XD

let handler  = async (m, { conn }) => {
 /*await conn.relayMessage(m.chat, {extendedTextMessage:{text: global.wait, contextInfo: { externalAdReply: { showAdAttribution: true, title: '𝐶𝑅𝐼𝑊𝐼𝐿𝑂𝑃⚔𝐵𝑂𝑇࿐', body: ``, sourceUrl: ``, thumbnail: miniurl }}}}, {})*/
 conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'PEN',
      amount1000: 99999999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: botname,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}

handler.command = /^pay$/i
export default handler
