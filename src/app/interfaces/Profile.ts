export interface Profile {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  hash: string;
  groups?: any[];
  categories?: any[];
}
