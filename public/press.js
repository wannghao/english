const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function compressImage(inputPath, outputPath, quality = 85) {
    sharp(inputPath)
        .jpeg({quality: quality})
        .rotate()
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(`压缩图片 ${inputPath} 时发生错误:`, err);
            } else {
                console.log(`图片 ${inputPath} 已成功压缩并保存到 ${outputPath}`);
            }
        });
}

function compressImagesInFolder(folderPath, outputFolder, quality) {
    // 确保输出文件夹存在
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    // 读取文件夹中的所有文件
    fs.readdirSync(folderPath).forEach(file => {
        const inputPath = path.join(folderPath, file);
        const outputPath = path.join(outputFolder, file);

        // 仅处理图片文件
        if (file.toLowerCase().match(/\.(jpg|jpeg|png)$/)) {
            compressImage(inputPath, outputPath, quality);
        }
    });
}

// 示例用法
const inputFolderPath = './all';
const outputFolderPath = './pressAll';
const compressionQuality = 85;

compressImagesInFolder(inputFolderPath, outputFolderPath, compressionQuality)

const _inputFolderPath = './secondAll';
const _outputFolderPath = './pressSecondAll';

compressImagesInFolder(_inputFolderPath, _outputFolderPath, compressionQuality);


const _simulateinputFolderPath = './simulate';
const _simulateoutputFolderPath = './pressSimulate';

compressImagesInFolder(_simulateinputFolderPath, _simulateoutputFolderPath, compressionQuality);

const _pastexaminputFolderPath = './pastexam';
const _pastexamoutputFolderPath = './pressPastexam';

compressImagesInFolder(_pastexaminputFolderPath, _pastexamoutputFolderPath, compressionQuality);
