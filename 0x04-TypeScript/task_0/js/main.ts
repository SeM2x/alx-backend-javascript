interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'New Jersey',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);
table.insertRow().innerHTML = `<th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th>`;
studentsList.forEach((student) => {
  table.insertRow().innerHTML = `<td>${student.firstName}</td><td>${student.lastName}</td><td>${student.age}</td><td>${student.location}</td>`;
});
