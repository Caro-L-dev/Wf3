// IF
// Syntaxe : if (condition) (code à éxécuter)

var a = 42;

if ( a < 42 )
{
    console.log("a est inférieur à 42");
}
console.log("... on continue ...");
console.log("------------");

// IF ... ELSE

var b = 10;

if ( b < 42 )
{
    console.log("b est inférieur à 42");
}
else 
{
    console.log("b est supérieur à 42");
}
console.log("... on continue après b ...");
console.log("------------");

// IF ... ELSE IF
var jsSuperOk = 2;

if (jsSuperOk == 2 )
{
    console.log("10 bonbecs !");
}
else if ( jsSuperOk == 1 )
{
    console.log("5 bonbecs !");
}

console.log("------------");

// IF ... ELSE IF ... ELSE
var jsSuperOk = 10;

if (jsSuperOk == 2 )
{
    console.log("10 bonbecs !");
}
else if ( jsSuperOk == 1 )
{
    console.log("5 bonbecs !");
}
else
{
    console.log("des coups de fouets !!!");
}

console.log("------------");

// SWITCH (commutateur)
var trafficLight = "green";

switch(trafficLight)
{
    case 'red':
        console.log("Stop!");
        break;

    case 'orange':
        console.log("Slow down!");
        break;

    case 'green':
        console.log("It's all right dude, go on!");
        break;
    default:
        console.log("Pass with caution");
}