import {
  REGEX_EMAIL,
  REGEX_NUMBER,
  REGEX_UPPERCASE,
  SPECIAL_CHARATERS,
  REGEX_LOWERCASE,
} from "./../constant";
export const dataToParam = (valueForm) => {
  return {
    title: valueForm.name,
    content: valueForm.content,
    status_admin: valueForm.statusAdmin,
    created_at: valueForm.dateCreate,
    category: valueForm.category,
    admin_id: valueForm.assign,
    user_id: valueForm.author,
    department_id: valueForm.department,
  };
};

export const dataToParamAddUser = (valueForm) => {
  return {
    name: valueForm.name,
    email: valueForm.email,
    department_id: valueForm.department,
    role_id: valueForm.role,
    status: valueForm.status,
  };
};

export const dataToParamUpdateUser = (valueForm) => {
  return {
    name: valueForm.name,
    email: valueForm.email,
    department_id: valueForm.department,
    role_id: valueForm.role,
    status: valueForm.status,
    id: valueForm.id,
  };
};

export const inforUserToData = (valueForm) => {
  return {
    name: valueForm.name,
    email: valueForm.email,
    department: valueForm.department_id,
    role: valueForm.role_id,
    maNv: valueForm.employee_id,
    status: valueForm.status,
    id: valueForm.id,
  };
};

export const dataFormToParamsAddCategory = (valueForm) => {
  return {
    id: valueForm.id,
    name: valueForm.name,
    user_id: valueForm.assignee,
    status: valueForm.status,
  };
};

export const dataCategoryToDataForm = (valueForm) => {
  return {
    id: valueForm.id,
    name: valueForm.name,
    assignee: valueForm.user_id,
    status: valueForm.status,
    textFilter: "",
  };
};

export const validateEmail = (email) => {
  return (
    REGEX_EMAIL.test(email) &&
    email.slice(email.indexOf("@"), email.length) === "@hblab.vn"
  );
};

export const validatePassword = (password) => {
  return (
    password.match(SPECIAL_CHARATERS) &&
    password.match(REGEX_NUMBER) &&
    password.match(REGEX_UPPERCASE) &&
    password.match(REGEX_LOWERCASE)
  );
};
