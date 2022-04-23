import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { parse } from 'comment-json'
import type { Config } from '@types'
import { argv } from '@utils'
import { std } from './logger'

export function getConfig(): Config {
  // Get root cwd.
  const root = process.cwd()

  // Get default root docgen.json.
  let path = resolve(root, 'docgen.json')

  // If configPath provided in argv prefer it.
  if (argv.configPath) {
    path = resolve(root, argv.configPath)
    std.verbose('Preferring custom config path provided in argv.')
  }

  // If not exists emit error and exit process.
  if (!existsSync(path)) {
    std.error(
      argv.configPath
        ? 'Invalid path to docgen config provided!'
        : `Could not find docgen.json in root: "${process.cwd()}"`,
    )

    return process.exit(1)
  }

  // Attempt to apply defaults to parsed json file with stripped
  // comments read syncrnously from path calculated
  try {
    return applyDefaults(
      parse(
        readFileSync(path, 'utf-8'),
        undefined,
        true,
      ) as unknown as Config,
    )
  } catch (error) {
    std.error('Failed to read config file!', error)
    return process.exit(1)
  }
}

export function applyDefaults(config: Config): Config {
  return {
    ...config,
    buildOptions: {
      verbose: false,
      ...config.buildOptions,
    },
  }
}

export const config = getConfig()
