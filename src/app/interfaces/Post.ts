export interface Post {
  _id: string;
  poster: string;
  title: string;
  body: string;
  groups: [string];
}
