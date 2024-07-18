import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import { TextFieldInForm } from "@/app/types/text.field.inform";


export type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type IToken = {
  accessToken: string;
  refreshToken?: string;
};


export interface MaterialMasterSearchResult {
  matCd: string;
  matName: string;
  cmpyCd: string;
  id: string;
}


export interface MaterialDetailsForm {
  matCd: TextFieldInForm;
  matName: TextFieldInForm;
  cmpyCd: TextFieldInForm;
  id: TextFieldInForm;

}


