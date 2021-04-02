require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

Toolkit.run(
  async tools => {
    tools.log.info('Running the action...');
  },
  {
    event: [
      'pull_request.labeled',
      'pull_request.unlabeled',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);
