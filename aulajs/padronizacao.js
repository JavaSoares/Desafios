const classA = [
    {
        name: "Jair",
        grade: 9.8
    },
    {
        name: "Valéria",
        grade: 10
    },
    {
        name: "Nina",
        grade: 10
    }
]

const classB = [
    {
        name: "Mayk",
        grade: 1.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 0
    }
]

function calculateAverage(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.Flunked = false

    if (student.grade < 5) {
        student.Flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.Flunked) {
        console.log(`student ${student.name} Flunked !`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "Class A")
sendMessage(average2, "Class B")

studentsReprovados(classA)
studentsReprovados(classB)
