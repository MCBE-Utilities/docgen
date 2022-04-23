export interface Config {
  buildOptions: BuildOptions
  styleOptions: StyleOptions
}

export interface BuildOptions {
  root: string
  out: string
  verbose?: boolean
  mixins?: string | string[]
  ignore?: string | string[]
  resolvers?: Record<string, string | Record<string, string>>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyleOptions {}
