/*CMD
  command: /myin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid;
Api.getChatMember({
chat_id:"@catholicb", user_id: id, on_result :"/engi"})
