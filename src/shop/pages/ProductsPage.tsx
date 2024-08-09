import { Citrus , Carrot, Nut, Beef, Fish, Milk, ChevronDown } from 'lucide-react'
import { DropDownBtn, ProductCard } from '../components'
import { products } from '../../data/products'
import { useEffect, useState } from 'react'
import { CategoryMenu } from '../components/CategoryMenu';

type Prices ={
  lb: number,
  kg: number,
  gr: number,
  oz: number
}
type ProductCategory = keyof typeof products;
type Product = {
  name: string,
  prices: Prices,
  img: string
}

type Measure = 'lb' | 'kg' | 'gr' | 'oz';

export const ProductsPage = () => {

  const [activeProduct, setActiveProduct] = useState<ProductCategory>('fruits');
  const [productList, setProductList] = useState<Product[]>(products[activeProduct]);
  const [measure, setMeasure] = useState<Measure>('lb');

  useEffect(() => {

    const newList:Product[] = products[activeProduct]

    setProductList(newList)

  }, [activeProduct])
  return (
    <section className='main-container'>
      <div className='flex justify-between items-center'>
        <h1 className='text-5xl my-4'>Products</h1>
        <DropDownBtn measure={ measure } setMeasure={ setMeasure }/>
      </div>
      <hr className='border-2 border-gray-200' />
      
      <section>

        <CategoryMenu activeProduct={activeProduct} setActiveProduct={setActiveProduct} />

        <section className='py-8 text-center'>
          <h2 className='text-4xl'>{activeProduct.toUpperCase()}</h2>

          
          <div className='flex justify-center flex-wrap gap-16  my-8'>
            {
              productList.map((product) => (
                <ProductCard key={product.name} measure={measure} {...product} />
              ))
            }
          </div>
        </section>
      </section>
    </section>
  )
}
