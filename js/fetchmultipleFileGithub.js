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

// const dynamicInput = document.querySelector('.inputDynamicHere');

const dynamicMonthsDates = document.querySelector('.manipulationHere');

// dynamicInput.innerHTML = "";

dynamicMonthsDates.innerHTML = "";


const Name = [];
const DateIn = [];
const DateOut = [];
const PhoneNumber = [];
const Email = [];
const Pax = [];
const ExtraPax = [];
const Pet = [];
const Package = [];
const CheckIn = [];
const CheckOut = [];
const DP = [];
const Balance = [];
const Comment = [];
const DataCreated = [];
const FileCount = [];
// Example usage
fetchTextFilesFromBranch()
  .then(files => {
  if (files) {
    files.forEach(function(value, i) {
      var toJson = JSON.parse(value);
      Name.push(toJson[0]);
      DateIn.push(toJson[1]);
      DateOut.push(toJson[2]);
      PhoneNumber.push(toJson[3]);
      Email.push(toJson[4]);
      Pax.push(toJson[5]);
      ExtraPax.push(0);
      Pet.push(toJson[6]);
      Package.push(toJson[7]);
      CheckIn.push(toJson[8]);
      CheckOut.push(toJson[9]);
      DP.push(toJson[10]);
      Balance.push(toJson[11]);
      Comment.push(toJson[12]);
      DataCreated.push(toJson[13]);            
    });
  }    
  localStorage.setItem('Name_record', Name);
  localStorage.setItem('DateIn_record', DateIn);
  localStorage.setItem('DateOut_record', DateOut);
  localStorage.setItem('PhoneNumber_record', PhoneNumber);
  localStorage.setItem('Email_record', Email);
  localStorage.setItem('Pax_record', Pax);
  localStorage.setItem('ExtraPax_record', ExtraPax);
  localStorage.setItem('Pet_record', Pet);
  localStorage.setItem('Package_record', Package);
  localStorage.setItem('CheckIn_record', CheckIn);
  localStorage.setItem('CheckOut_record', CheckOut);
  localStorage.setItem('DP_record', DP);
  localStorage.setItem('Balance_record', Balance);
  localStorage.setItem('Comment_record', Comment);
  localStorage.setItem('DataCreated_record', DataCreated);
  localStorage.setItem('FileCount_record', files.length);
});

