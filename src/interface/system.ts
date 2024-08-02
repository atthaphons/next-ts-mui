import { IKeyTextBoxForm, ITextBoxForm } from "./common";

export interface SearchCriteria extends IKeyTextBoxForm {
    category: ITextBoxForm;
    subCategory: ITextBoxForm;
}
