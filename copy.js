const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'dist', 'all');
const destPath = path.join(__dirname, 'all');

// 检查目标目录是否存在，如果不存在则创建
if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, {recursive: true});
}

// 复制文件
fs.copyFile(sourcePath, destPath, (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log('File copied successfully!');
    }
});
