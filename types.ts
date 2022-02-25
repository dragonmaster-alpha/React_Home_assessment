import { FunctionComponent } from "react";

export interface categoryList {
  title: string;
  items: Array<contentType>;
  id: string;
}

export interface contentType{
  id:string,
  title:string
  photoUrL:string
}
