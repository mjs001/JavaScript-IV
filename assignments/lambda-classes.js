// CODE here for your Lambda Classes
//classes:

class person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
        speak(){
            return (`Hello, my name is ${this.name} and I am from ${this.location}`);
        }
    
};

class instructor extends person{
constructor(childAttributes){
    super(childAttributes);
    this.specialty = childAttributes.specialty,
    this.favLanguage = childAttributes.favLanguage,
    this.catchPhrase = childAttributes.catchPhrase
}
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
       return `${student.name} receives a perfect score on ${subject}`;
    }
};

class student extends person{
    constructor(childAttributes){
    super(childAttributes);
    this.previousbg = childAttributes.previousbg,
    this.className = childAttributes.className,
    this.favSubjects = childAttributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`
    }
};

class ProjectManager extends instructor{
    constructor(grandChildAttributes){
    super(grandChildAttributes);
    this.gradClassName = grandChildAttributes.gradClassName,
    this.favInstructor = grandChildAttributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
};

