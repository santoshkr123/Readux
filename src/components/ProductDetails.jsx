import { useSelector } from "react-redux"

const ProductDetails = () => {
  const {productSlice} = useSelector((res)=>res)

  if(!productSlice)
    return (
      <h1 className="text-6xl font-bold text-center py-12">Data not available in redux store</h1>
    )

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 space-y-6">
          <img src={productSlice.image} className="w-[70%] mx-auto"/>
          <h1 className="font-bold text-6xl">{productSlice.title}</h1>
          <p className="text-gray-500">
            {productSlice.description}
          </p>
          <label className="bg-blue-600 px-6 py-2 rounded text-white capitalize font-semibold">{productSlice.category}</label>
          <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold ml-6">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductDetails
