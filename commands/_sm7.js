/*CMD
  command: /sm7
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

Bot.editMessage("❤️ምንም የለን❤️\n\nምንም የለን እንዲሁ ነው የወደድከን\nምንም የለን በፍቅርህ አከበርከን\nምንም የለን ባንተ ያስወደደን\nምንም የለን አምላክ ሆይ ለክብርህ መረጥከን\n\nወደህ እንጂ ልባችንን ለማደርያህ\nያከበርከው በደምህ ዋጅተህ\nለክብርህ አላደረ አልሮጠ አልዋለ\nስትመርጠን መዳናችን በአንተ ሰመረ\n\nከእንጨት አይደል ወይ ከድንጋይ የተሰራው\nእየሱስ ሆይ የኛን አካል ማደሪያ ያረከው\nለአዲስ ኪዳንህ ማህተም የሆነ\nፃህል አርገው ልባችንን ጌታችን ሆይ ይኸው",msg)&Bot.editInlineKeyboard(b,msg)
