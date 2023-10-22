import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface DataIconProps {
  iconName: IconDefinition;
  data: string;
  description: string;
  containerStyles?: string;
  iconStyles?: string;
}
