import api from "../api";

export async function apiGetItemsStock(){
  const response = await api.get(`/item/items-available`)
  return response.data
}