interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

class StudentClass implements IStudentClass {
  constructor(public firstname: string, public lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstname;
  }
}

interface IStudentClass {
  firstname: string;
  lastname: string;
  workOnHomework(): string;
  displayName(): string;
}

interface IStudentClassConstructor {
  new (firstname: string, lastname: string): IStudentClass;
}
