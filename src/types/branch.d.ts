export type BranchCreateProps={
    name:string,
    country:string,
    city_id:string,
    address:string,
    users_id:string | undefined,
    phone:string
}

export type BranchesProps = {
    id:string,
    name:string,
    address:string,
    phone:string,
    city:{
        name:string,
    },
    user:{
        name:string
    },
    orders_count:number,
    total_revenue:number
}