

let students = [

    {
        id: "0",
        name: "Jane",
        gender: "Famale",
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
            }
        ]

    }
    
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
    }
]


// Problems to Solved
//1. How Many students offer Mathematics
//2. All Students Offering Mathematics
//3. All Students Offering all Subjects
//4. No of Students
//5. All those that offered and passed Chemistry



   let subjectOfInterested = "Mathematics";
   let subjectOfInterestedCount = 0;

   let subjectOfInterestedList = [];

   let allSubjectAndStudents = [];

   for(const sub of subjects){



        
        if(sub.name.toLowerCase() === subjectOfInterested.toLowerCase()){

            


             for(const student of students){

                 const checkIfStudentOfferedMath = student.offerSubjects.find(x => x.subjectId === sub.id);

                 if(checkIfStudentOfferedMath){


                    subjectOfInterestedCount = subjectOfInterestedCount + 1;

                    subjectOfInterestedList.push({
                        id: student.id,
                        name: student.name,
                        gender: student.gender
                    });
            
                 }

             }
        }



      

   }


   console.log("No students offering Mathematics ", subjectOfInterestedCount);

   console.log("All students offering Mathematics ", subjectOfInterestedList);




   for(const sub of subjects){



         let studentOfferingSubject = [];

         for(const student of students){

             const checkIfStudentOffered = student.offerSubjects.find(x => x.subjectId === sub.id);

             if(checkIfStudentOffered){


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


console.log("All Subjects and their students ", JSON.stringify(allSubjectAndStudents))


let NumberOfStudents = 0;
for(const student of students) {
    NumberOfStudents = NumberOfStudents +1;
}

console.log("NumberOfStudents", NumberOfStudents)

subjectOfInterested = "Chemistry";
OfferedAndPassesSubjectOfInterest = [];
for(const sub of subjects){



        
    if(sub.name.toLowerCase() === subjectOfInterested.toLowerCase()){

        


         for(const student of students){

             const checkIfStudentOffered = student.offerSubjects.find(x => x.subjectId === sub.id);

             if(checkIfStudentOffered){


                subjectOfInterestedCount = subjectOfInterestedCount + 1;

                if(checkIfStudentOffered.score > 40 ){
                    OfferedAndPassesSubjectOfInterest.push({
                        id: student.id,
                        name: student.name,
                        gender: student.gender
                    });
                }

                
        
             }

         }
    }



  

}

console.log("Offered and Passed Chemistry",  OfferedAndPassesSubjectOfInterest)



