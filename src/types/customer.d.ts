export type CustomerProps = {
    id:string
    username:string,
    phone:string
    order:{
        total_price:number | 0,
        createdAt:date
        order_items:{
            quantity:number,
            menu:{
                name:string,
                base_price:number|null,
                size:string|null
            }[]
        }[]
    }[]
}