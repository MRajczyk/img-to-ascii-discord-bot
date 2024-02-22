const ASCII_CHARS_BY_BRIGHTNESS = Array.from(`．－＇：，＝；＋！ｒｃ＊／ｚ？ｓＬＴｖ）Ｊ７（ＦｉＣｆＩ３１ｔｌｕｎｅｏＺ５Ｙｘｊｙａ２ＥＳｗｑｋＰ６ｈ９ｄ４ＶｐＯＧｂＵＡＫＸＨｍ８ＲＤ＃＄Ｂｇ０ＭＮＷＱ％＆＠`)
// const ASCII_CHARS_BY_BRIGHTNESS = Array.from(` .-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@`)

function convertImageToASCII(colorPixels) {
    let resultString= "";
    for(let i = 0; i < colorPixels.shape[1]; ++i) {
        for(let j = 0; j < colorPixels.shape[0]; ++j) {
            const greyscalePixel = 0.299 * colorPixels.get(j, i, 0) + 0.587 * colorPixels.get(j, i, 1) + 0.114 * colorPixels.get(j, i, 2);
            resultString += ASCII_CHARS_BY_BRIGHTNESS[Math.floor(greyscalePixel / 255 * (ASCII_CHARS_BY_BRIGHTNESS.length - 1))];
        }
        resultString += '\n';
        console.log(resultString);
    }
    return resultString;
}

module.exports.convertImageToASCII = convertImageToASCII;