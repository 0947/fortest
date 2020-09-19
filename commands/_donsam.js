/*CMD
  command: /donsam
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
[{title:"✅አድሚኑን እዚሁ ለማናገር",command:"/fqadm"}],
[{title:"<-- ለመመለስ",command:"/faqsami M"}]]

Bot.editMessage(user.first_name+" 😊እኛን ለመደገፍ ስላሰቡ እጅግ እናመሰግናለን፡፡\n\n•የእኛን ፕሮጀግት ስፖንሰር ለማድረግ ከፈለጉ @barklgn ላይ ያናግሩን፡፡\n•በገንዘብም ቢሆን በሀሳብ በየትኛውም አይነት ወይንም ሁኔታ ሊረዱን ይችላሉ፡፡\n•እናመሰግናለን *CATHOLIC WEB*",msg)&Bot.editInlineKeyboard(b,msg)
