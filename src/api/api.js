import * as network from "./network";

const listEmployee = (params = '') => network.get('employee', params);

const getEmployeeById = id => network.get(`employee/${id}`, id);

const addEmployee = obj => network.post('employee', obj);

const updateEmployee = (id, obj) => network.put(`employee/${id}`, obj);

const removeEmployee = val => network.remove(`employee/${val}`);

const addUser = obj => network.post('signup', obj);

const validateUser = creds => network.post('login', creds);

export default {
  listEmployee,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  removeEmployee,
  addUser,
  validateUser,
}