/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    const obj = students[i];
    for (const key in obj) {
      names.push(obj[key]);
    }
  }
  return names;
}
