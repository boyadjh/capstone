export interface Group {
  _id?: string;
  name: string;
  desc: string;
  creator: string;
  members?: string[];
  admins: string[];
}
