/*CMD
  command: /dstlm
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️ደስታ ለአለም❤️\n\nደስታ ለአለም መጥቷል ምድር ተቀበይው x2\nልባችሁን አዘጋጁ ሰማይ ምድር x2\nበአንድነት ዘምሩ መዝሙር ለህፃኑ x2\n\n1⃣ ደስታ ለአለም አዳኝ ነግሷል ሰዎች ዘምሩለት \nየአለም ሜዳ ተራራውም ደስታውን ይናገር \nምድርም ትሸበር ምድር ምድርም ትሸበር \n\n2⃣ሀጥያት ይድቀቅ ሀዘን ይራቅ ምድር ከእሾህ ትራቅ \nበረከቱን ሊያፈስ መጥቷል መርገምንም ሊሽር x3\n\n3⃣የዓለም ገዢ ጻድቅ ፈራጅ ሕዝቡን ሊያገለግል \nየክብሩ ሀይል የጽድቁም ምንጭ \nፍቅር ከላይ ወርዷል ፍቅር ከላይ ወርዷል \nፍቅር ፍቅር ከላይ ወርዷል",msg)&Bot.editInlineKeyboard(b,msg)
