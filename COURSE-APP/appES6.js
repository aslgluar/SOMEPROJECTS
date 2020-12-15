class Course{

constructor(title,instructor,image)
     {
        this.title=title;
        this.instructor=instructor;
        this.image=image;
    }
         
     
}

class UI{

    addCourseToList(course){
        const list=document.getElementById('course-list');

    var html=`
    
    <tr>
         <td> <img width="300" height="250" src="img/${course.image}"></td>
         <td>${course.title}</td>
         <td>${course.instructor}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    
    
    </tr>

    `;
    list.innerHTML+=html;

    }

    deleteCourse(element){


        if(element.classList.contains('delete')){

            element.parentElement.parentElement.remove();
    
        }
    }

    clearControls(){

        const title=document.getElementById('title').value="";
        const instructor=document.getElementById('instructor').value="";
        const image=document.getElementById('image').value="";

    }

}




document.getElementById('new-course').addEventListener('submit',
function(e){

    const title=document.getElementById('title').value;
    const instructor=document.getElementById('instructor').value;
    const image=document.getElementById('image').value;

   

    //create  a course object

    const course= new Course(title,instructor,image);

    //create a UI object

    const ui=new UI();
    console.log(ui)


    //add to course to list
    ui.addCourseToList(course);

    //clear controls
    ui.clearControls();


    console.log(course)

    e.preventDefault();

});
document.getElementById('course-list').addEventListener('click',
function(e){

    const ui=new UI();
    ui.deleteCourse(e.target);

})
 