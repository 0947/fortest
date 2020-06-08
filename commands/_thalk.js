/*CMD
  command: /thalk
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
[{title:"🔇የ audio ትምህርቶች",command:"/aud"}],
]

Bot.editMessage(user.first_name+" የሚፈልጉትን አስተምህሮት አሰናድተናል ከታች ባለው button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
