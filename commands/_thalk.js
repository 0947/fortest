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
[{title:"🔇የክቡር አባ ምስራቅ[ዶ/ር] CD📀",command:"/aud"}],
[{title:"🔇የኢየሱስ ወንድም እና እህቶች",command:"/brvs"}],
[{title:"<--",command:"/mych"}]]

Bot.editMessage(user.first_name+" የሚፈልጉትን አስተምህሮት አሰናድተናል ከታች ባለው button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
