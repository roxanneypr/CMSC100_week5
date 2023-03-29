import mongoose from "mongoose"

await mongoose.connect('mongodb://127.0.0.1:27017/ICS',
{useNewUrlParser: true, useUnifiedTopology: true});

const Student = mongoose.model('students', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
})

/*
Create data
*/

/* const newStudent = new Student({
    stdnum: "123456789",
    fname: "Juan",
    lname: "Dela Cruz",
    age: 20
});

let data = await newStudent.save(); */

// Get data
//let data = await Student.find({age:17});

/*
Update data
*/
/* let updateStudent = await Student.findOne({stdnum: "123456789"});
updateStudent.age = 25;
let data = await updateStudent.save(); */

// updates a single document and returns an object containing the result details (NOT the document).
/* let updateStudent = await Student.updateOne(
    { age: 17 },
    {$set: {fname: "John"}}
  ); */
  
  // updates multiple documents and returns an object containing the result details (NOT the documents)
/* let updateStudent = await Student.updateMany(
    { age: 17 },
    {$set: {fname: "John"}}
); */

//let data = await Student.deleteOne({stdnum: "123456789"});

let data = await Student.deleteMany({age: {$gte: 17, $lte: 20 }});

console.log(data);
process.exit();