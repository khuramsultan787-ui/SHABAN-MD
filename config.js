const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05vc3pUNy80cDFwRjFYR2szbjNCS3ZXYjU1emN0bDY0STVmcWF5L0NXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2pxdVVYQzdjY3dCdGNVb1g0MTlrYjZ6clpGMzRiL25pVERoWmpmVW56dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTHNGdytRU3BPTnVwT2Z5cDVDa1ZpeG1RZkF4THJlYWZ2dG5GK2szRG1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZXd3SEVINFdXbEhqd0ViQ0hBc2xBWG5ZUWJTLzBxOUFkOEVkL3Bvb0RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHL3VDQU1vN2NDWXVmVks5bUlQUVdJVE9XeXpaaTZjVFNZYWVzSEdFR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRGSThVWS9pUlRPTkF6bGVaQS82QXZGWnFaQkd3QTlSa2FjcEx2VDN0UWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlROUVJMzVuM2RQdzRWc2M5bWxtWTJMbmpBVUlGWXZ0dDJHcHgxOUhtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTJxVVJKVFd0Qy9ZRjFIYldsV3JlSnArUGVwTFdiY3dETXUyQitOaTJEWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFjckVnTlFKaWFQU0RvLzBYU1Jkc0RRRWlEU2wrN2R2U2lkbmErZzROTVRERlJuWGpyRVkwRkZ4WXhaWkloU0VIWElWNmNFalIrc3BYeitiNm1JVmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJ1QXQySWJCY055OHFTUFppV2RsWlBiQ1cySEFqV0Z0MTVuVEtOaDQ0RTlvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQREpBVEdXMiIsIm1lIjp7ImlkIjoiOTIzNzAxNjE3MjU4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zj8yk8J2Zneqvrdi5IPCThqnLkM2i8J2QiM+7zIjMkPCdkIDht43wnZCN8JOGqeOAhs2OIPCSib3wkom9ICDwkom9ICDwkom9ICDwkom9ICAg8JKJvSAg8JKJvSAg8JOGqcSr1p/hjZ3NnMSrxp7MveqtmOGzuMmqzL3wnZCDyZvNosy9ybwiLCJsaWQiOiIxOTQ0OTgyMzE1MzM2Mjc6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtOXZZUUVFTytRa2NnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJDak5UKzNTd3lMRytVckZRQ2QzdHl0R2VzS2k3ZG14UmlBeEJQelhRUnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlY1eTRWdEtqNVFnVHRtakhoeTZObld0QmtwdGQvc01pdTRSazkxZTBvVGF0N3o0cjhwRnVIUlgrUTZubHlSenZKcXV2Y3JwN1prdlMwVTZpcHp5TURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2dlEzUXhMOXZvSFFLVi9aWTA0Q2d0M1Erb2VzMXZjazBzZXIvQWxPeVVYVUlnZkhxMTFpOXp6NisveDZZSWtRb3gvazkxQ2tIVzdjeTdBQVdtVmFodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzcwMTYxNzI1ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRnb3pVL3Qwc01peHZsS3hVQW5kN2NyUm5yQ291M1pzVVlnTVFUODEwRWIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTg4ODM3MSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYzcifQ==",
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
