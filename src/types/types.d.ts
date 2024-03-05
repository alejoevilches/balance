export type Tag="happy" | "sad" | "angry" | "worried" | "anxious" | "nervious";

export interface Note{
  id:string,
  title:string,
  date:string,
  content:string,
  tags:Array<Tag>
}