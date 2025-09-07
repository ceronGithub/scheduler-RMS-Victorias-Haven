const owner = 'ceronGithub';
const repo = 'scheduler-records';
const branch = 'main';
const pat = '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';

async function fetchFileTree() {
  const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
  try {
    const response = await fetch(treeUrl, {
      headers: {
        'Authorization': `token ${pat}`
      }
    });
    const data = await response.json();
    return data.tree; // This is an array of objects representing files and directories.
  } catch (error) {
    console.error('Error fetching file tree:', error);
  }
}

async function fetchTextFilesFromBranch() {
  const fileTree = await fetchFileTree();
  if (!fileTree) return;

  const textFiles = fileTree.filter(file => file.path.endsWith('.txt') && file.type === 'blob');

  const fileContents = await Promise.all(textFiles.map(async (file) => {
    try {
      const response = await fetch(file.url, {
        headers: {
          'Authorization': `token ${pat}`,
          'Accept': 'application/vnd.github.v3.raw' // Fetches raw file content.
        }
      });
      const content = await response.text();
      return { path: file.path, content: content };
    } catch (error) {
      console.error(`Error fetching file: ${file.path}`, error);
      return null;
    }
  }));

  // Filter out any files that failed to fetch.
  return fileContents.filter(file => file !== null);
}

// Example usage
fetchTextFilesFromBranch().then(files => {
  if (files) {
    files.forEach(file => {
      console.log(`--- Content of ${file.path} ---`);
      console.log(file.content);
    });
  }
});