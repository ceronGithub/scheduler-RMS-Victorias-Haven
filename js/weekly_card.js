const month = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
const monthString = month.toLocaleString('default', { month: 'long' });
// month / year
document.querySelector('#weekly-card-h1').innerHTML = monthString + " / " + new Date().getFullYear();

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