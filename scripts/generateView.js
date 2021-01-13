/* eslint-disable */
// generateView.js
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const { vueTemplate, entryTemplate, vmTemplate } = require('./template')

const generateFolder = (folderName) => {
  fs.mkdirSync(folderName, { recursive: true });
}
const generateFile = (folderName, suffix, data) => {
  const path = `${folderName}/${suffix}`;
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })

  })
}
log('请输入要生成的页面组件名称、默认会生成在 views/目录下 如需要在commonpents下生成 在名称后面加 -C')
process.stdin.on('data', async chunk => {
  let inputName = String(chunk).trim().toString();
  let folderName = resolve('../src/views', inputName);
  if (inputName.includes(' -C')) {
    inputName = inputName.substr(0, inputName.indexOf(' -C'));
    folderName = resolve('../src/components', inputName);
  }
  try {
    log(`正在生成 ${inputName}文件夹  ${folderName}`)
    generateFolder(folderName);
    log(`正在生成 index.ts 文件`)
    await generateFile(folderName, `index.ts`, entryTemplate);
    log(`正在生成 vue 文件`)
    await generateFile(folderName, 'index.vue', vueTemplate(inputName))
    log(`正在生成 vm.ts 文件`)
    await generateFile(folderName, 'vm.ts', vmTemplate(inputName))
    log(`正在生成 index.less 文件`)
    await generateFile(folderName, 'index.less', '')
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
