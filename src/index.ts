#!/usr/bin/env node

import './moduleResolver'
import type { ARGVRaw } from '@types'
import { readRawArgv } from '@utils'

import argvRaw from './cli'
const argv = readRawArgv(argvRaw as ARGVRaw)

console.log(argv)
