//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dad04122a49867dffb830.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/53353f917aa29807b8a64.jpg,https://telegra.ph/file/9f7c67312af37da75d47e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9aOHQ3SkdZczlYejVXRThkb3ZlYnRZQVJkb0RXS1NuR3lFS1pWNmZXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTdVbjlvZW1DWDFYbXVFWXJwQ041aHhVbFJlTGJ2bEtsbU5yUW9FbjdSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR3RFbU5acUswM0pMNWVEVFJ6Qi9sQ1p2bmxBM1BNcnlZWDZQcEJBWFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2TENQS2xKZ0U3RllUVmxyVDYxQmlORmNyTjVXdHc1cVdxbTU0VVBvNFNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOQkVwZkpKa1BNallIMkd4ZG5ZNGFHVnVROTA1SGZTaFFpa29YLys5Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEwQ0lVMytRRkZCbmVDMStOZE1uRjZ5NmRZUldkdnBvN2daUVFOdGFLa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUprSktvOFN0eDM2RHl0VnZuKzJxZEhOdnRzazhYYTBWTzdPVXRuVVpHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid21sZk16L2VjU0ZPd2VwZU9SWkFUUGtkbit0VEI5MDNZZUJNQXBNRTBtVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpyOXpWU2FxOEZIeTNacXBDMXJTcTZKUU5mam01bzEzaXF1MVBQcGREeDhUdnNuWXZoTUh2WFRlbWpFbkViNldJQ3BwMUtwQ2VCVFpZckQ0WXRwa0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJMclMxdFd3U0ZLd1NtQytVSWNaeUptR0NFRlRWTjJMNkE5b0tGYm1ON1ZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyQk5vdTk2eFRoRzVrQlliMUFkSFJ3IiwicGhvbmVJZCI6IjY2MWM2MGM0LTNkNDUtNDk2Ni1hMDZkLTRmNjkyMmJmMWM1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJON2lVRTQvODhqc2c0dC93aEdnRzZWUGU2bk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzJqS0tXKzhyRnc1U1VXcGhwVWZOQXlOaFlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1QUjlTTUw3IiwibWUiOnsiaWQiOiIyMzM1OTE4NTY2MzA6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmbnp0Y0ZFSXFkc0xjR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVNUEdnL3RPZlRLZlFVZGRNV1ZCNzJZb1dIL3VTRXVFMktDZTNHU1IwMlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtoR0FjeFdpc3JIU0ZzWEp3Qm9EeXdwc1dKNkNYUkFyRTdLUkljc3BsSVZnQlJFTVc0SVh5U2Z1Rm5Yd2dJY3V1aU40MUVaUy9oK0FkMFV3ZXYyVkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqSCtuK3NrTkRkZFVhSEVvelRVZTRpQjhTdjBOeXlXR011TEY5U0IwUU9scTEwZEdmQU00YlVuQm0wUFE4K2x6OXBOeUkzNlN5V1Jwa1BxK1JmMTZDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5MTg1NjYzMDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYakR4b1A3VG4weW4wRkhYVEZsUWU5bUtGaC83a2hMaE5pZ250eGtrZE5tIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NzQ2MjY1fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD™`",
  author: process.env.PACK_AUTHER || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  packname: process.env.PACK_NAME || "♡ Ɓ Ӈ ƛ Ɗ Ɗ Ƈᴸ ᴼ ᴿ ᴰ",
  botname: process.env.BOT_NAME || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  ownername: process.env.OWNER_NAME || "BADBOI HACKER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
