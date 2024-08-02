export interface IUserProfile {
  userId: string;
  userFullName: string;
  companyCode: string;
  companyName: string;
}

export interface IUserManage {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IDropDown {
  value: string;
  label: string;
}

export interface ISystemManage {
  id: string;
  category: string;
  subCategory: string;
  cd: string;
  value: string;
  remark?: string;
  status: string;
  createBy: string;
  createDt: string;
  updateBy: string;
  updateDt: string;
}
export interface IKeyTextBoxForm {
  [key: string]: ITextBoxForm;
}
export interface ITextBoxForm {
  value: string;
  isError: boolean;
  errorMessage: string[];
}
