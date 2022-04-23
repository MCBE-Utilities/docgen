export interface ARGVRaw {
  _: string[]
  v?: boolean
  verbose?: boolean
}

export interface ARGV {
  configPath?: string
  verbose: boolean
}
