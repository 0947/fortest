/*CMD
  command: /cef2
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
[{title:"BACK",command:"/enart"},{title:"HOME",command:"/myin"}]
]

Bot.editMessage("Gregory VI (1045-46)\n Clement II (1046-47)\n Benedict IX (1047-48)\n Damasus II (July-August 1048)\n St. Leo IX (1049-54)\n Victor II (1055-57)\n Stephen X (1057-58)\n Nicholas II (1058-61)\n Alexander II (1061-73)\n St. Gregory VII (1073-85)\n Blessed Victor III (1086-87)\n Blessed Urban II (1088-99)\n Paschal II (1099-1118)\n Gelasius II (1118-19)\n Callistus II (1119-24)\n Honori us II (1124-30)\nInnocent II (1130-43)\nCelestine II (1143-44)\nLucius II (1144-45)\nBlessed Eugene III (1145-53)\n Anastasius IV (1153-54)\nAdrian IV (1154-59)\nAlexander III (1159-81)\nLucius III (1181-85)\nUrban III (1185-87)\nGregory VIII (1187)\nClement III (1187-91)\nCelestine III (1191-98)\n Innocent III (1198-1216)\nHonorius III (1216-27)\nGregory IX (1227-41)\nCelestine IV (October-November 1241)\n Innocent IV (1243-54)\nAlexander IV (1254-61)\nUrban IV (1261-64)\nClement IV (1265-68)\nBlessed Gregory X (1271-76)\nBlessed Innocent V (January-June\n1276)\nAdrian V (July-August 1276)\nJohn XXI (1276-77)\nNicholas III (1277-80)\nMartin IV (1281-85)\nHonorius IV (1285-87)\n Nicholas IV (1288-92)\nSt. Celestine V (July-December 1294)\nBoniface VIII (1294-1303)\n Blessed Benedict XI (1303-04)\nClement V (1305-14)\nJohn XXII (1316-34)\nBenedict XII (1334-42)\nClement VI (1342-52)\n Innocent VI (1352-62)\nBlessed Urban V (1362-70)\nGregory XI (1370-78)\n Urban VI (1378-89)\nBoniface IX (1389-1404)\n Innocent VII (1406-06)\nGregory XII (1406-15)\n Martin V (1417-31)\nEugene IV (1431-47)\nNicholas V (1447-55)\nCallistus III (1455-58)\nPius II (1458-64)\nPaul II (1464-71)\nSixtus IV (1471-84)\nInnocent VIII (1484-92)\nAlexander VI (1492-1503)\nPius III (September-October 1503)\nJulius II (1503-13)\nLeo X (1513-21)\nAdrian VI (1522-23)\nClement VII (1523-34)\nPaul III (1534-49)\njulius III (1550-55)\nMarcellus II (April 1555)\nPaul IV (1555-59)\nPius IV (1559-65)\nSt. Pius V (1566-72)\nGregory XIII (1572-85)\nSixtus V (1585-90)\nUrban VII (September 1590)\nGregory XIV (1590-91)\nInnocent IX (October-November 1591)\nClement VIII (1592-1605)\nLeo XI (April 1605)\nPaul V (1605-21)\nGregory XV (1621-23)\nUrban VIII (1623-44)\nInnocent X (1644-55)\n Alexander VII (1655-67)\nClement IX (1667-69)\nClement X (1670-76)\n Blessed Innocent XI (1676-89)\nAlexander VIII (1689-91)\nInnocent XII (1691-1700)\n Clement XI (1700-21)\nInnocent XIII (1721-24)\nBenedict XIII (1724-30)\nClement XII (1730-40)\nBenedict XIV (1740-58)\nClement XIII (1758-69)\nClement XIV (1769-74)\nPius VI (1775-99)\nPius VII (1800-23)\nLeo XII (1823-29)\nPius VIII (1829-30)\nGregory XVI (1831-46)\nBl. Pius IX (1846-78)\n Leo XIII (1878-1903)\nSt. Pius X (1903-14)\nBenedict XV (1914-22)\nPius XI (1922-39)\nPius XII (1939-58)\nSt. John XXIII (1958-63)\nBl. Paul VI (1963-78)\nJohn Paul I (August-September 1978)\nSt. John Paul II (1978-2005)\nBenedict XVI (2005-2013)\nFrancis (March 13 2013)\n\nApostle succession. Early church\nfathers. And scripture",msg)&Bot.editInlineKeyboard(b,msg)
