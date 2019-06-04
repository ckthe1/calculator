console.log('in js');
$(document).ready(onReady);
function onReady() {
    console.log('in Jquery');

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
    // $('#answerOut').empty();
    // $('#results').empty();
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
        // $('#answerOut').empty();
        // $('#results').empty();
        getAllNumbers();

    });//end then function
}//end getNumbers
