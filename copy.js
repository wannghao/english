const fs = require('fs-extra');
const path = require('path');

const sourcePath = path.join(__dirname, 'dist');
const destPath = __dirname;

// 复制目录
fs.copy(sourcePath, destPath, {overwrite: true})
    .then(() => console.log('Directory copied successfully!'))
    .catch(err => console.error('Error copying directory:', err));