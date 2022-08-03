console.log("Testing");

let data = [

    {
        name: "Peter",
        departmentId: 2,
        gender: "Male",
        facultyId: 1,

    },
    {
        name: "Jane",
        departmentId: 1,
        gender: "Female",
        facultyId: 2,

    }
]

let faculties = [{id: 1, name: "Science"}, {id: 2, name: "Humanities"}];

let departments = [{id: 1, name: "Computer Science"}, {id: 2, name: "English"}];


let transformedData = [];

for(const studData of data){

    let deptNameMain = "";

      let deptName = departments.find(x => x.id === studData.departmentId );

     if(deptName){

        deptNameMain = deptName.name;
     }

     let facultyNameMain = "";

     let foundFaculty =  faculties.find(x => x.id === studData.facultyId);

     if(foundFaculty){

        facultyNameMain = foundFaculty.name;
     }

     transformedData.push({

        name: studData.name,
        departmentId: studData.departmentId,
        gender: studData.gender,
        facultyId: studData.facultyId,
        departmentName: deptNameMain,
        facultyName: facultyNameMain,
 

     });

}



for(const studData of data){

    let deptNameMain = "";

      let deptName = departments.find(x => x.id === studData.departmentId );

     if(deptName){

        deptNameMain = deptName.name;
     }

     let facultyNameMain = "";

     let foundFaculty =  faculties.find(x => x.id === studData.facultyId);

     if(foundFaculty){

        facultyNameMain = foundFaculty.name;
     }

     studData['departmentName'] = deptNameMain;
     studData['facultyName'] = facultyNameMain;


}




console.log("Student Data ",data);