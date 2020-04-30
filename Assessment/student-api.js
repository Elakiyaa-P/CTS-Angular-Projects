const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let students = [{
    "stud_id":"853230",
    "stud_name":"Elite",
    "grade":"S",
    "course":"French",
    "address":"Perambur",
    "phone":"6383107758"
},
{
    "stud_id":"853231",
    "stud_name":"Navya",
    "grade":"A",
    "course":"JavaScript",
    "address":"Puthur",
    "phone":"9383107758"
},
{
    "stud_id":"853232",
    "stud_name":"Neena",
    "grade":"B",
    "course":"Maths",
    "address":"Andhra",
    "phone":"8383107758"
}];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Pulling values from DB
app.get('/student', (req, res) => {
    res.json(students);
});

//Inserting values into DB
app.post('/student', (req, res) => {
    const student = req.body;
    console.log(student);
    students.push(student);
    res.json('student is added to the database');
})

//To get a particular student from the DB
app.get('/student/:stud_id', (req, res) => {

    //Reading stud_id from the url
    const stud_id = req.params.stud_id;

    //Searching students for the given stud_id
    for (let student of students) {
        if (student.stud_id === stud_id) {
            res.json(student);
            return;
        }
    }
    //Sending 404 when stud_id not found
    res.status(404).json('student Not Found!!');
});

//To update a particular detail
app.put('/student/:stud_id',(req,res)=>{

    //Reading stud_id from the url
    const stud_id=req.params.stud_id;
    const newstudent=req.body;

    //Removing old item from the students array
    for(let i=0;i<students.length;i++){
        let student=students[i];
        if(student.stud_id===stud_id){
            students[i]=newstudent;
        }
    }
    res.json('student is Edited!');
});

//Deleting a student
app.delete('/student/:stud_id',(req,res)=>{
    
    //Reading stud_id from the url
    const stud_id = req.params.stud_id;

    //Removing item from the students array
    students=students.filter(i=>{
        if(i.stud_id!=stud_id){
            return true;
        }
        return false;
    });
    res.json('student is Deleted!');
});

app.listen(port, () =>
    console.log(`Hello World listening on port  ${port}!`));