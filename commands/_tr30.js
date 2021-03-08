/*CMD
  command: /tr30
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️ድንቅ ነህ❤️\n\nድንቅ ነህ እግዚአብሔር \nከምንልህ በላይ /2/ \nቻይ ነህ እግዚአብሔር \nከነገሮች በላይ /2/\n \nአከናወንክልን እቅዶቻችን \nተደላደለልን ባንተ አማረልን /2/\n \nተመስገን /3/ ተመስገን \nጌታ ተመስገን \nተወደስ /3/ \nጌታ ተወደስ (2)\n \nአላፈርንም በአንተ ታምነን \nአልወደቅንም ባንተው ተደግፈን /2/\n \nበስምህ ለምነን ምንም አላጣንም \nተመስገን /2/ ባንተ ሆነልን (2) \nተመስገን (2)",msg)&Bot.editInlineKeyboard(b,msg)
