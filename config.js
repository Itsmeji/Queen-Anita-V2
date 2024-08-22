//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0h4LzBITjN1Ti8vZ1E4eS9OVFMxekRya0lvSVRsaUc4dk9MZXN5T09uRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBqMnpCOFk1anZkQzlZeEZMbVIxVjI2bVFTVzZYcFBKalFwYWpreG1TUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTmlKcDdPeVdBWXZRdFpnbml4Z0Y2WW05TnVaNkF3U01odGpwOERHUjFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQMmNnQ0FCU2cvak5MaTJiTGo0MVJFb2d6amZGc1pubVhuV2NvcDRrS0NBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJK1JWbldFd2l2K2Q2ME9iTkhtcjRZd0R0bit1b2pEUy9pODVNaG1ZRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktjWjFGeUFCdzZBT1hIbllBSWptc1JNUjNSOVRPd0NoSzJzMVQ1UHVyaUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxJMVRKQTNJaW9mMjRFVkNhN0hnUFpjNWdCczUrVFRFYlJBQ2p1Nk4yOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEdRUmI3RGlZL1Z3cThiRzZ1d3R2TXEzNGFkMFhHUzNUbFozNldsUGoxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdYbkZ2cHE5SDhnYlI5aEJwa0hQMTkxWVdTdWM0bEVwVlQxOEZJMXF0OUx0aDhOeHFwdGNhQS9NOGxBV3hIQlowWS9DQ3pIb2wzM2tUVEw1aVFqSkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJnY2JKa3kxTjR4VHlRdndXdDBZTFJBbUQvbmpsOUFiSE04aUZ3Z2lETlBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MjA1NTg0NzIwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3Mjk4MUVENEE5MzBEOTMzRDhCQTMwODE1NTE3QjAyOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MzE1NTgyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDIwNTU4NDcyMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTcwQjc1M0Q4QjhGMjM1Qzk2NURBNkQzMzYxMjBCQjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDMxNTU4M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoic0lpR09lQnVURDY4T1BOcmFCYTFwQSIsInBob25lSWQiOiIyMGFjYmVkOS05OGNlLTRiODktOTM1OC02MDJmMzgyMWI4MzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUd4aVdMY2tVcVREVHhlWDYwSm1uUlN5QzU0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh1K0dBWXR6YTBFbnIwL25tL1lvUzlQaWVDWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKWTJKRDY3VyIsIm1lIjp7ImlkIjoiMjQyMDU1ODQ3MjAyOjUzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnjgI4g8J2VuPCdlobwnZaZ8J2WhvCdlpfwnZaK8J2WkeKAovCdlazwnZaV8J2WlPCdlpHwnZaR8J2WnvCdlpTwnZaTIOOAjyDwk4aqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSzQyNWdDRUszdm03WUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIveFg2THNDVzI2aGZPcU9jWHNHSDRqRHl1aGRUUzhyNllyRVNkdEJPSUg4PSIsImFjY291bnRTaWduYXR1cmUiOiJyVGZSWE5COVVCeUJ6VlhoVmhrdEdXb0ZkaEFEZEpCWG1jK1pYOHdqSGVjL2x2ZVhnNlJYWmpCMnZMRDVVVGpieXVDQWRLbnMvM1pybFJIWjIrK0pBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid1VIUENRT2Y1MGloZmZwMHlQSlJtTGFEb0hrYTRzaExObGRpcytWdlZGVnIzQS92Y3MrVS9MVlBYS2VhMFdNY1kvbnBYc3BYUUJGdEVPZmdxc1l1Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNTU4NDcyMDI6NTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjhWK2k3QWx0dW9YenFqbkY3QmgrSXc4cm9YVTB2SyttS3hFbmJRVGlCLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDMxNTU3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMY3oifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
