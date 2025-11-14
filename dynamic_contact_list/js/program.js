let contacts = [];

function saveContact(firstName, lastName, email) {
    let contact = {};
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contacts.push(contact);
}

function renderTable() {
    document.getElementById("contact_table").innerHTML = "";
    for (i = 0; i < contacts.length; i++) {
        addRow(contacts[i]);
    }
}

function addRow(contact) {
    let row = "<tr>";
    row += "<td>" + contact.firstName + "</td>";
    row += "<td>" + contact.lastName + "</td>";
    row += "<td>" + contact.email + "</td>";
    row += "</tr>";
    document.getElementById("contact_table").innerHTML += row;
    document.getElementById("contact_count").innerHTML = contacts.length;
}

function showForm() {
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact_form").style.display = "block";
}

function hideForm() {
    document.getElementById("contact_form").style.display = "none";
}

function validateForm() {
    let errors = 0;
    errors += validateNotBlank("first_name");
    errors += validateNotBlank("last_name");
    errors += validateEmail("email");
    if (errors != 0) {
        alert("You have " + errors + " errors. Please correct and resubmit.");
    }
    else
    {
        let fname = document.getElementById("first_name").value;
        let lname = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        saveContact(fname, lname, email);
        renderTable();
        hideForm();
        document.getElementById("contact_table").classList.add("contact");
    }
}

function validateNotBlank(id) {
    let name = document.getElementById(id).value;
    if (name.length === 0) {
        document.getElementById(id).classList.add("invalid");
        return 1;
    }
    else {
        document.getElementById(id).classList.remove("invalid");
        return 0;
    }
}

function validateEmail(id) {
    let email = document.getElementById(id).value;
    if (email.includes("@") && email.includes(".")) {
        document.getElementById(id).classList.remove("invalid");
        return 0;
    }
    else {
        document.getElementById(id).classList.add("invalid");
        return 1;

    }
}