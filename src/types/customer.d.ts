export type CustomerProps = {
    id:string
    username:string,
    phone:string
    order:{
        id:string
        total_price:number | 0,
        status:string
        createdAt:date
        order_items:{
            quantity:number,
            menu:{
                name:string,
                base_price:number|null,
                size:string|null
            }[]
        }[]
        branch:{
            name:string
        }
    }[]
}