// get data from another javascript
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

const month = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
const monthString = month.toLocaleString('default', { month: 'long' });
// month / year
document.querySelector('#weekly-card-h1').innerHTML = monthString + " / " + new Date().getFullYear() + " (Weekly Schedule)";

document.querySelector('#MMstring_1').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleString("en-US", {weekday: 'long'});
document.querySelector('#MDYdateFormat_1').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_2').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_2').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_3').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_3').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_4').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_4').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_5').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_5').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_6').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_6').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});

document.querySelector('#MMstring_7').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6).toLocaleString("en-US", {weekday: 'long'});;
document.querySelector('#MDYdateFormat_7').innerHTML = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6).toLocaleString("en-US", {month: 'numeric', day: 'numeric', year: 'numeric'});



// setting the information to html
for(let index = 1; index <= 7; index++)
{
    const doubleDigitDdd = new Date(new Date().getFullYear(), new Date().getMonth(), (new Date().getDate() + index)).toLocaleString("en-US",{day: '2-digit'});
    const doubleDigitMmm = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleString("en-US",{month: '2-digit'});
    const yyy = new Date().getFullYear();

    const card = document.querySelector('#_weekly_card_schedule_'+index);
    card.classList.add("looking_"+doubleDigitMmm+(doubleDigitDdd - 1)+yyy);

    const name = document.querySelector('#_guestName_'+index);
    name.classList.add("guestName_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const phoneNumber = document.querySelector('#_guestNumber_'+index);
    phoneNumber.classList.add("guestNumber_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const scheduleDate = document.querySelector('#_guestScheduleDate_'+index);
    scheduleDate.classList.add("guestScheduleDate_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const package = document.querySelector('#_guestPackage_'+index);
    package.classList.add("guestPackageDeal_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const checkintime = document.querySelector('#_guestCheckInTime_'+index);
    checkintime.classList.add("guestCheckInTime_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const checkouttime = document.querySelector('#_guestCheckOutTime_'+index);
    checkouttime.classList.add("guestCheckOutTime_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const ttlpax = document.querySelector('#_guestTtlPax_'+index);
    ttlpax.classList.add("guestTtlPax_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const extrattlpax = document.querySelector('#_guestExtraTtlPax_'+index);
    extrattlpax.classList.add("guestTtlExtraPax_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const petsmall = document.querySelector('#_guestPetSmall_'+index);
    petsmall.classList.add("guestPetSmall_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const petbig = document.querySelector('#_guestPetBig_'+index);
    petbig.classList.add("guestPetBig_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const downpanyment = document.querySelector('#_guestDownpayment_'+index);
    downpanyment.classList.add("guestDownpanyment_"+doubleDigitMmm+(doubleDigitDdd - 1));

    const balance = document.querySelector('#_guestBalance_'+index);
    balance.classList.add("guestBalance_"+doubleDigitMmm+(doubleDigitDdd - 1));    
}

function highlights_scheduled()
{    
    // HighLights the booked cards LOGIC!!!!
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
        const scheduleData = document.querySelector('.guestScheduleDate_'+mmm+ddd);   
        scheduleData.innerHTML = splittedDateIn[index] + " - " + splittedDateOut[index];
        const packageDeal = document.querySelector('.guestPackageDeal_'+mmm+ddd);
        packageDeal.innerHTML = splittedPackage[index];
        const checkInTime = document.querySelector('.guestCheckInTime_'+mmm+ddd);
        checkInTime.innerHTML = splittedCheckIn[index];
        const checkOutTime = document.querySelector('.guestCheckOutTime_'+mmm+ddd);
        checkOutTime.innerHTML = splittedCheckOut[index];
        const ttlPax = document.querySelector('.guestTtlPax_'+mmm+ddd);
        ttlPax.innerHTML = splittedPax[index];
        const ttlExtraPax = document.querySelector('.guestTtlExtraPax_'+mmm+ddd);
        ttlExtraPax.innerHTML = splittedExtraPax[index];
        const petSmall = document.querySelector('.guestPetSmall_'+mmm+ddd);
        const petBig = document.querySelector('.guestPetBig_'+mmm+ddd);
        const downpanyment = document.querySelector('.guestDownpanyment_'+mmm+ddd);
        downpanyment.innerHTML = splittedDP[index];
        const balance = document.querySelector('.guestBalance_'+mmm+ddd);
        balance.innerHTML = splittedBalance[index];

        // highlights certain dates
        const booked_card_date = document.querySelector('.looking_'+card_date);
        booked_card_date.classList.add("booked-card");    

        document.querySelector('.looking_'+ ((new Date().getMonth() + 1).toString().padStart(2, "0")) + (new Date().getDate().toString().padStart(2, "0")) + (new Date().getFullYear().toString().padStart(2, "0")) ).classList.add("active-active");    
    }
}

highlights_scheduled();