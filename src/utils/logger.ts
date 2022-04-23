import chalk from 'chalk'
import { argv } from '@utils'

export namespace std {
  export function log(log: unknown, ...content: unknown[]): void {
    console.log(chalk.cyan('[LOG]'), log, ...content)
  }
  export function warn(log: unknown, ...content: unknown[]): void {
    console.warn(chalk.yellow('[WARN]'), log, ...content)
  }
  export function error(log: unknown, ...content: unknown[]): void {
    console.error(chalk.red('[ERROR]'), log, ...content)
    console.log('')
  }
  export function verbose(log: unknown, ...content: unknown[]): void {
    if (argv.verbose)
      console.debug(chalk.gray('[VERBOSE]'), log, ...content)
  }
}
