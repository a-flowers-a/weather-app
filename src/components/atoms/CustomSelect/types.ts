import { ChangeEvent } from "react";
import { SelectItem } from "../../../types/general";

export interface CustomSelectProps {
  /**Input id and name */
  id: string;
  /**Input's label string */
  label: string;
  /**Array of elect item structure to display in the select input*/
  options: SelectItem[];
  /**Funtion to handle input value change */
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
