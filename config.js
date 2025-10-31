const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZBbUt6NGlkMnJBKzRoNUdob3U4UFhaUFFSbVJVSHhhTmJhNEhGMjNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW1TL0VGNjhjQlIxWXRFSGJmTDhLdmk1T2dPQjl3eWdzRVQycDlSVEVUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRTdsMFJzSUFRNjJjVXRaQnFuMS9tZXRxU21RMG9pOEhqMUVFVXg2dlVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTjY0aUJlWDBKMWN5N1h1ZTB5RUpHangxVXZGOThra2VURHdOVUlKL1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDZW92a2tMdDUxWmN3cktPNG9zM0c5a2xIdFB6emJYa1lTblUrakVHRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR4eDNtdGtzd25zYVZqRk9INXFib0FpbndycUkyVWlHRnk0dWlOTlJOMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUIyS2hHeW5KT1pXdEVQV2RXNldBSjNLTklvdHJYS3Q4YkNUQ1J5VGYzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9rSE9jdUUxSG52ODYxSTlmYk5heGZpdXZJSU1RK1R4OEllRFNoODF5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVV21XZXU3M3dKU3BQOEMxcjBQY1Z0UVQ5V1ZtZ2xjNDQ4OGczSTUvM2F1TDh6dmFaUWFFYzF2RTdZQ3hZMFhtSTJFbk5OSE9mRFNXR0lJb0V3OWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6Ii8xL1lmMEJOaEdEb29UZ1FYK0ZwQzB1bTRGSDhnWlhvNWViV1ZCeFBsYkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5NQjJKSk1aIiwibWUiOnsiaWQiOiI5MjM3MDE2MTcyNTg6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmPzKTwnZmd6q+t2Lkg8JOGqcuQzaLwnZCIz7vMiMyQ8J2QgOG3jfCdkI3wk4ap44CGzY4g8JKJvfCSib0gIPCSib0gIPCSib0gIPCSib0gICDwkom9ICDwkom9ICDwk4apxKvWn+GNnc2cxKvGnsy96q2Y4bO4yarMvfCdkIPJm82izL3JvCIsImxpZCI6IjE5NDQ5ODIzMTUzMzYyNzo2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHE5dllRRUVLUDVrY2dHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMkNqTlQrM1N3eUxHK1VyRlFDZDN0eXRHZXNLaTdkbXhSaUF4QlB6WFFScz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0g4NkxVZVlLdDNaclZCS2NhZC9MNlczUEFKNlgxNVpicGNtME14SllmRzR3eU1HZjhVOEQybFV4VGdJZUs4SnF1Q0dXdTRNN2RiY3FwRTgzTmdPRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IllIb3dGYm0rbjNENXNzZGtZT21aUU51dTZDUzI4UlUwYTkxQnF2YkxMSThLT1Q3UW5LYjFsZmtUYjZyWno1eFc0UmJaMVhLSUFEQi83M0ZVSmhzdWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNzAxNjE3MjU4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGdvelUvdDBzTWl4dmxLeFVBbmQ3Y3JSbnJDb3UzWnNVWWdNUVQ4MTBFYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxOTAxNzM1LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJOZiJ9GzuMmqzL3wnZCDyZvNosy9ybwiLCJsaWQiOiIxOTQ0OTgyMzE1MzM2Mjc6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxOXZZUUVFSi9Ba2NnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJDak5UKzNTd3lMRytVckZRQ2QzdHl0R2VzS2k3ZG14UmlBeEJQelhRUnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldJR0gzYjAyRWRxTzl4TE5GdFUvWW5NZVlWenNjL25UWW9ZMTA3YUFCYU5YSmJCSGVRS3kraW95MWtyQ2FKVEZoaVZvMGE4NzJFNzJQT2VpYWd4WEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5NUtrTnpNL3BBY0hMNFpSME5YTGdtWWRxZGpxK25qa0NzMUpYVjFiR1VXWEFwSlp5NVVTaXJXb2VUYkhlb01nNG0xK3hseU5Ua01jd0Y4UzZoMmRoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcwMTYxNzI1ODo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRnb3pVL3Qwc01peHZsS3hVQW5kN2NyUm5yQ291M1pzVVlnTVFUODEwRWIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTg5NDQzNCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCTmYifQ==GzuMmqzL3wnZCDyZvNosy9ybwiLCJsaWQiOiIxOTQ0OTgyMzE1MzM2Mjc6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtOXZZUUVFTytRa2NnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJDak5UKzNTd3lMRytVckZRQ2QzdHl0R2VzS2k3ZG14UmlBeEJQelhRUnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlY1eTRWdEtqNVFnVHRtakhoeTZObld0QmtwdGQvc01pdTRSazkxZTBvVGF0N3o0cjhwRnVIUlgrUTZubHlSenZKcXV2Y3JwN1prdlMwVTZpcHp5TURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2dlEzUXhMOXZvSFFLVi9aWTA0Q2d0M1Erb2VzMXZjazBzZXIvQWxPeVVYVUlnZkhxMTFpOXp6NisveDZZSWtRb3gvazkxQ2tIVzdjeTdBQVdtVmFodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcwMTYxNzI1ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRnb3pVL3Qwc01peHZsS3hVQW5kN2NyUm5yQ291M1pzVVlnTVFUODEwRWIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTg4ODM3MSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYzcifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
AUTO_CHATBOT: process.env.AUTO_CHATBOT || "true", 
// "true" = default ON, "false" = default OFF
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://postimg.cc/Mvh26Y3B",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923303788282",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙏̤𝙝꯭ع 𓆩ː͢𝐢ϻ̈̐𝐀᷍𝐍𓆩*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://postimg.cc/Mvh26Y3B",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "truee",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923303788282",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
