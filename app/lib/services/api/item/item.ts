import api from "../api";

export async function apiGetItemsStock(){
  const response = await api.get(`/item/items-available`)
  return response.data
}

export async function apiPostCreateItem(item:any){
  const response = await api.post(`/item`, item)
  return response.data
}