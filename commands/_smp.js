/*CMD
  command: /smp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
If you are sam kip you can broadcast photo to all bot users.

Now send me a photo with caption
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 982559801 ){
Bot.runAll({ 
command: "Phobro",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*photo has been sent successfully*")
}else{
Bot.sendMessage("*you are not sam kip*")
}
