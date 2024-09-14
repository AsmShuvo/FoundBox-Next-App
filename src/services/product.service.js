import { httpAxios } from "@/helper/http.helper"

export const addItem =async (item)=>{
    const result = await httpAxios.post("/api/products")
}