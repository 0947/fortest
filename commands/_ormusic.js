/*CMD
  command: /ormusic
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b=[
[{title:"🌿COLLECTION", command :"/ormr"}],
[{title:"〽️Qusquwaam Maariyaami Girrisaa",command:"/ormusic2"}], 
[{title:"✅Deebi'ii", command :"/myor"}]]

Bot.editMessage("Fuula filadhuu",msg)&Bot.editInlineKeyboard(b,msg)
