import { deleteBlog } from "@/db/blog/queries";

export default async function Delete({params: {id}}:{params: {id:number}}) {
    await deleteBlog(id);
}