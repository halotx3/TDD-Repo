const reveal = function() {
    $('#hid').show();
}
const hidden = function() {
    $('#hid').hide();
    $('#hideUp').hide();
    $('#s2').hide();
    $('#delH').hide();
    $('#upSec').hide();
}

const render = function() {

    $('#seta').empty();
    $('#upSec').empty();
  
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
const uprend = function(){
    hidden();
    $('#hideUp').show();
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
    const namVal = $('#sn').val();
    console.log(namVal);
    
    for(let i = 0; i < employeeList.length; i++ ){
        if(employeeList[i].name.includes(namVal)){
            $('#upSec').append(`<p>Yes, ${namVal} is a valid entry</p>`)
        }
    console.log(employeeList[i].name.includes(namVal))
    $('#sn').val('');
    }
}

// Function for update tab
const upVal = function(){
    const nameUp = $('#naUp').val();
    const onumUp = $('#onUp').val();
    const numUp = $('#phnUp').val();

    const reName = $('#nunew').val();

    for(let i = 0; i < employeeList.length; i++ ){
        if(employeeList[i].name.includes(reName)){
            // const upID = employeeList[i].name.indexOf(reName);
            
            employeeList[i] = ({name: nameUp, officeNum: onumUp, phoneNum: numUp})
        }
    console.log(employeeList[i].name.includes(reName))
    
    }
    // employeeList.indexOf(reName.name) = employeeList[{name: nameUp, officeNum: onumUp, phoneNum:numUp}];

    $('#naUp').val('');
    $('#onUp').val('');
    $('#phnUp').val('');
    $('#nunew').val('');

    render();
}
const delVal = function(){
    const deltV = $('#delIN').val();

    for(let i = 0; i < employeeList.length; i++ ){
        if(employeeList[i].name.includes(deltV)){
 
            employeeList.splice(i, 1);
        }
    };

    $('#delIN').val('');

    render();
};
const delrend = function(){
    hidden();
    $('#delH').show();

    render();

}
hidden();


  $('#view').on('click', viewrend);
  $('#add').on('click', addrend);
    $('#gain').on('click', infoVal);
  $('#verify').on('click', verifyT);
    $('#verG').on('click', verVal);
  $('#update').on('click', uprend);  
    $('#gainUp').on('click', upVal)
  $('#delete').on('click', delrend);
    $('#delcof').on('click', delVal);