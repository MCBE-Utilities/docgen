import chalk from 'chalk'
import Yargs from 'yargs'
import { YARG_LOCALE } from '@utils'

// Boilerplate
Yargs.scriptName('')
Yargs.usage(
  `${chalk.hex('#698fff')('docgen')} ${chalk.gray(
    '[docgen.json]',
  )} ${chalk.grey('[flags]')}`,
)
Yargs.help('help', chalk.grey("Get help on docgen's flags."))
Yargs.alias('h', 'help')
Yargs.version(false)
Yargs.strict()
Yargs.demandCommand(0, 1)
Yargs.updateLocale(YARG_LOCALE)

// Options
Yargs.option('verbose', {
  alias: 'v',
  type: 'boolean',
  description: chalk.grey('Sends verbose logs about whats occuring.'),
})

export default Yargs.argv
