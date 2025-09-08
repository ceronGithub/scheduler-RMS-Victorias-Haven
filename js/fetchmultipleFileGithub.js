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
const dynamicInput = document.querySelector('.inputDynamicHere');

const dynamicMonthsDates = document.querySelector('.manipulationHere');

dynamicInput.innerHTML = "";

dynamicMonthsDates.innerHTML = "";

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
        const newInputDataCreated = document.createElement('input');
        
        // Set attributes for the input
        newInputName.setAttribute('type', 'text');
        newInputName.setAttribute('name', 'dynamicInputName_' + i);
        newInputName.setAttribute('id', 'dynamicInputName_' + i);
        newInputName.setAttribute('placeholder', 'Name: ' + (toJson[0]));
        newInputName.setAttribute('style', 'width:150px; visibility:hidden');
        newInputName.setAttribute('value', (toJson[0]));

        newInputDateIn.setAttribute('type', 'text');
        newInputDateIn.setAttribute('name', 'dynamicInputDateIn_' + i);
        newInputDateIn.setAttribute('id', 'dynamicInputDateIn_' + i);
        newInputDateIn.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDateIn.setAttribute('style', 'width:150px; visibility:hidden');
        newInputDateIn.setAttribute('value', (toJson[1]));

        newInputDateOut.setAttribute('type', 'text');
        newInputDateOut.setAttribute('name', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('id', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDateOut.setAttribute('style', 'width:150px; visibility:hidden');
        newInputDateOut.setAttribute('value', (toJson[2]));

        newInputPhoneNumber.setAttribute('type', 'text');
        newInputPhoneNumber.setAttribute('name', 'dynamicInputPhoneNumber_' + i);
        newInputPhoneNumber.setAttribute('id', 'dynamicInputPhoneNumber_' + i);
        newInputPhoneNumber.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPhoneNumber.setAttribute('style', 'width:150px; visibility:hidden');
        newInputPhoneNumber.setAttribute('value', (toJson[3]));

        newInputEmail.setAttribute('type', 'text');
        newInputEmail.setAttribute('name', 'dynamicInputEmail_' + i);
        newInputEmail.setAttribute('id', 'dynamicInputEmail_' + i);
        newInputEmail.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputEmail.setAttribute('style', 'width:150px; visibility:hidden');
        newInputEmail.setAttribute('value', (toJson[4]));

        newInputPax.setAttribute('type', 'text');
        newInputPax.setAttribute('name', 'dynamicInputPax_' + i);
        newInputPax.setAttribute('id', 'dynamicInputPax_' + i);
        newInputPax.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPax.setAttribute('style', 'width:150px; visibility:hidden');
        newInputPax.setAttribute('value', (toJson[5]));

        newInputExtraPax.setAttribute('type', 'text');
        newInputExtraPax.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputExtraPax.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputExtraPax.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputExtraPax.setAttribute('style', 'width:150px; visibility:hidden');
        newInputExtraPax.setAttribute('value', 0);

        newInputPet.setAttribute('type', 'text');
        newInputPet.setAttribute('name', 'dynamicInputPet_' + i);
        newInputPet.setAttribute('id', 'dynamicInputPet_' + i);
        newInputPet.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPet.setAttribute('style', 'width:150px; visibility:hidden');
        newInputPet.setAttribute('value', (toJson[6]));

        newInputPackage.setAttribute('type', 'text');
        newInputPackage.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputPackage.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputPackage.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputPackage.setAttribute('style', 'width:150px; visibility:hidden');
        newInputPackage.setAttribute('value', (toJson[7]));

        newInputcheckIn.setAttribute('type', 'text');
        newInputcheckIn.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputcheckIn.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputcheckIn.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputcheckIn.setAttribute('style', 'width:150px; visibility:hidden');
        newInputcheckIn.setAttribute('value', (toJson[8]));

        newInputCheckOut.setAttribute('type', 'text');
        newInputCheckOut.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputCheckOut.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputCheckOut.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputCheckOut.setAttribute('style', 'width:150px; visibility:hidden');
        newInputCheckOut.setAttribute('value', (toJson[9]));

        newInputDP.setAttribute('type', 'text');
        newInputDP.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputDP.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputDP.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDP.setAttribute('style', 'width:150px; visibility:hidden');
        newInputDP.setAttribute('value', (toJson[10]));
        
        newInputBalance.setAttribute('type', 'text');
        newInputBalance.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputBalance.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputBalance.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputBalance.setAttribute('style', 'width:150px; visibility:hidden');
        newInputBalance.setAttribute('value', (toJson[11]));
          
        newInputComment.setAttribute('name', 'dynamicInputComment_' + i);
        newInputComment.setAttribute('id', 'dynamicInputComment_' + i);
        newInputComment.setAttribute('placeholder', 'comment');
        newInputComment.setAttribute('style', 'width:150px; visibility:hidden');        
        newInputComment.innerHTML = toJson[12];

        newInputDataCreated.setAttribute('type', 'text');
        newInputDataCreated.setAttribute('name', 'dynamicInputExtraPax_' + i);
        newInputDataCreated.setAttribute('id', 'dynamicInputExtraPax_' + i);
        newInputDataCreated.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDataCreated.setAttribute('style', 'width:150px; visibility:hidden');
        newInputDataCreated.setAttribute('value', (toJson[13]));        
              
        dynamicInput.appendChild(newInputName);
        dynamicInput.appendChild(newInputDateIn);
        dynamicInput.appendChild(newInputDateOut);        
        dynamicInput.appendChild(newInputPhoneNumber);
        dynamicInput.appendChild(newInputEmail);
        dynamicInput.appendChild(newInputPax);
        dynamicInput.appendChild(newInputExtraPax);
        dynamicInput.appendChild(newInputPet);
        dynamicInput.appendChild(newInputPackage);
        dynamicInput.appendChild(newInputcheckIn);
        dynamicInput.appendChild(newInputCheckOut);
        dynamicInput.appendChild(newInputDP);
        dynamicInput.appendChild(newInputBalance);
        dynamicInput.appendChild(newInputComment);
        dynamicInput.appendChild(newInputDataCreated);                
        dynamicInput.appendChild(document.createElement('br'));
        dynamicInput.appendChild(document.createElement('br'));
    });
  }
});