function createCalendarDateDynamic()
{  
  const getName = localStorage.getItem('Name_record');
  const getDateIn = localStorage.getItem('DateIn_record');
  const getDateOut = localStorage.getItem('DateOut_record');
  const getPhoneNumber = localStorage.getItem('PhoneNumber_record');
  const getEmail = localStorage.getItem('Email_record');
  const getPax = localStorage.getItem('Pax_record');
  const getExtraPax = localStorage.getItem('ExtraPax_record');
  const getPet = localStorage.getItem('Pet_record');
  const getPackage = localStorage.getItem('Package_record');
  const getCheckIn = localStorage.getItem('CheckIn_record');
  const getCheckOut = localStorage.getItem('CheckOut_record');
  const getDP = localStorage.getItem('DP_record');
  const getBalance = localStorage.getItem('Balance_record');
  const getComment = localStorage.getItem('Comment_record');
  const getDataCreated = localStorage.getItem('DataCreated_record');

  const getFileCount = localStorage.getItem('FileCount_record');
  var convertToIntCountFiles = parseInt(getFileCount);

  let splittedName = getName.split(',');
  let splittedDateIn = getDateIn.split(',');
  let splittedDateOut = getDateOut.split(',');
  let splittedPhoneNumber = getPhoneNumber.split(',');
  let splittedEmail = getEmail.split(',');
  let splittedPax = getPax.split(',');
  let splittedExtraPax = getExtraPax.split(',');
  let splittedPet = getPet.split(',');
  let splittedPackage = getPackage.split(',');
  let splittedCheckIn = getCheckIn.split(',');
  let splittedCheckOut = getCheckOut.split(',');
  let splittedDP = getDP.split(',');
  let splittedBalance = getBalance.split(',');
  let splittedComment = getComment.split(',');
  let splittedDataCreated = getDataCreated.split(','); 


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
    
    const doubleDigitMonth = month.toLocaleString('default', { month: '2-digit' });    
    
    document.querySelector('#Title_'+Month).innerHTML = monthString +" / " + year.getFullYear();

    const monthToday = year.getMonth();

    // active month
    if(Month == monthToday)
    {
      //highlights the month today
      document.querySelector('#Title_'+Month).setAttribute("class", "activeMonth");
    }else
    {
      document.querySelector('#Title_'+Month).setAttribute("class", "notActiveMonth");
    } 
    
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
      // double digit month, day      
      // created element div attributes      
      createCard.setAttribute("id", "cardDateIdFor_"+(Month+1)+day);
      createCard.setAttribute("class", "card-schedule "+cardName+" looking_"+doubleDigitMonth+day.toString().padStart(2, "0")+year.getFullYear());
      // send to HTML
      dynamicDates.appendChild(createCard);

      const card_class_name = document.querySelector('.'+cardName);
      card_class_name.innerHTML = "";

      // First Div of the card date
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
      // -----------------------------------------------------------
      card_guest_header_objects_h4.setAttribute("class", "guestName_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
      // ----------------------------------------------------------- 
      card_guest_header_objects_h4.innerHTML = 'Guest Name';
      var card_guest_header_objects_h6 = document.createElement('h6');
      card_guest_header_objects_h6.innerHTML = 'phone number';
      // -----------------------------------------------------------
      card_guest_header_objects_h6.setAttribute("class", "guestNumber_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
      // -----------------------------------------------------------

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
      // -----------------------------------------------------------
      card_schedule_date_header_objects_h4.setAttribute("class", "scheduleData_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
      // -----------------------------------------------------------
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
      // -----------------------------------------------------------
      card_package_objects_h4.setAttribute("class", "packageDeal_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
      // -----------------------------------------------------------
      card_package_objects_h4.innerHTML = '-';
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
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "checkInTime_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------          
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Check-Out:';
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "checkOutTime_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------             
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 2:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Pax:'; 
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "ttlPax_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Extra Pax:'; 
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "ttlExtraPax_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------            
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 3:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Pets (Small):';     
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "petSmall_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------        
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Pets (Big):';     
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "petBig_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------        
              create_cell_objects_h4.innerHTML = '-';
            }
            break;
            case 4:
            if(cells == 1)
            {                 
              create_cell_objects_h6.innerHTML = 'Downpayment:'; 
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "downpanyment_"+new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------            
              create_cell_objects_h4.innerHTML = '-';
            }
            else if(cells == 2)
            {
              create_cell_objects_h6.innerHTML = 'Balance:';   
              // -----------------------------------------------------------
              create_cell_objects_h4.setAttribute("class", "balance_"+ new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{month: '2-digit'}) + new Date(year.getFullYear(), Month, day).toLocaleString("en-US",{day: '2-digit'}));
              // -----------------------------------------------------------          
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

  // HighLights the booked cards
  for(let index = 0; index < convertToIntCountFiles; index++)
  {
    let splitDateInSched = splittedDateIn[index].split('/');
    let mmm = splitDateInSched[0];
    let ddd = splitDateInSched[1];
    let yyy = splitDateInSched[2];
    const card_date = mmm+ddd+yyy;

    const _guestName = document.querySelector('.guestName_'+mmm+ddd);
    _guestName.innerHTML = splittedName[index];
    const guestNumber = document.querySelector('.guestNumber_'+mmm+ddd);
    guestNumber.innerHTML = splittedPhoneNumber[index];
    const scheduleData = document.querySelector('.scheduleData_'+mmm+ddd);   
    scheduleData.innerHTML = splittedDateIn[index] + " - " + splittedDateOut[index];
    const packageDeal = document.querySelector('.packageDeal_'+mmm+ddd);
    packageDeal.innerHTML = splittedPackage[index];
    const checkInTime = document.querySelector('.checkInTime_'+mmm+ddd);
    checkInTime.innerHTML = splittedDateIn[index];
    const checkOutTime = document.querySelector('.checkOutTime_'+mmm+ddd);
    checkOutTime.innerHTML = splittedDateOut[index];
    const ttlPax = document.querySelector('.ttlPax_'+mmm+ddd);
    ttlPax.innerHTML = splittedPax[index];
    const ttlExtraPax = document.querySelector('.ttlExtraPax_'+mmm+ddd);
    ttlExtraPax.innerHTML = splittedExtraPax[index];
    const petSmall = document.querySelector('.petSmall_'+mmm+ddd);
    const petBig = document.querySelector('.petBig_'+mmm+ddd);
    const downpanyment = document.querySelector('.downpanyment_'+mmm+ddd);
    downpanyment.innerHTML = splittedDP[index];
    const balance = document.querySelector('.balance_'+mmm+ddd);
    balance.innerHTML = splittedBalance[index];

    // highlights certain dates
    const booked_card_date = document.querySelector('.looking_'+card_date);
    booked_card_date.classList.add("booked-card");  

    console.log(splittedName[index]);

    document.querySelector('.looking_'+ ((new Date().getMonth() + 1).toString().padStart(2, "0")) + (new Date().getDate().toString().padStart(2, "0")) + (new Date().getFullYear().toString().padStart(2, "0")) ).classList.add("active-active");    
  }
  

  const mmmmonth = new Date().getMonth() + 1;
  // create a dynamic a for focus effect
  const create_a_for_active_month = document.createElement('a');
  create_a_for_active_month.setAttribute('id', 'Focus');
  create_a_for_active_month.setAttribute('href', '#Title_'+ new Date().getMonth()); 
  
  const create_a_for_active_dates = document.createElement('a');
  create_a_for_active_dates.setAttribute('id', 'FocusOne');
  create_a_for_active_dates.setAttribute('href', '#cardDateIdFor_'+mmmmonth+new Date().getDate());

  const put_object_to_main_page = document.querySelector('.main-page');
  put_object_to_main_page.appendChild(create_a_for_active_month);
  put_object_to_main_page.appendChild(create_a_for_active_dates); 
  
}

window.onload = function(){
  // document.querySelector('#Focus').click();
  // document.querySelector('#FocusOne').click();
}

createCalendarDateDynamic();
