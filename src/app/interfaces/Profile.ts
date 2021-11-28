export interface Profile {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  hash: string;
  groups: any[];
  categories: any[];
}
