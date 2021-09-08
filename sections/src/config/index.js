import Config from './config'

const production = {
  isLocal: false,
  isProduction: true,
  apiBase: '/api',
  gtmEnabled: true,
  gtmDebug: false,
}

const dev = {
  ...production,
  isLocal: true,
  isProduction: false,
  gtmEnabled: false,
  gtmDebug: true,
}

// initialize config
Config
  .default(production)
  .environment(/joshdev/, { ...dev })
  .detect()

export default Config
