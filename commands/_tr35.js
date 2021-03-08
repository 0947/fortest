/*CMD
  command: /tr35
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

Bot.editMessage("❤️ያዳነኝ❤️\n\nያዳነኝ ታዳጊዬ የዘለዓለም መኖሪያዬ \nእግዚአብሔር /2/ ነው ማደሪያዬ /2/ (2)\n \nውስጤም ረካች በማግኘትዋ \nበሆነላት ሙሉ ህይወትዋ \nሌላ አልሻም ዞር እላለሁ \nህይወቴን በልጁ አግኝቼአለሁ (2)\n \nያዳነኝ .......\n \nከበደሌ በበዛ ምህረቱ \nበማያቋርጠው ፍቅሩ \nአድኖኛል መዳኛዬ \nሆኖልኛል መሸሸጊያዬ (2)\n \nያዳነኝ ......\n \nምሮኛል በምህረቱ \nአድኖኛል በማዳኑ /2/ \nይክበር እግዚአብሔር ነው ለዘለዓለም \nመቼም ቤቴ ነው አርፌበታለሁ \nይክበር እግዚአብሔር ለዘለዓለም \nማረፌያዬ ነው አርፌበታለሁ",msg)&Bot.editInlineKeyboard(b,msg)
