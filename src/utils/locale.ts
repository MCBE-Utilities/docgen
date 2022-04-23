import chalk from 'chalk'

export const YARG_LOCALE: {
  [key: string]: string
} = {
  // Categories
  'Commands:': chalk.hex('#9369ff')('Commands:'),
  'Options:': chalk.hex('#9369ff')('Flags:'),
  'Examples:': chalk.hex('#9369ff')('Examples:'),
  'Positionals:': chalk.hex('#9369ff')('Args:'),

  // Values
  boolean: chalk.hex('#3d916a')('boolean'),
  count: chalk.hex('#3d7691')('count'),
  string: chalk.hex('#6a913d')('string'),
  number: chalk.hex('#3d7691')('number'),
  array: chalk.hex('#918a3d')('array'),
  required: chalk.hex('#913d3d')('required'),
  default: chalk.hex('#91643d')('default'),
  'default:': chalk.hex('#91643d')('default:'),
  'choices:': chalk.hex('#3d4891')('choices:'),
  'aliases:': chalk.hex('#913d78')('aliases:'),
  command: chalk.hex('#763d91')('command'),
  deprecated: chalk.grey('deprecated'),

  // Responses
  'Not enough non-option arguments: got %s, need at least %s': {
    one: chalk.hex('#ff6969')(
      'Recieved %s non-option arguments and expected %s...',
    ),
    other: chalk.hex('#ff6969')(
      'Recieved %s non-option arguments and expected %s...',
    ),
  } as unknown as string,
  'Too many non-option arguments: got %s, maximum of %s': {
    one: chalk.hex('#ff6969')(
      'Recieved %s non-option arguments and expected %s...',
    ),
    other: chalk.hex('#ff6969')(
      'Recieved %s non-option arguments and expected %s...',
    ),
  } as unknown as string,
  'Missing argument value: %s': {
    one: chalk.hex('#ff6969')(
      `Missing argument value: ${chalk.grey('%s')}`,
    ),
    other: chalk.hex('#ff6969')(
      `Missing argument value: ${chalk.grey('%s')}`,
    ),
  } as unknown as string,
  'Missing required argument: %s': {
    one: chalk.hex('#ff6969')(
      `Missing required argument: ${chalk.grey('%s')}`,
    ),
    other: chalk.hex('#ff6969')(
      `Missing required argument: ${chalk.grey('%s')}`,
    ),
  } as unknown as string,
  'Unknown argument: %s': {
    one: chalk.hex('#ff6969')(`Unknown argument: ${chalk.grey('%s')}`),
    other: chalk.hex('#ff6969')(`Unknown argument: ${chalk.grey('%s')}`),
  } as unknown as string,
  'Invalid values:': chalk.hex('#ff6969')('Invalid values:'),
  'Did you mean %s?': chalk.hex('#ff6969')(
    `Did you mean ${chalk.grey('%s')} ${chalk.hex('#ff6969')('?')}`,
  ),
  'deprecated: %s': chalk.hex('#ff6969')(
    `deprecated: ${chalk.grey('%s')}`,
  ),
}
