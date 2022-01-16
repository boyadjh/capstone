export interface Group {
  _id?: string;
  name: string;
  description: string;
  creator?: string;
  members?: string[];
  admins?: string[];
}
