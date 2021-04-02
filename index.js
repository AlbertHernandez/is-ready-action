require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

const runAction = require('./src/run-action');

Toolkit.run(
  async tools => {
    try {
      tools.log.info('Running the action...');
      await runAction(tools);
    } catch (err) {
      tools.log.error(`Unexpected error running the action: ${err.message}`);
    }
  },
  {
    event: [
      'pull_request.labeled',
      'pull_request.unlabeled',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);
