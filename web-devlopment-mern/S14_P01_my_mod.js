
class Student{

    constructor(studentName,studentMarks)
    {
        this.studentName = studentName;
        this.studentMarks = studentMarks
    }

     show = () =>{
        console.log(this.studentName)
    }
    get =() =>{
        return this.studentMarks
    }
}

export default Student