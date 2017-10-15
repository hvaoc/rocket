const os = require('os')
const chalk = require('chalk')

const os_platform = os.platform()
const os_release = os.release()
const os_type = os.type()

console.log(chalk.green('rocket'))
console.log('v0.0.1')
console.log(chalk.grey('%s %s %s'), os_platform, os_release, os_type)
