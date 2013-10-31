// Application namespace
var CourseApp = {
  // If I'm setting attributes on an object, using semicolons
  // I don't need a var. These are 'attributes' not variables. 
  students: [],
  courses: [],
  teachers: [],
  render_all_students: function() {
    // We're inside a function. So we need to use 'var' to the scope private
    var i = 0,
        array_length;
 
    array_length = this.students.length; // This is preferred most of the time
    // array_length = CourseApp.students.length;
    for(;i<array_length;) {
      this.render_student(this.students[i]);
      i = i + 1;
    };
  },
  render_student: function(student) {
    var student_html = "";
    student_html = student.generate_html();
    document.getElementById('students-list').innerHTML += student_html;
  },
  render_collection: function(collection_name) {
    var i = 0,
        array_length;
 
    array_length = this[collection_name].length
    for(;i<array_length;) {
      this[collection_name][i].render_item();
      i = i + 1;
    };
  }
};
 
CourseApp.LearningThing = function() {};
CourseApp.LearningThing.prototype.render_item = function() {
  var html = "";
  html = this.generate_html();
  debugger;
  document.getElementById('').innerHTML += html;
};
 
 
// =========== STUDENT ==============
CourseApp.Student = function(name) {
  this.name = name;
  this.prototype = CourseApp.LearningThing.prototype;
  // a student object properties
};
 
// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function() {
  return "<li id=\'" + this.name + "\' class=\'student\'>" +
          "<h4>" + this.name + "</h4>" + 
          "</li>";
};
 
CourseApp.students.push(new CourseApp.Student("Stacy"));
CourseApp.students.push(new CourseApp.Student("Bobby"));
CourseApp.render_collection("students");
 
 
// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
  this.name = name;
  this.prototype = CourseApp.LearningThing.prototype;
};
// This will give all the teachers access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(){ 
  return "<li id=\'" + this.name + "\' class=\'teacher\'>" +
          "<h4>" + this.name + "</h4>" + 
          "</li>";
};
 
CourseApp.teachers.push(new CourseApp.Teacher("David_d_1"));
CourseApp.teachers.push(new CourseApp.Teacher("Tom_t_1"));
CourseApp.render_collection("teachers");
 
// =========== COURSE ==============
CourseApp.Course = function(name) {
  this.name = name;
  this.prototype = CourseApp.LearningThing.prototype;
};
 
// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){ };
 
 
 
 
 
///////////////////////////////////////////////////////////
//                                                       //
//            BONUS STAGE BELOW                          //
//                                                       //
///////////////////////////////////////////////////////////
 
 
// The following 3 methods will run ONLY when you click the 
// 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// of the methods
 
// For example, if I click the 'Add Teacher' button on the page
// the 'CourseApp.add_teacher' method will run
 
CourseApp.add_teacher = function(e){
  // Prompt the user for information to add a teacher
  // Append this teacher to the list of teachers on the page
};
 
CourseApp.add_course = function(e){
  // Prompt the user for information to add a course
  // Append this course to the list of courses on the page
};
 
CourseApp.add_student = function(e){
  // Prompt the user for information to add a student
  // Append this student to the list of students on the page
};