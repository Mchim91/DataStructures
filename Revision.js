let students = [

    {
        id: "0",
        name: "Jane",
        gender: "Female",
        offerSubjects: [

            {
                subjectId: "1",
                score: 60
            },
            {
                subjectId: "2",
                score: 45
            },
            {
                subjectId: "3",
                score: 78
            }

        ]

    },

    {
        id: "1",
        name: "Peter",
        gender: "Male",
        offerSubjects: [

            {
                subjectId: "1",
                score: 89
            },
            {
                subjectId: "4",
                score: 35
            },
            {
                subjectId: "5",
                score: 23
            },
            {
                subjectId: "2",
                score: 45
            }
        ]

    },

    {
        id: "3",
        name: "Hills",
        gender: "Male",
        offerSubjects: [

            {
                subjectId: "1",
                score: 89
            },
            {
                subjectId: "3",
                score: 76
            },
            {
                subjectId: "4",
                score: 45
            },
            {
                subjectId: "5",
                score: 22
            }
        ]

    },

    {
        id: "4",
        name: "Steph",
        gender: "Female",
        offerSubjects: [

            {
                subjectId: "2",
                score: 70
            },
            {
                subjectId: "4",
                score: 95
            },
            {
                subjectId: "5",
                score: 30
            }
        ]

    },

    {
        id: "5",
        name: "Steph",
        gender: "Female",
        offerSubjects: [

            {
                subjectId: "2",
                score: 70
            },
            {
                subjectId: "4",
                score: 95
            },
            {
                subjectId: "5",
                score: 30
            }
        ]

    },

    {
        id: "6",
        name: "Steph",
        gender: "Female",
        offerSubjects: [

            {
                subjectId: "2",
                score: 70
            },
            {
                subjectId: "4",
                score: 95
            },
            {
                subjectId: "5",
                score: 100
            },
            {
                subjectId: "7",
                score: 90
            },
            {
                subjectId: "8",
                score: 40
            },
            {
                subjectId: "9",
                score: 36
            }
        ]

    },

    {
        id: "7",
        name: "Joe",
        gender: "Male",
        offerSubjects: [

            {
                subjectId: "2",
                score: 70
            },
            {
                subjectId: "4",
                score: 95
            },
            {
                subjectId: "5",
                score: 50
            },
            {
                subjectId: "1",
                score: 70
            },
            {
                subjectId: "9",
                score: 30
            }
        ]

    },

    {
        id: "8",
        name: "Mercy",
        gender: "Female",
        offerSubjects: [

            {
                subjectId: "7",
                score: 70
            },
            {
                subjectId: "6",
                score: 95
            },
            {
                subjectId: "2",
                score: 75
            },
            {
                subjectId: "2",
                score: 30
            },
            {
                subjectId: "6",
                score: 79
            },
            {
                subjectId: "5",
                score: 40
            }
        ]

    },

]

let subjects = [
    {
        id: "1",
        name: "Mathematics"
    },
    {
        id: "2",
        name: "English"
    },
    {
        id: "3",
        name: "Biology"
    },
    {
        id: "4",
        name: "Chemistry"
    },
    {
        id: "5",
        name: "Physics"
    },
    {
        id: "6",
        name: "Geography"
    },
    {
        id: "7",
        name: "Economics"
    },
    {
        id: "8",
        name: "BioTech"
    },
    {
        id: "9",
        name: "Music"
    }
]

//How Many students offer English
InterestedSubject = "English";
let InterestedSubjectCount = 0;
let studentOfferingSubject = [];
let InterestedSubjectlist = [];


for (const sub of subjects) {
    if (sub.name.toLowerCase() === InterestedSubject.toLowerCase()) {

        for (const student of students) {

            const checkIfStudentOffered = student.offerSubjects.find(x => x.subjectId === sub.id);

            if (checkIfStudentOffered) {
                InterestedSubjectCount = InterestedSubjectCount + 1;

                InterestedSubjectlist.push({
                    id: student.id,
                    name: student.name,
                    gender: student.gender
                })
            }
        }
    }
}
console.log("No students offering English = ", InterestedSubjectCount);
console.log("All students offering English = ", InterestedSubjectlist);

//All Students Offering all Subjects
let allSubjectAndStudents = [];
for (const sub of subjects) {

    for (const student of students) {

        const checkIfStudentOffered = student.offerSubjects.find(x => x.subjectId === sub.id);
        if (checkIfStudentOffered) {
            studentOfferingSubject.push({
                id: student.id,
                name: student.name,
                gender: student.gender
            })

        }

    }
    allSubjectAndStudents.push({
        id: sub.id,
        name: sub.name,
        students: studentOfferingSubject
    })
}
//console.log("All Subjects and their students ", JSON.stringify(allSubjectAndStudents))

// No of Students

let NoOfStudents = 0;
for (const student of students) {
    NoOfStudents = NoOfStudents + 1;
}
console.log("NumberOfStudents = ", NoOfStudents)

// No of Subjects

let NoOfSubjects = 0;
for (const sub of subjects) {
    NoOfSubjects = NoOfSubjects + 1;
}
console.log("NumberOfSubject = ", NoOfSubjects)

// No of Students that scores is between 10 and 95 in Englishb

let SubjectOfInterest = "English";
let PassedSubject = [];

for (const sub of subjects) {
    if (sub.name.toLowerCase() === InterestedSubject.toLowerCase()) {

        for (const student of students) {
            const checkIfStudentOffered = student.offerSubjects.find(x => x.subjectId === sub.id);

            if (checkIfStudentOffered) {
                InterestedSubjectCount = InterestedSubjectCount + 1;

                if (checkIfStudentOffered.score >= 10 && checkIfStudentOffered.score <= 95) {
                    PassedSubject.push({
                        id: student.id,
                        name: student.name,
                        gender: student.gender
                    });
                }

            }
        }
    }
}

console.log("No of students that Offered and Passed English = ", PassedSubject)