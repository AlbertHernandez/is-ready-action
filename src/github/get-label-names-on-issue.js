/**
 * Check if the label is added in the pull request
 * @param {import('actions-toolkit').Toolkit} tools
 */
module.exports = async (tools) => {
  const { data: labelsOnIssue } = await tools.github.issues.listLabelsOnIssue(
    {
      ...tools.context.repo,
      issue_number: tools.context.issue.number,
    },
  );

  return labelsOnIssue.map(labelOnIssue => labelOnIssue.name);
};
