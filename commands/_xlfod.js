/*CMD
  command: /xlfod
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

Bot.editMessage("🔹(ከምግብ በፊት) =>ጌታ ሆይ ባርከን -- ልጆችህነን -- ይህንንም ምግብ ባርክልን -- ለተራቡትም ምግብ ስጣቸው -- አሜን።\n🔹(ከምግብ በኋላ) =>ጌታ ሆይ ስላደረክልን መልካም ነገር ሁሉ እናመሠግንሀለን ነፍሳችንን በሠላም ጠብቃት -- ልባችን ለዘለአለም ሲያመሰግንህ ይኑር -- አሜን።\n🔹(ምስጋና) =>ለዘለአለም የምትኖርና የምትነገስ ሁሉን የምትችል አምላክ ሆይ በመልካም ስራዎችህ ሁሉ እናመሰግንሀለን።",msg)&Bot.editInlineKeyboard(b,msg)
