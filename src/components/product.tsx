import {FC} from "react";
import {ProductType} from "@/Interface";
import Link from "next/link";
import CustomImage from "@/components/customImage";

const Product:FC<{product:ProductType}>=({product})=>{
    return(
        <Link href={`/product/${product.id}`} className=" h-96 flex flex-col  p-6 rounded group border hover:scale-105 transition-transform ease-in-out duration-200">
                <div className="relative max-w-72 flex-1">
                    <CustomImage product={product} fill />
                </div>
                    <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">{product.category}</h3>
                <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
                    <p className="w-44 truncate">{product.title}</p>
                    <p>${product.price}</p>
                </div>
                <p className="leading-relaxed text-base line-clamp-2">{product.description}</p>
        </Link>
    )
}

export default Product;