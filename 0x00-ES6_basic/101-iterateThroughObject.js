export default function iterateThroughObject(reportWithIterator) {
  let employees = "";

  for (const employee of reportWithIterator) {
    employees += `${employee} | `;
  }

  return employees.substring(0, employees.length - 3);
}
