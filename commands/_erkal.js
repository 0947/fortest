/*CMD
  command: /erkal
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

Bot.editMessage("❤️እ/ር ካለ❤️\n\nእግዚአብሔር ካለ /2/ ምን የማይሆን አለ\nየኛ ጌታ /ካለ /2/ ምን የማይሆን አለ\n\nባዶ ሸለቆ ይሞላል \nውሃ ከአለት ውስጥ ያፈልቃል \nእርሱ እኮ ታምረኛ ነው \nይችላል ሁሉም በእጁ ነው/2/\n\nተስፋ የሰጠን አምላክ እርሱ የታመነ ነው\nእንዳለው ያደርጋል እንደ ተናገረው \nየፈርኦን ዛቻ አያሸብረንም \nየጠራን እኮ አምላክ እርሱ አይተወንም \n    እግዚአብሔር ካለ ...\n\nአንዲት ቃል ይናገር እርሱ ይበል እንጂ \nሁሉም ይከፈታል የተዘጋው ደጅ \nምርኮን እንወርሳለን ከባእዳን ምድር\nቅኔ እንቀኛለን ለእግዚአብሔር ክብር \n\nእተማመናነዋለሁ /3/ሲረዳኝ ስላየሁ\nእተማመናነዋለሁ /3/ ሲያግዘኝ ስላየሁ \n\nእርሱን ተማምኜ \nእኔ አፍሬ አላውቅም \nጌታ እንደ ቃሉ ነው አያወላውልም \nየተናገረኝን ሲያደርግ አይቻለሁ \nዛሬም እንደ ጥንቱ እታመነዋለሁ /2/\n   እተማመነዋለሁ ......}",msg)&Bot.editInlineKeyboard(b,msg)
