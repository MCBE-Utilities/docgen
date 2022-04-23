export interface ARGVRaw {
  _: string[]
  v?: boolean
  verbose?: boolean
}

export interface ARGV {
  in: string
  out: string
  verbose: boolean
}
