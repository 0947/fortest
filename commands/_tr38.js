/*CMD
  command: /tr38
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

Bot.editMessage("❤️ላመስግንህ❤️\n\nላመስግንህ አንተ ምስጋናዬ ነህ \nላወድስህ ክበር እግዚአብሔር \nበምድር በሰማይ /2/\n \nእንዲሁ አልገልፀው ባንተ የሰመረልኝ \nያደረክልኝ የሆንክልኝ (2)\n \nቢሆንም ዝም አልልም \nምስጋና አላጓድልም (2)\n \nአድርገሀል አመልክሀለሁ \nስለ ስጦታህ አመሠግናለሁ \nተባረክ /3/ እላለሁ \nተወደስ /3/ እላለሁ\n \nብዙ ሆኖልኝ እልፍ አይቻለሁ \nአንዳች ሳይነጥፍ አመሠግናለሁ \nተመስገን /3/ እላለሁ \nተወደስ /3/ እላለሁ\n \nላመስግንህ ......",msg)&Bot.editInlineKeyboard(b,msg)
