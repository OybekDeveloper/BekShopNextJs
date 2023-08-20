import Feature from "@/components/feature";
import {ProductType} from "@/Interface";
import Hero from "@/components/hero";
import Product from "@/components/product";
import Cta from "@/components/cta";

const ProductsPage =async ()=>{
    const res =await  fetch('https://fakestoreapi.com/products')
    const products:ProductType[] = await res.json();

    return(
        <>
            <Feature />
            <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
                <section className="flex flex-col space-x-12">
                    <h1 className="text-5xl font-bold text-center">
                        All products
                    </h1>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-8  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
                        {products.map((product)=>(
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
            <Cta/>
        </>
    )
}
export default ProductsPage