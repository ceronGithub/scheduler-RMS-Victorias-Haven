async function getGithubFileContent(username, repo, filePath, token) {
  const url = `https://api.github.com/repos/${username}/${repo}/contents/${filePath}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.raw+json', // This header returns the raw file content
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned an error: ${response.status} ${response.statusText}`);
    }

    const fileContent = await response.text();
    return fileContent;

  } catch (error) {
    console.error("Failed to retrieve file:", error);
  }
}

// ---- Example Usage ----
const myUsername = 'ceronGithub';
const myRepo = 'scheduler-records';
const myFilePath = 'ceron.txt';
const myToken = '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';
// Call the function and process the result
getGithubFileContent(myUsername, myRepo, myFilePath, myToken)
  .then(content => {
    if (content) {
      console.log('File Content:');
      var parseJson = JSON.parse(content);   
      console.log(parseJson[0]);
    }
  });