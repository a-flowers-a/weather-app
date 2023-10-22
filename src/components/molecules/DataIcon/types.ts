import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface DataIconProps {
  /**Fontawesome icon */
  iconName: IconDefinition;
  /**Data to be shown */
  data: string;
  /**Description of the shown data */
  description: string;
  /**Extra styles for the container */
  containerStyles?: string;
  /**Extra styles for shown data */
  dataStyles?: string;
  /**Extra styles for icon */
  iconStyles?: string;
}
