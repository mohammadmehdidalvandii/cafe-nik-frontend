export type ProductMenusProps = {
    id:string,
    name:string,
    description:string,
    size:{
        small:string,
        medium:string,
        large:string
    } | null,
    categoryProduct:{
        name:string
    },
    is_active:boolean,
    base_price:number
}