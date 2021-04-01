require('dotenv').config();

const { Toolkit } = require('actions-toolkit');

Toolkit.run(
  async tools => {
    tools.log.info('Running the action...');
  },
  {
    event: [
      'pull_request.opened',
      'pull_request.edited',
      'pull_request.synchronize',
    ],
    secrets: ['GITHUB_TOKEN'],
  },
);
