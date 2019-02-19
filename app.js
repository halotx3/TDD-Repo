const reveal = function() {
    $('#hid').show();
}
const hidden = function() {
    $('#hid').hide();
    $('#s2').hide();
    $('#delH').hide();
}

const render = function() {

    $('#seta').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('#seta').append(`<br><div class="card"><div class="card-body">${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</div></div><br>`);
    }
  }
const viewrend = function(){
    hidden();
    $('#seta').show();
    render();
}
const addrend = function(){
    $('#hid').show();
    $('#s2').hide();
    render();
}
const verren = function(){
    $('#s2').show();
}
const infoVal = function(){
    const naVal = $('#na').val();
    const onumVal = $('#on').val();
    const numVal = $('#phn').val();

    employeeList.push({name: naVal, officeNum: onumVal, phoneNum:numVal});

    $('#na').val('');
    $('#on').val('');
    $('#phn').val('');

    render();
}
const verifyT = function(){
    $('#seta').empty();
    hidden();
    verren();
}
const verVal = function(){
    const naVal = $('#sn').val();
    console.log(naVal);
    console.log(employeeList.includes(naVal))

    if(employeeList.includes(`${naVal}`)){
        $('.coniu').append(`<p>Yes, ${naVal} is a valid entry</p>`)
    }
}

// Function for update tab
const upVal = function(){
    const naVal = $('#na').val();
    const onumVal = $('#on').val();
    const numVal = $('#phn').val();

    employeeList.indexOf(naVal)= ({name: naVal, officeNum: onumVal, phoneNum:numVal});

    $('#na').val('');
    $('#on').val('');
    $('#phn').val('');

    render();
}
const delVal = function(){
    const deltV = $('#delIN').val();

    employeeList.splice(employeeList.indexOf(deltV), 1)

    $('#delIN').val('');

    render();
}
const delrend = function(){
    hidden();
    $('#delH').show();
}
hidden();


  $('#view').on('click', viewrend);
  $('#add').on('click', addrend);
    $('#gain').on('click', infoVal);
  $('#verify').on('click', verifyT);
    $('#verG').on('click', verVal);
  $('#update').on('click', addrend);  
  $('#delete').on('click', delrend);
    $('#delcof').on('click'), delVal;