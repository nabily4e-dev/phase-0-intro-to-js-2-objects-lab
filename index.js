// Write your solution in this file!
const employee = {
  name: "John Doe",
  streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(
  employeeObj,
  employeeKey,
  employeeValue
) {
  return { ...employeeObj, [employeeKey]: employeeValue };
}

function destructivelyUpdateEmployeeWithKeyAndValue(
  employeeObj,
  employeeKey,
  employeeValue
) {
  employeeObj[employeeKey] = employeeValue;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, employeeKey) {
  const newEmployeeObj = { ...employeeObj };
  delete newEmployeeObj[employeeKey];
  return newEmployeeObj;

}

function destructivelyDeleteFromEmployeeByKey(employeeObj, employeeKey) {
    delete employeeObj[employeeKey];
    return employeeObj;

}
