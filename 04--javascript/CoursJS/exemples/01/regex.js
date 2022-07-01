// var str = "Bob by le chat";

// str = str.replace(/(?:[a-z]+) le (chien|chat)/, " le super $1 ");

// console.log( str );
// some!NEW_ID!_some_text
// some_text_0!NEW_ID!$3_some_text

var firstname = "Bobby";
var regex = new RegExp( '^[a-zA-Z]+$' );

if ( firstname.match( regex ) )
{
    console.log("Valid");
}
else{
    console.error("Not valid");
}