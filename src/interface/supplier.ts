import { IKeyTextBoxForm, ITextBoxForm } from "./common";

export interface SearchCriteriaForm extends IKeyTextBoxForm {
  supplierCode: ITextBoxForm;
  supplierName: ITextBoxForm;
}

export interface SearchCriteria {
  supplierCode: string;
  supplierName: string;
}
export interface SearchResult {
  supplierCode: string;
  supplierName: string;
}
export interface SearchResultAction {
  supplierCode: () => void;
  supplierName: string;
}
