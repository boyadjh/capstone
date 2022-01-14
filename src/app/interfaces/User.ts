export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  groups?: any[];
}
