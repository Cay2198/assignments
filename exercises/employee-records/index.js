function Employee (name, jobTitle, salary, slack) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.slack = slack
    }

Employee.prototype.info = function() {
    console.log("Name: " + this.name + ",", "Job Title: " + this.jobTitle + ",",
    "salary: " + this.salary + ",", "Status: " + this.status)
}
Employee.prototype.slacker = function() {
    console.log("Name: " + this.name + ",", "Job Title: " + this.jobTitle + ",",
    "salary: " + this.salary + ",", "Status: " + this.slack)
}

var david = new Employee("David", "Window Washer", "$60 mil/year")
var sam = new Employee("Sam", "Electronics Mechanic", "$30/hour")
var tucker = new Employee("Tucker", "Sun Observer", "$2/hour", "Part Time")

tucker.slacker()