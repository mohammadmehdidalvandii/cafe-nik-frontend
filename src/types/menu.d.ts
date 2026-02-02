export type ProductMenusProps = {
    id:string,
    name:string,
    description:string,
    size:object | null,
    categoryProduct:{
        name:string
    },
    is_active:boolean,
    base_price:number
}