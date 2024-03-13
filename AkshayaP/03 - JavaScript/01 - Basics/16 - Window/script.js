var strName = "NS";
var strValue = "Education";

function GetScriptName()
{
    console.log("Script - " + strValue);
}

window.addEventListener("beforeunload", function(event)
{
    event.preventDefault();
    event.stopPropagation();

    return "Bye, bye!";
});