export default function createIteratorObject(report) {
  const iterator = function* () {
    for (const employees of Object.values(report.allEmployees)) {
      for (const employee of employees) {
        yield employee;
      }
    }
  };
  return iterator();
}
