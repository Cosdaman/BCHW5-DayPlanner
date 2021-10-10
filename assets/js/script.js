//momentjs formatting and requisite information
var currentDayDate = moment().format('dddd, MMM Do YYYY ')
var currentDayStart = moment().startOf('day');
let currHour = moment().startOf('hour')

//dom selection
var container = $('.container');


$('#currentDay').text(currentDayDate);


//initial 
function initialize() {

    //timeblock creation loop
    for (let i = 9; i < 18; i++) {
        var timeblockHour = moment().startOf('day').hour(i)
        var hourFormat = moment(timeblockHour).format('h:mm a')
        var divElRow = $('<div>');
        var divElHour = $('<div>')
        var divElText = $('<div>');
        var divElSave = $('<div>');
        divElRow.addClass("row time-block");
        divElRow.attr('data-hour', i);
        divElHour.addClass('col-2 hour')
        divElHour.text(hourFormat);


        //div formatting for past present future
        if (currHour.isAfter(timeblockHour)) {
            console.log('past')
            divElRow.addClass('past')
        } else if (currHour.isSame(timeblockHour)) {
            console.log('present')
            divElRow.addClass('present')
        } else {
            console.log('future')
            divElRow.addClass('future')
        }

        divElText.addClass('col-9 description')
        divElSave.addClass('col-1 saveBtn');

        //dom appending
        container.append(divElRow);
        divElRow.append(divElHour);
        divElRow.append(divElText);
        divElRow.append(divElSave);
        divElSave.append("<img class='img-fluid ' src='assets/img/saveIcon.png' alt='Png File Svg - Save Icon In Png Clipart@pikpng.com'></p>");
    }
}

initialize();

//onclick on description
//editable if future else not
//onclick on savebutton
//save pressed, load into json

//add json parse on the initialize