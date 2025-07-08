// generateHtmlFiles.js
const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, './vue2-api-demos')
const outputFile = path.join(publicDir, 'htmlFiles_temp.json')
const folderHtmlMap = {}

// 递归遍历目录
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walkDir(fullPath, callback)
    } else if (stat.isFile()) {
      callback(fullPath)
    }
  })
}

// 收集html文件
walkDir(publicDir, (filePath) => {
  if (filePath.endsWith('.html')) {
    const relPath = path.relative(publicDir, filePath).replace(/\\/g, '/')
    const dirName = path.dirname(relPath) === '.' ? 'root' : path.dirname(relPath)
    const fileName = path.basename(relPath)
    if (!folderHtmlMap[dirName]) {
      folderHtmlMap[dirName] = []
    }
    const obj = {}
    obj[fileName] = relPath
    folderHtmlMap[dirName].push(obj)
  }
})

// 生成输出内容
const output = JSON.stringify(folderHtmlMap, null, 2) + '\n'

// 写入文件
fs.writeFileSync(outputFile, output, 'utf-8')

console.log(`已生成 ${outputFile}，共${Object.keys(folderHtmlMap).length}个文件夹。`)
