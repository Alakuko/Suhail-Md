const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZkeGZPY0l4RVpBREVPZjQ0djRrUGx3eUdpMGV5aXJsQjhrVTNzeHZjUWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZBY2Jibkp0VHUyZTFXb2xFX2NQMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzUwOGFkMTItODkxMi00ZDEwLWIzMDctMDc2YjA4MjFhOGQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTE1LFxuICAgICAgMjA3LFxuICAgICAgMjM4LFxuICAgICAgOTAsXG4gICAgICAyMSxcbiAgICAgIDE3MixcbiAgICAgIDIzMCxcbiAgICAgIDIwMyxcbiAgICAgIDEyOSxcbiAgICAgIDE5NSxcbiAgICAgIDQwLFxuICAgICAgMTY1LFxuICAgICAgOTgsXG4gICAgICAyMTQsXG4gICAgICA0NSxcbiAgICAgIDQ0LFxuICAgICAgNzYsXG4gICAgICA5LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMjA4LFxuICAgICAgMjA2LFxuICAgICAgMTYxLFxuICAgICAgMTEzLFxuICAgICAgMTM0LFxuICAgICAgMTM5LFxuICAgICAgMTM0LFxuICAgICAgOSxcbiAgICAgIDIwMixcbiAgICAgIDEyMixcbiAgICAgIDU3LFxuICAgICAgMTEyLFxuICAgICAgNzgsXG4gICAgICAxNDEsXG4gICAgICAxNDUsXG4gICAgICA5NSxcbiAgICAgIDEwMyxcbiAgICAgIDk1LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzRWU1dFUFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzgzOTI3NzA6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NDUyOTM2MDc5Nzc3ODo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdXd0UG9GRUsvam5yUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImp1NlVhOFNKVE1obE5uYk92ZDV4andWQ0F4cDhVQVQ4YmUrek4vR2JGV1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY2pkSU1kR0F0RlVmUTFFMXZBcGp2MitSRDlVd1hzNDdzbkF3LzdpRmVKa3VrK05lbHF5WFF5MCtrQjArTjBJaTRrYW82dGRxQzZKQVF6VEtGL3J2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWdkdUlJM04zUVlQSFMzTmhSMTNlalkwcDhYZTZPekdva1Z3UlIza0wvNWJ2b0Jkc3dqbGlNd3hXREI3K0pxak1lZHlKUHJocnRGaC9COEFvUkpyRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzODM5Mjc3MDo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY4ODgxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
