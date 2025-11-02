let numberOfAssignments = 0;
let sumOfGrades = 0;
function recordData()
{
    let date = document.getElementById("date_input").value;
    let name = document.getElementById("name_input").value;
    let grade = parseInt(document.getElementById("grade_input").value);
    InsertIntoTable(date, name, grade);
}

function InsertIntoTable(date, name, grade)
{
    if (date == "" || name == "" || grade == "")
    {
        alert("No entries for one or more fields! Please input some data and try again.");
    }
    else
    {
        if (grade < 0 || grade > 100)
        {
        alert("Invalid Grade Input! Please enter a grade between 0 and 100.");
        }
        else
        {
        numberOfAssignments++;
        sumOfGrades = sumOfGrades + grade;
        let assignmentGrade = grade;
        let averageGrade = sumOfGrades / numberOfAssignments;
        averageGrade = Math.round(averageGrade * 100) / 100
        let averageLetterGrade = AverageLetterGrade(averageGrade);
        let assignmentLetterGrade = LetterGrade(assignmentGrade);

        let bodyData = "<tr><td>" + date + "</td><td>" + name + "</td><td>" + grade + " - " + assignmentLetterGrade + "</td><td></tr>";
        let footerData = "<tr><td>Average & Letter Grade: </td><td id=\"count\">" + numberOfAssignments + " Assignments</td><td id=\"average\">" + averageGrade + " - " + averageLetterGrade +"</td></tr>"

        document.getElementById("table_body").innerHTML += bodyData;
        document.getElementById("table_footer").innerHTML = footerData;
        }   
    }
}

function AverageLetterGrade(averageGrade)
{
    
    if (averageGrade <= 59)
    {
        averageLetterGrade = "F";
    }
    else if (averageGrade <= 69)
    {
        averageLetterGrade = "D";
    }
    else if (averageGrade <= 79)
    {
        averageLetterGrade = "C";
    }
    else if (averageGrade <= 89)
    {
        averageLetterGrade = "B";
    }
    else
    {
        averageLetterGrade = "A";
    }

    return averageLetterGrade;

}

function LetterGrade(assignmentGrade)
{
    if (assignmentGrade <= 59)
    {
        assignmentLetterGrade = "F";
    }
    else if (assignmentGrade <= 69)
    {
        assignmentLetterGrade = "D";
    }
    else if (assignmentGrade <= 79)
    {
        assignmentLetterGrade = "C";
    }
    else if (assignmentGrade <= 89)
    {
        assignmentLetterGrade = "B";
    }
    else
    {
        assignmentLetterGrade = "A";
    }

    return assignmentLetterGrade;

}


