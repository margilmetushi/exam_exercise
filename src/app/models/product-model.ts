export interface ProductModel {
    product: string,
    category: string, 
    brand: string, 
    ingredients: string,
    nutriscore_grade: string, 
    nutriscore_score: number,
    products: ProductModel[]
}
