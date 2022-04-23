#!/usr/bin/env node

import './moduleResolver'
import { argv, getConfig } from '@utils'

// Create Gap
console.log('')

// Try Find Config
console.log(getConfig(argv))
