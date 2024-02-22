const { SlashCommandBuilder } = require('discord.js');
const convertImageToAscii = require('../util/imgToAscii');
const {convertImageToASCII} = require("../util/imgToAscii");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
var getPixels = require("get-pixels")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('convert')
        .setDescription('Convert image sent as an attachment to ascii in greyscale')
        .addAttachmentOption(option => option
            .setName('attach')
            .setDescription('Attachment File')
            .setRequired(true)),
    async execute(interaction) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const file = interaction.options.getAttachment('attach')
        //in pixels.shape index 0 is width, index 1 is height
        getPixels(file.url, function(err, pixels) {
            if(err) {
                //handle erroneous file or URL
                return;
            }
            interaction.editReply(convertImageToASCII(pixels));
        });
    },
};