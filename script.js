// Student names and their grades
const studentNames = [
    "Anna Reyes",
    "Ben Santos",
    "Carla Cruz",
    "David Lim",
    "Ella Ramos"
];

const studentGrades = [
    92,
    85,
    78,
    97,
    74
];

// Displays the grade results of all students
function showGradeEquivalent() {
    let output = "<h2>Grade Equivalents</h2>";

    output += "<table>";
    output += "<thead><tr>";
    output += "<th>Student Name</th>";
    output += "<th>Grade</th>";
    output += "<th>Equivalent</th>";
    output += "<th>Remark</th>";
    output += "<th>Academic Leader</th>";
    output += "</tr></thead><tbody>";

    for (let i = 0; i < studentNames.length; i++) {
        const name = studentNames[i];
        const grade = studentGrades[i];

        const equivalent = getEquivalent(grade);
        const remark = getRemark(grade);
        const leader = getAcademicLeader(equivalent);

        output += "<tr>";
        output += "<td>" + name + "</td>";
        output += "<td>" + grade + "</td>";
        output += "<td>" + equivalent + "</td>";
        output += "<td>" + remark + "</td>";
        output += "<td>" + leader + "</td>";
        output += "</tr>";
    }

    output += "</tbody></table>";
    document.getElementById("result").innerHTML = output;
}

// Checks if the student passed or failed
function getRemark(grade) {
    const remark = (grade >= 75) ? "Passed" : "Failed";
    return remark;
}

// Converts the numerical grade into its equivalent
function getEquivalent(grade) {
    let equivalent = "";

    if (grade >= 97) {
        equivalent = "1.0";
    } else if (grade >= 94) {
        equivalent = "1.25";
    } else if (grade >= 91) {
        equivalent = "1.5";
    } else if (grade >= 88) {
        equivalent = "1.75";
    } else if (grade >= 85) {
        equivalent = "2.0";
    } else if (grade >= 82) {
        equivalent = "2.25";
    } else if (grade >= 79) {
        equivalent = "2.5";
    } else if (grade >= 76) {
        equivalent = "2.75";
    } else if (grade >= 75) {
        equivalent = "3.0";
    } else {
        equivalent = "Failed";
    }

    return equivalent;
}

// Assigns the academic classification
function getAcademicLeader(equivalent) {
    let leader = "";

    switch (equivalent) {
        case "1.0":
        case "1.25":
            leader = "1st Class Academic Leader";
            break;

        case "1.5":
            leader = "2nd Class Academic Leader";
            break;

        case "1.75":
            leader = "3rd Class Academic Leader";
            break;

        default:
            leader = "-";
    }

    return leader;
}

// Runs the function when the button is clicked
document.getElementById("showGradesButton").addEventListener("click", showGradeEquivalent);
