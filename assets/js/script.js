//momentjs formatting and requisite information
var currentDayDate = moment().format('dddd, MMM Do YYYY ')
var currentDayStart = moment().startOf('day');
let currHour = moment().startOf('hour')

//dom selection
var container = $('.container');


$('#currentDay').text(currentDayDate);


//time block creation
for (let i = 9; i < 18; i++) {
    var timeblockHour = moment().startOf('day').hour(i)
    var hourFormat = moment().startOf('day').hour(i).format('h:mm a')
    var divElRow = $('<div>');
    var divElHour = $('<div>')
    var divElText = $('<div>');
    var divElSave = $('<div>');
    divElRow.addClass("row time-block");
    divElRow.attr('data-hour', i);
    divElHour.addClass('col-2 hour')
    divElHour.text(hourFormat);


    //div formatting for past present future
    if(currHour.isAfter(timeblockHour)){
        console.log('past')
        divElRow.addClass('past')
    }else if (currHour.isSame(timeblockHour)){
        console.log('present')
        divElRow.addClass('present')
    }else{
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
    divElSave.append("<p><i>Save</i></p>");

    //create this but in this loop with dom
    {/*     <div class="row time-block" data-hour="9">
      <div class="col-2 hour ">
      </div>
      <div class="col-9 description">
      </div>
      <div class="col-1 saveBtn">
        <p><i>Save</i></p>
      </div>
    </div> */}

}
