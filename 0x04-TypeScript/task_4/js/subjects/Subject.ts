namespace Subjects {
  export class Subject {
    private _teacher: Teacher;

    set teacher(teacher: Subjects.Teacher) {
      this._teacher = teacher;
    }
  }
}