/*CMD
  command: /xlsra
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("🔹አምላክ ሆይ ሣራችንን ሁሉ በመልካም አስጀምረህ በመልካም እንድታስፈፅመን እንለምንሀለን -- ፀሎታችንም ሆነ ስራችን ሁሉ ባንተ ተጀምሮ ባንተ እንዲያልቅ አድርግልን -- ባንድ ልጅህ በጌታችን በኢየሱስ ክርስቶስ እንለምንሀለን። አሜን",msg)&Bot.editInlineKeyboard(b,msg)
