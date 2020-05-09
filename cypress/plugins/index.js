
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
