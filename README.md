# Img-to-ASCII-Discord-bot
A very simple bot that converts images uploaded with a slash command to grayscale and generates ascii art.

![image](https://github.com/MRajczyk/img-to-ascii-discord-bot/assets/103463343/2101f446-07a3-4677-a163-f3916de9a436)
![image](https://github.com/MRajczyk/img-to-ascii-discord-bot/assets/103463343/0ec3f42a-b0c4-4da7-a759-d1e496921f62)

## DISCLAIMER
Since figuring out that Discord only supports a maximum of 2000 characters in a single message the project is on hold while I'm debating on its future.<br>
<br>
Atm. only images that have less than 2k pixels in total (ex. 40px * 50px) are properly handled by the bot. <br>
I haven't yet tested the maximum width that doesn't result in the text not being split to the next line.

## How to install and run project:
1. Clone the repo
2. Create **_.env_** file with the following variables appropriate to your Bot Token and Server's guild id:  
```
GUILD_ID=
CLIENT_ID=
```
3. Install dependencies:
```
npm install
```
4. Run the following command to deploy slash command
```
npm run deploy-commands
```
5. Run the bot
```
npm run start
```
