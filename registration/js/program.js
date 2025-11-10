function checkEmpty(id)
{
    let value = document.getElementById(id).value;
    if (value.length == 0)
    {
        document.getElementById(id).classList.add("invalid");
        return 1;
    }
    else
    {
        document.getElementById(id).classList.remove("invalid");
        return 0;
    }
}

function checkNumbers(id, length)
{
    let value = parseInt(document.getElementById(id).value);
    if (isNaN(value))
    {
        document.getElementById(id).classList.add("invalid");
        length = 1;
        return 1;
    }
    else if (document.getElementById(id).value.length != length)
    {
        document.getElementById(id).classList.add("invalid");
        return 1;
    }
    else
    {
        document.getElementById(id).classList.remove("invalid");
        return 0;
    }
}

function checkState(id, length)
{
    let value = document.getElementById(id).value;
    if (value.length != 2)
    {
        document.getElementById(id).classList.add("invalid");
        return 1;
    }
    else
    {
        document.getElementById(id).classList.remove("invalid");
        return 0;
    }
}

function validateForm()
{
    let errors = 0;
    const stateLength = 2;
    const phoneLength = 10;
    const zipLength = 5;
    const cardLength = 16;

    errors += checkEmpty("fname");
    errors += checkEmpty("lname");
    errors += checkEmpty("email");
    errors += checkEmpty("street");
    errors += checkEmpty("city");
    errors += checkNumbers("phone", phoneLength);
    errors += checkNumbers("zip", zipLength);
    errors += checkNumbers("card", cardLength);
    errors += checkState("state", stateLength);

    if (errors != 0)
    {
        alert("You have " + errors + " errors. Please make sure to correct.");
    }
    else
    {
        document.getElementById("form").submit();
    }
}

function displayResults()
{
    getUserInput("fname");
    getUserInput("lname");
    getUserInput("email");
    getUserInput("street");
    getUserInput("city");
    getUserInput("phone");
    getUserInput("zip");
    getUserInput("card");
    getUserInput("state");
}

function getUserInput(id)
{
    const parameters = new URLSearchParams(window.location.search);
    document.getElementById(id).innerHTML = parameters.get(id);
}