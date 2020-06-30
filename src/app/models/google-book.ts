import { Book } from "./book";

export interface GoogleBooks {
  kind: string
  totalItems: number
  items: Book[]
}
