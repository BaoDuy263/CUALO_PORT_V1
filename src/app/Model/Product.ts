export interface Product
{
    id: number,
    code: string,
    name: string,
    typeProduct: string,
    groupId : string,
    unitId: string,
    quantity: string,
    status: boolean,
    isDeleted: boolean,
    createdOn: Date,
    modifiedOn: Date,
    createdBy: string,
    modifiedBy: string,
    price: string,
    
    
}

export interface lstProduct
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Product[]
}


export interface ProductCreate
{
   
    code: string,
    name: string,
    typeProduct: string,
    groupId : string,
    unitId: string,
    quantity: string,
    status: boolean,
    isDeleted: boolean,
    price: string,
  
}



export interface ProductEdit
{
    id: number,
    code: string,
    name: string,
    typeProduct: string,
    groupId : string,
    unitId: string,
    quantity: string,
    status: boolean,
    isDeleted: boolean,
    price: string,

}``