console.log('in js');
$(document).ready(onReady);

function onReady() {
    console.log('in Jquery');
    //get input values onReady
    $('#equalButton').on('click', getNumbers);
    $('#clearButton').on('click', clearInputs);
    $('#additionButton').on('click', operatorSign);
    $('#subtractionButton').on('click', operatorSign);
    $('#multiplicationButton').on('click', operatorSign);
    $('#divisionButton').on('click', operatorSign);
    $('.numbersButton').on('click', displayCalculation);

    getAllNumbers();
}//end onReady

function operatorSign() {
    operatorSign = $(this).val();
    console.log(operatorSign);
}
let answer = 0;

function getNumbers() {
    let firstNumbers = $('#firstNumberIn').val();
    let secondNumbers = $('#secondNumberIn').val();
    let equalSign = $('#equalButton').text();
    console.log(firstNumbers, secondNumbers, equalSign);

    $.ajax({
        url: '/calculator',
        method: 'POST',
        data: {
            firstNumbers: firstNumbers,
            operatorSign: operatorSign,
            secondNumbers: secondNumbers,
            equalSign: equalSign,

        }
    }).then(function (response) {
        getAllNumbers();

    });//end then function
}//end getNumbers

function clearInputs() {
    $('#firstNumberIn').val('');
    $('#secondNumberIn').val('');
    $('#results').empty();
}//end clearInputs

function getAllNumbers() {
    $.ajax({ // ajax go to server
        url: '/calculator',
        method: 'GET'//request to server
    }).then(function (response) {
        $('#ulResults').empty();
 
        response.forEach(function (calculator) {
            // display in descendant order
           console.log('response', response);
           
            if(response.length <= '10'){
            $('#ulResults').prepend(`
                
             <li id = "liResults">
            ${calculator.firstNumbers}
            ${calculator.operatorSign}
            ${calculator.secondNumbers}
            ${calculator.equalSign}
            ${calculator.answer}
            </li>
            `)
                return false;               
            }
             
        });// end forEach
        // clearInputs()
    });//end response function
}//end getAllNumbers

function displayCalculation() {
    let numberSeven = ('#sevenButton').text();
    console.log(numberSeven);

};//end displayCalculation
