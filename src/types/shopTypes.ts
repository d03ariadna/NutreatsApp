export interface CategoryMenuProps {
    activeProduct: "fruits" | "vegetables" | "nuts" | "meat" | "fish" | "dairy",
    setActiveProduct: React.Dispatch<React.SetStateAction<"fruits" | "vegetables" | "nuts" | "meat" | "fish" | "dairy">>
}

export type ProductCategory = "fruits" | "vegetables" | "nuts" | "meat" | "fish" | "dairy";

export type Product = {
  name: string,
  prices: Prices,
  img: string
}

export type Measure = 'lb' | 'kg' | 'gr' | 'oz';

export type Prices = {
  lb: number,
  kg: number,
  gr: number,
  oz: number
}

export interface ProductCardProps {
    name: string;
    measure: Measure;
    prices: Prices;
    img: string;
}