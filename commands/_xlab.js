/*CMD
  command: /xlab
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹ዘለአለማዊ አባት ሆይ ኃጢአቶቼን ደምስስልኝ -- የቅድስት ቤተክርስቲያን ችግሮች አቃልል እያልኩ በጌታችን በኢየሱስ ክርስቶስ ክቡር ደም እለምንሀለሁ። ዘለአለማዊ አባት ሆይ ስለ ኃጢአታችን ይቅርታ -- ስለ ንሰሀ ቦታ ነፍሶች እረፍት -- ስለ ቅድስት ቤተክርስቲያን ደህንነት -- ስለ አለም ሰላም -- ስለ ሀጥያተኞች ምህረት እንዲገኝ በጌታችን በኢየሱስ ክርስቶስ በደሙ በህማማቱ በሞቱ እንለምንሀለን።",msg)&Bot.editInlineKeyboard(b,msg)