function createCalendarDateDynamic()
{
  
  for(let Month = 0; Month < 12; Month++)
  {    
    // create objects
    const dynamicH1 = document.createElement('h1');
    const dynamicMM = document.createElement('div');    

    // set objects property
    dynamicMM.setAttribute("class", "cardDynamicManipulation");
    dynamicMM.setAttribute("id", "dayHeader_"+Month);
    
    dynamicH1.setAttribute("id", "Title_"+Month);
    dynamicH1.innerHTML = Month;

    dynamicMonthsDates.appendChild(document.createElement("br"));
    dynamicMonthsDates.appendChild(dynamicH1);
    dynamicMonthsDates.appendChild(dynamicMM);
    
    const dynamicDates = document.querySelector('#dayHeader_'+Month);
    dynamicDates.innerHTML = "";

    const newDynamicMM = document.createElement('div');
    newDynamicMM.setAttribute("class", "datesHere");
    newDynamicMM.setAttribute("id", "dayHere_"+Month);

    dynamicDates.appendChild(newDynamicMM);    
  }
  for(let Month = 0; Month < 12; Month++)
  {
    const dynamicDates = document.querySelector('#dayHere_'+Month);    
    dynamicDates.innerHTML = "";
    
    const year = new Date();
    const month = new Date(year.getFullYear(), Month);
    const monthString = month.toLocaleString('default', { month: 'long' });
    document.querySelector('#Title_'+Month).innerHTML = monthString +" / " + year.getFullYear();

    const monthToday = year.getMonth() + 1;

    if(Month == monthToday)
    {
      //highlights the month today
      document.querySelector('#dayHeader_'+Month)
    }
    for(let day = 0; day <= 31; day++)
    {
      const createDay = document.createElement('div');

      createDay.setAttribute("class", "card-schedule");
      createDay.innerHTML = "Month " + Month + " Day " + day;
            
      dynamicDates.appendChild(createDay);
    } 
  }
}

createCalendarDateDynamic();
