$(document).ready(function() {
    // run function on initial page load
    colorGuess();
});

function colorGuess() {
    var colorArray = ["Red","Yellow","Blue"];
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    var stripped = colorArray[randomNumber].toLowerCase();
    console.log(colorArray[randomNumber]);
    console.log(stripped);
    $('#click').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == colorArray[randomNumber]) {
            $('h1').text('You got it right!');
            $('input').val('');
            $('button p').text('Again?');
            $('#click').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text('Nope');
            $('input').val('');
            $('button p').text('Try Again?');
            $('#click').click(function() {
                location.reload(true);
            });
        }
    })
}
