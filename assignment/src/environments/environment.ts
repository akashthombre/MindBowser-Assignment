const baseUrl = 'http://localhost:2020/api/';

export const environment = {
  production: false,
  login: baseUrl + 'managers/login',
  validate_user: baseUrl + 'validate/user',
  managerSignUp : baseUrl + 'managers/managerSignUp',
  getAllEmployees : baseUrl + 'employee/getAllEmployees',
  createEmployee : baseUrl + 'employee/createEmployee',
  updateEmployee : baseUrl + 'employee/updateEmployee',
  deleteEmployeeById : baseUrl + 'employee/deleteEmployeeById',
};
