/*CMD
  command: /xefr
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
[{title:"ተመለስ",command:"/xekidus"}]
]

Bot.editMessage("❤️ የቅዱስ ፍራንቺስኮስ ፀሎት ❤️\n\nጌታ ሆይ! እኔም የሰላም መሣርያ እንድሆን አድርገኝ።\n->ጥል ባለበት ፍቅር\n->በደል ባለበት ይቅርታ\n->ክርክር ባለበት ስምምነት\n->ጥንጣሬ ባለበት እምነት\n->ስትተት ባለበት እውነት\n->ሀዘን ባለበት ደስታ\n->ጨለማ ባለበት ብርሀን\n✨እንዲገኝ ለማድረግ አብቃኝ።\n\nጌታ ሆይ!\n->ከመፅናናት ማፅናናት\n->ከመግባባት ማግባባት\n->ከመወደድ መውደድ\n->ከመቀበል መስጠት\n->ይቅር ከመባል ይቅር ማለት\n✨የዘለአለም ህይወት ለማግኘት መሞት እንዳለብኝ ለማወቅ እርዳኝ \n\n🙏🏽አሜን🙏🏽",msg)&Bot.editInlineKeyboard(b,msg)
