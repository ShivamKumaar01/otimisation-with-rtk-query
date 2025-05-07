
import { useGetAllProductsQuery } from '../redux/product-api';


const Table = () => {
  const{data}=useGetAllProductsQuery()
  console.log(data,"This is data comming from api");
  return (
    <div>
      
    </div>
  )
}

export default Table
