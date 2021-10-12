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
        //dom creation and manipulation
        var timeblockHour = moment().startOf('day').hour(i)
        var hourFormat = moment(timeblockHour).format('h:mm a')
        var divElRow = $('<div>');
        var divElHour = $('<div>')
        var divElText = $('<textarea>');
        var divElSave = $('<div>');
        divElRow.addClass("row time-block");
        divElRow.attr('data-hour', i);
        divElHour.addClass('col-2 hour')
        divElHour.text(hourFormat);
        divElText.addClass('col-9 description')
        divElSave.addClass('col-1 saveBtn');


        //div formatting for past present future
        if (currHour.isAfter(timeblockHour)) {
            console.log('past')
            divElRow.addClass('past')
            divElText.prop('readonly',true);
        } else if (currHour.isSame(timeblockHour)) {
            console.log('present')
            divElRow.addClass('present')
            divElText.prop('readonly',true);
        } else {
            console.log('future')
            divElRow.addClass('future')
        }

        //dom appending
        container.append(divElRow);
        divElRow.append(divElHour);
        divElRow.append(divElText);
        divElRow.append(divElSave);
        divElSave.append("<img class='img-fluid ' src='assets/img/saveIcon.png' alt='Png File Svg - Save Icon In Png Clipart@pikpng.com'></p>");
    }
}

initialize();


//onclick on savebutton
//save pressed, load into json
//on initialize, check if date is correct

//add json parse on the initialize