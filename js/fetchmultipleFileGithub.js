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

var CheckInDateArray = [];
var CheckOutDateArray = [];
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
        CheckInDateArray.push(toJson[1]);

        newInputDateOut.setAttribute('type', 'text');
        newInputDateOut.setAttribute('name', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('id', 'dynamicInputDateOut_' + i);
        newInputDateOut.setAttribute('placeholder', 'Name: ' + (toJson[1]));
        newInputDateOut.setAttribute('style', 'width:150px; visibility:none');
        newInputDateOut.setAttribute('value', (toJson[2]));
        CheckOutDateArray.push(toJson[2]);

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

    // send dynamic objects to HTML
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

    const monthToday = year.getMonth();

    if(Month == monthToday)
    {
      //highlights the month today
      document.querySelector('#Title_'+Month).setAttribute("class", "activeMonth");
    }else
    {
      document.querySelector('#Title_'+Month).setAttribute("class", "notActiveMonth");
    }

    //hight card Date
    // check if this year
    // check month
    // check date
    
    // Create a new date object for the current year and month,
    // but set the day to 0 to get the last day of the previous month.
    const dateForLastMonth = new Date(year.getFullYear(), Month + 1, 0);
    // Get the number of days from the date object
    const daysInLastMonth = dateForLastMonth.getDate();

    for(let day = 1; day <= daysInLastMonth; day++)
    {            
      // create element div
      const createCard = document.createElement('div');
      // created element div class name
      const cardName = "cardFor_"+monthString+day+year.getFullYear();
      // created element div attributes
      createCard.setAttribute("class", "card-schedule "+cardName);
      // createDay.innerHTML = (new Date(year.getFullYear(), Month, day).toLocaleString("en-US", {weekday: "long"}));            
      // send to HTML
      dynamicDates.appendChild(createCard);

      const card_class_name = document.querySelector('.'+cardName);
      card_class_name.innerHTML = "";

      const createCard_card_date_today= document.createElement('div');
      const cardDate = "cardDateFor_"+monthString+day+year.getFullYear();
      createCard_card_date_today.setAttribute("class", "schedule-date-today "+cardDate);

      card_class_name.appendChild(createCard_card_date_today);

      const card_date_today_objects = document.querySelector('.'+cardDate);
      card_date_today_objects.innerHTML = "";

      const card_date_today_objects_h2 = document.createElement('h2');      
      card_date_today_objects_h2.innerHTML = (new Date(year.getFullYear(), Month, day).toLocaleString("en-US", {weekday: "long"}));
      const card_date_today_objects_h5 = document.createElement('h5');
      card_date_today_objects_h5.innerHTML = new Date(year.getFullYear(), Month, day).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

      card_date_today_objects.appendChild(card_date_today_objects_h2);
      card_date_today_objects.appendChild(card_date_today_objects_h5);

      // ================================================================

      const createCard_guest_Header= document.createElement('div');
      const cardName_guest_Header = "cardGuestHeaderFor_"+monthString+day+year.getFullYear();
      createCard_guest_Header.setAttribute("class", "schedule-row-guest "+cardName_guest_Header);
      card_class_name.appendChild(createCard_guest_Header);

      const card_guest_header_objects = document.querySelector('.'+cardName_guest_Header);
      card_guest_header_objects.innerHTML = "";

      var card_guest_header_objects_h4 = document.createElement('h4');      
      card_guest_header_objects_h4.innerHTML = 'Guest Name';
      var card_guest_header_objects_h6 = document.createElement('h6');
      card_guest_header_objects_h6.innerHTML = 'phone number';
      
      card_guest_header_objects.appendChild(card_guest_header_objects_h4);
      card_guest_header_objects.appendChild(card_guest_header_objects_h6);


      // ================================================================

      const createCard_schedule_date = document.createElement('div');
      const cardName_schedule_date = "cardScheduleDateFor_"+monthString+day+year.getFullYear();
      createCard_schedule_date.setAttribute("class", "schedule-row-guest "+cardName_schedule_date);
      card_class_name.appendChild(createCard_schedule_date);

      const card_schedule_date_header_objects = document.querySelector('.'+cardName_schedule_date);
      card_schedule_date_header_objects.innerHTML = "";

      var card_schedule_date_header_objects_h5 = document.createElement('h5');      
      card_schedule_date_header_objects_h5.innerHTML = 'Schedule Date: ';
      var card_schedule_date_header_objects_h4 = document.createElement('h4');
      card_schedule_date_header_objects_h4.innerHTML = '? - ?';
      card_schedule_date_header_objects.appendChild(card_schedule_date_header_objects_h5);
      card_schedule_date_header_objects.appendChild(card_schedule_date_header_objects_h4);

      // ================================================================

      const createCard_package = document.createElement('div');
      const cardName_package = "cardPackageFor_"+monthString+day+year.getFullYear();
      createCard_package.setAttribute("class", "schedule-row-guest "+cardName_package);
      card_class_name.appendChild(createCard_package);

      const card_package_objects = document.querySelector('.'+cardName_package);
      card_package_objects.innerHTML = "";

      var card_package_objects_h6 = document.createElement('h6');      
      card_package_objects_h6.innerHTML = 'Package:';
      var card_package_objects_h4 = document.createElement('h4');
      card_package_objects_h4.innerHTML = '2 Rooms Over-night';
      card_package_objects.appendChild(card_package_objects_h6);
      card_package_objects.appendChild(card_package_objects_h4);

      // ================================================================
      for(let rows = 1; rows <= 4; rows++)
      {
        const createCard_row = document.createElement('div');
        const cardName_row = "cardRow"+rows+"For_"+monthString+day+year.getFullYear();
        if(rows == 4)
        {
          createCard_row.setAttribute("class", "schedule-row-DP "+cardName_row);
        }
        else
        {
          createCard_row.setAttribute("class", "schedule-row "+cardName_row);
        }        
        card_class_name.appendChild(createCard_row);

        const card_row_objects = document.querySelector('.'+cardName_row);
        card_row_objects.innerHTML = "";

        for(let cells = 1; cells <= 2; cells++){
          const createCard_row_cell = document.createElement('div');
          var cardName_row_cell = "cardRow"+rows+"Cell"+cells+"For_"+monthString+day+year.getFullYear();          
          if(rows == 4)
          {
            createCard_row_cell.setAttribute("class", "schedule-cell-DP "+cardName_row_cell);
          }
          else
          {
            createCard_row_cell.setAttribute("class", "schedule-cell "+cardName_row_cell);
          }          
          card_row_objects.appendChild(createCard_row_cell);

          const card_cells_name = document.querySelector('.'+cardName_row_cell);
          card_cells_name.innerHTML = "";

          var create_cell_objects_h6 = document.createElement('h6');      
          // create_cell_objects_h5.innerHTML = 'Check-in:';
          var create_cell_objects_h4 = document.createElement('h4');
          // create_cell_objects_h4.innerHTML = '';

          switch(rows)
          {
            case 1:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Check-in:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Check-Out:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 2:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Pax:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Extra Pax:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 3:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Pets (Small):';            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Pets (Big):';            
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 4:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Downpayment:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Balance:';            
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
          }
          card_cells_name.appendChild(create_cell_objects_h6);
          card_cells_name.appendChild(create_cell_objects_h4);
        }             
      }     
    } 
  }
}

createCalendarDateDynamic();
