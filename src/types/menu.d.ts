export type ProductMenusProps = {
    id:string,
    name:string,
    description:string,
    size?:{
        small:number,
        medium:number,
        large:number
    } | null,
    categoryProduct:{
        name:string
    },
    is_active:boolean,
    base_price:number
}