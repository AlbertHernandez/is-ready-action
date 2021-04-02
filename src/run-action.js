const getLabelNamesOnIssue = require('./github/get-label-names-on-issue');
const createLabelIfNotExists = require('./github/create-label-if-not-exists');

module.exports = async tools => {
  const requiredLabels = tools.inputs.required_labels.split(';');
  const labelNamesOnIssue = await getLabelNamesOnIssue(tools);

  tools.log.info(`Required Labels: ${requiredLabels}`);
  tools.log.info(`Labels on Issue: ${labelNamesOnIssue}`);

  const hasAllRequiredLabels = requiredLabels.every(requiredLabel => {
    return labelNamesOnIssue.includes(requiredLabel);
  });

  if (hasAllRequiredLabels) {
    tools.log.info('PR is Ready to Go Live!');
    return;
  }

  await Promise.all(
    requiredLabels.map(requiredLabel => {
      return createLabelIfNotExists(tools, requiredLabel);
    }),
  );

  tools.log.error(`Missing required labels to go live: ${requiredLabels}`);
  tools.exit.failure();
};
