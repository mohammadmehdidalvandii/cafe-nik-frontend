export type ProductMenusProps = {
    id:string,
    name:string,
    description:string,
    category_id:string
    size?:{
        small?:number,
        medium?:number,
        large?:number
    } | null,
    categoryProduct:{
        name:string
    },
    is_active:boolean,
    base_price:number 
}
export type ProductFormProps ={
    id?:string | undefined
    name:string,
    description:string,
    category_id:string,
    category_product?:string
    base_price:number | null,
    size:{
        small?:number,
        medium?:number,
        large?:number,
    } | null,
};

