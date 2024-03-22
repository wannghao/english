#!/bin/bash

# 在脚本中加载nvm
. <path_to_nvm_directory>/nvm.sh

# 切换到Node.js版本18.17.0
nvm use 18.17.0

# 检查是否切换成功
if [ $? -eq 0 ]; then
    echo "Node.js version 18.17.0 switched successfully."
else
    echo "Failed to switch to Node.js version 18.17.0."
    exit 1
fi

# 执行press.js脚本
node press.js

# 切换回Node.js版本16.20.1
nvm use 16.20.1

# 检查是否切换成功
if [ $? -eq 0 ]; then
    echo "Node.js version 16.20.1 switched successfully."
else
    echo "Failed to switch to Node.js version 16.20.1."
    exit 1
fi

# 完成
echo "Node.js versions switched successfully."
