import type { ARGV, ARGVRaw } from '@types'

export function readRawArgv(argv: ARGVRaw): ARGV {
  return {
    in: argv._[0],
    out: argv._[1],
    verbose: argv.verbose ?? false,
  }
}
