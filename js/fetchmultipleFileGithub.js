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
      return content; 
      // return { path: file.path, content: content };
    } 
    catch (error) {
      console.error(`Error fetching file: ${file.path}`, error);
      return null;
    }
  }));

  // Filter out any files that failed to fetch.
  return fileContents.filter(file => file !== null);
}

var toArray = [];
const containerDiv = document.querySelector('.dynamicHere');
containerDiv.innerHTML = "";
// Example usage
fetchTextFilesFromBranch()
  .then(files => {
  if (files) {
    files.forEach(function(value, i) {
        var toJson = JSON.parse(value);
        const newInputName = document.createElement('input');
        const newInputDateIn = document.createElement('input');
        const newInputDateOut = document.createElement('input');
        const newInputPhoneNumber = document.createElement('input');
        const newInputEmail = document.createElement('input');
        const newInputPax = document.createElement('input');
        const newInputExtraPax = document.createElement('input');
        const newInputPet = document.createElement('input');
        const newInputPackage = document.createElement('input');
        const newInputcheckIn = document.createElement('input');
        const newInputCheckOut = document.createElement('input');
        const newInputDP = document.createElement('input');
        const newInputBalance = document.createElement('input');
        const newInputComment = document.createElement('textarea');
        
        // Set attributes for the input
        newInputName.setAttribute('type', 'text');
        newInputName.setAttribute('name', 'dynamicInputName_' + i);
        newInputName.setAttribute('id', 'dynamicInputName_' + i);
        newInputName.setAttribute('placeholder', 'Name: ' + (toJson[0]));
        newInputName.setAttribute('style', 'width:150px;');
        newInputName.setAttribute('value', (toJson[0]));

        newInputDateIn.setAttribute('type', 'text');
        newInputDateIn.setAttribute('name', 'dynamicInputDateIn_' + i);
        newInputDateIn.setAttribute('id', 'dynamicInputDateIn_' + i);
        newInputDateIn.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDateIn.setAttribute('style', 'width:150px;');
        newInputDateIn.setAttribute('value', (toJson[1]));

        newInputDateOut.setAttribute('type', 'text');
        newInputDateOut.setAttribute('name', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('id', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDateOut.setAttribute('style', 'width:150px;');
        newInputDateOut.setAttribute('value', (toJson[2]));

        newInputPhoneNumber.setAttribute('type', 'text');
        newInputPhoneNumber.setAttribute('name', 'dynamicInputPhoneNumber_' + i);
        newInputPhoneNumber.setAttribute('id', 'dynamicInputPhoneNumber_' + i);
        newInputPhoneNumber.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPhoneNumber.setAttribute('style', 'width:150px;');
        newInputPhoneNumber.setAttribute('value', (toJson[3]));

        newInputEmail.setAttribute('type', 'text');
        newInputEmail.setAttribute('name', 'dynamicInputEmail_' + i);
        newInputEmail.setAttribute('id', 'dynamicInputEmail_' + i);
        newInputEmail.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputEmail.setAttribute('style', 'width:150px;');
        newInputEmail.setAttribute('value', (toJson[4]));

        newInputPax.setAttribute('type', 'text');
        newInputPax.setAttribute('name', 'dynamicInputPax_' + i);
        newInputPax.setAttribute('id', 'dynamicInputPax_' + i);
        newInputPax.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPax.setAttribute('style', 'width:150px;');
        newInputPax.setAttribute('value', (toJson[5]));

        newInputExtraPax.setAttribute('type', 'text');
        newInputExtraPax.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputExtraPax.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputExtraPax.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputExtraPax.setAttribute('style', 'width:150px;');
        newInputExtraPax.setAttribute('value', 0);

        newInputPet.setAttribute('type', 'text');
        newInputPet.setAttribute('name', 'dynamicInputPet_' + i);
        newInputPet.setAttribute('id', 'dynamicInputPet_' + i);
        newInputPet.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPet.setAttribute('style', 'width:150px;');
        newInputPet.setAttribute('value', (toJson[6]));

        newInputPackage.setAttribute('type', 'text');
        newInputPackage.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputPackage.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputPackage.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPackage.setAttribute('style', 'width:150px;');
        newInputPackage.setAttribute('value', (toJson[7]));

        newInputcheckIn.setAttribute('type', 'text');
        newInputcheckIn.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputcheckIn.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputcheckIn.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputcheckIn.setAttribute('style', 'width:150px;');
        newInputcheckIn.setAttribute('value', (toJson[7]));

        newInputCheckOut.setAttribute('type', 'text');
        newInputCheckOut.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputCheckOut.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputCheckOut.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputCheckOut.setAttribute('style', 'width:150px;');
        newInputCheckOut.setAttribute('value', (toJson[7]));
        
        containerDiv.appendChild(newInputName);
        containerDiv.appendChild(newInputDateIn);
        containerDiv.appendChild(newInputDateOut);        
        containerDiv.appendChild(newInputPhoneNumber);
        containerDiv.appendChild(newInputEmail);
        containerDiv.appendChild(newInputPax);
        containerDiv.appendChild(newInputExtraPax);
        containerDiv.appendChild(newInputPet);
        containerDiv.appendChild(newInputPackage);
        containerDiv.appendChild(newInputcheckIn);
        containerDiv.appendChild(newInputCheckOut);
        containerDiv.appendChild(newInputDP);
        containerDiv.appendChild(newInputBalance);
        containerDiv.appendChild(newInputComment);
        containerDiv.appendChild(document.createElement('br'));
    });
  }
});
