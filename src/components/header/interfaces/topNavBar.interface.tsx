export interface TopNavBar {
  label: string;
  subLabel?: string;
  children?: Array<TopNavBar>;
  href?: string;
}
