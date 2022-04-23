import { resolve } from 'path'
import { addAlias } from 'module-alias'

function makeAlias(
  alias: string,
  path = alias.substring(1),
): [string, string] {
  const dir = process.env.NODE_ENV === 'development' ? 'src/' : 'bin/'

  return [alias, resolve(__dirname, '../', dir, path)]
}

// File Aliases
addAlias(...makeAlias('@utils', 'utils/index'))
addAlias(...makeAlias('@types', 'types/index'))
