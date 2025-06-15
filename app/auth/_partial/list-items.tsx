import { useApiFunction } from "@/app/hooks/useApiFunction";
import { IItemAvailable } from "@/app/lib/contracts/item/item.contract";
import { apiGetItemsStock } from "@/app/lib/services/api/item/item";
import Item from "@/app/ui/components/item";
import { LoadingComponent } from "@/app/ui/loading";
import { useEffect, useState } from "react";

export default function ListItems() {
  const { callApi, data, error, isFinish, isLoading } = useApiFunction(apiGetItemsStock)
  const [listItems, setListItems] = useState<IItemAvailable[] | []>([])

  useEffect(() => {
    callApi()
  }, [])

  useEffect(() => {
    if (isLoading) return
    if (isFinish && data) {
      setListItems(data)
    }
  }, [data, error, isFinish, isLoading])
  return (
    <>{
      isLoading && <LoadingComponent />
    }
    <div>
      {
        listItems.map((item: IItemAvailable) => (
          <Item
            action={() => console.log(item)}
            name={item.name}
            price={item.price}
          />
        ))
      }
    </div>
    </>
  )
}