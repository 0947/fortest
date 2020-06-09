/*CMD
  command: /eyuwd
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️እየሱሴ እወድሀለሁ❤️\n\n   እየሱሴ እወድሀለሁ/2x\n   አባብዬ አፈቅርሀለሁ/2x\n\nበፃድቃኖች መንገድ መራኸኝ\nበከበረ ስፍራ አስቀመጥአኝ\nየክብርህም ግርማ አሳየኸኝ\nእምነትህን ለኔ አስተማርከኝ\n\n     እየሱሴ አንተ አባቴ ነህ\n     እየሱሴ አንተ መንገዴ ነህ\n     እየሱሴ ለሞት ያልተውከኝ\n     እየሱሴ በፍቅር የወደድከኝ/2x\n\nያለ አንተ ኑሮ ከንቱ ነው\nመገኘትህ ካለ ሙሉ ነው\nአንተን ይዤ ምን ጎደለብኝ\nታምኜብህ መቼ አሳፈርከኝ\n\n በአንተ ታምኜ እኔ መች አፈርኩኝ\n  ጌታን ተከትዬ እኔ መች ከሰርኩኝ\n  ለዘላለም አባት የሆንክልኝ\n  ላንግስህ ላክብርህ ባንተ ህይወት አለኝ",msg)&Bot.editInlineKeyboard(b,msg)
