const { exec: execute } = require('node:child_process');

await execute('npm run test', async (err, stdout, stderr) => {
  let message = '';
  if (!err && stdout) {
    message = `# Coverage Report ⛱: \n\n\`\`\`${stdout}\`\`\``;
  } else {
    message = `# Errors ⛱: \n\n\`\`\`${stderr}\`\`\``;
  }

  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: message
  });
});