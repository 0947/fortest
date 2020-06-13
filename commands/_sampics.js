/*CMD
  command: /sampics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let admin_text = "Pic From: "+ user.first_name
 let p=request.photo[0]

if(!p){
Bot.sendMessage("*No photo Found only phots are vaild here. Try Again with correctly*")
Bot.runCommand("/menu")
return
}
if(p){
let ADMIN = "@xexgbjnsjnjudxbjjdxSam"

Api.sendPhoto({chat_id: ADMIN,photo:p.file_id, caption: admin_text})
}
