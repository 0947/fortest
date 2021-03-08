/*CMD
  command: /sm19
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
[{title:"ተመለስ",command:"/mztxt2"}]
]

Bot.editMessage("❤️መጽናኛችን❤️\n\nመጽናኛችን መንፈስ ቅዱስ የእውነት መንፈስ\nዛሬም ነገም ለዘልአለም ቅዱስ/6/\n\nከፍቅር በላይ ነው ለእኛ ያለህ ጌታ\nመንፈስ ቅዱስን ላክ እንድንበረታ\nአረስርሰህ ያዝከው ነፍሳችንን\nማንም ያላየውን እኛ ግን አየን /5/\n\nወዳጅ እንደሌለው አልተዋችሁም ያለው\nለካ ሊያበረታን ሊያረገን ነው ህያው\nሁሌም በልቡ ውስጥ እኛን ተሸክሞ\nበፍቅሩ አዋደደን በመንፈሱ አትሞ/5/\n\nይህንንም ሁሉ ላረገው ቸር አባት \nይኸው ዝማሬያችን ይሁንለት መስዋዕት\nአሁንም አብዛልን ጌታ ጨምርልን\nአፍስስ መንፈስህን ያ መጽናኛችንን /5/\n\nአልፋና ኦሜጋ ፍጻሜ የሌለው\nየዘላለም አምላክ እየሱስ አንተ ነህ\nአባት ሆይ  ልጆችህ ምስክሮች ነን\nአንተው በሰጠኸን መንፈስህ ተሞልተን /5/",msg)&Bot.editInlineKeyboard(b,msg)
