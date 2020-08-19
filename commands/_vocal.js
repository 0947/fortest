/*CMD
  command: /vocal
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
[{title:"🗣በድምፅ የተደገፈ",command:"/vaud"},{title:"🗣ቮካል APP",command:"/vap"}],
[{title:"🗣የቮካል ሊንኮች",command:"/vlin"},{title:"🗣የቮካል Video",command:"/vvid"}],
[{title:"🗣ቮካል በፎቶ",command:"/vopic"},{title:"🗣Vocal Teacher",command:"/ptv"}],
[{title:"🗣የጥሩ ቮካል ውጤቶች ምሳሌ",command:"/pvoc"}],
[{title:"🔇About Vocal",command:"/abtvc"},{title:"✅Vocal Training",command:"/vctr"}],
[{title:"⬆️ወደ ዋናው ገጽ ለመመለስ⬅️ ",command:"/mych"}],
]

Bot.editMessage(user.first_name+" በዚህ button የቮካል ስልጠናዎች በዘማሪ ራዕይ ሳሙኤል ያገኛሉ መልካም ጊዜ",msg)&Bot.editInlineKeyboard(b,msg)
