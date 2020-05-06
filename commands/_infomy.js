/*CMD
  command: /infomy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = "";

var st = data.statistics;

msg="*Total* chats: " + st.total +
"\n*private* chats: " + st.user_chats_count +
"\n*groups* chats: " + st.group_chats_count +
"\n*super* groups chats: " +  st.super_group_chats_count 


Bot.sendMessage(msg);
