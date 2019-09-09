export interface DashboardItem {
  type: string;
  title?: string;
  class?: string;
  primary?: string;
  secondary?: string;
  primaryIcon?: string;
  secondaryIcon?: string;
  cols?: any[];
  data?: any[];
}
