import type { ARGV, ARGVRaw } from '@types'
import argvRaw from '../cli'

export function readRawArgv(argv: ARGVRaw): ARGV {
  return {
    configPath: argv._[0],
    verbose: argv.verbose ?? false,
  }
}

export const argv = readRawArgv(argvRaw as ARGVRaw)
