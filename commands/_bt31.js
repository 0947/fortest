/*CMD
  command: /bt31
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/mytig"}]]

Bot.editMessage("🌷    ኢየሱስ ናዝራዊ ናተይ    🌷\n\n1,ሽግር እንተመፀ ጭንቀት\nፀበባ እንተመፀ ስደት\nካብኡ ፍፁም ዘይፍለ\n\nተደ:ኢየሱስ ናዝራዊ ናተይ\nካብኡ ዝፈልያ መን'ዩ ንሕይወተይ\nኢየሱስ ናዝራዊ ናተይ\nካብኡ ዝፈልያ መን'ዩ ንሕይወተይ\nኢየሱስ ናዝራዊ ናተይ\n\n2,ፈዋሲ ሕሙማት\nዘንፅሐ ንለምፃማት\nብሓይሉ ዘተንስአ ምውታት\n\n3,ዓንጋሊ ጥሙያት\nኣርዋይ ፅሙኣት\nሰባኺ ወንጌል ንድኻታት\n\n4,ሓላይ ዘኽታማት\nመዋረዲ ግን ንዕቡያት\nክብረቶም ንትሑታት\n\ተደ: ኢየሱስ ናዝራዊ ናተይ\n\n          🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#1",msg)&Bot.editInlineKeyboard(b,msg)
