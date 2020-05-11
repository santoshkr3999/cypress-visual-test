
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on("task", percyHealthCheck)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
