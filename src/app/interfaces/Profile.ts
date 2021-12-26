export interface Profile {
  _id?: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  hash: string;
  groups?: any[];
  categories?: any[];
}
