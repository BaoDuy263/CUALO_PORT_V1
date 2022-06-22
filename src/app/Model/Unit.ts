export interface Unit
{
    id: number,
    name: string,
    note: string,
    createdOn : Date,
    modifiedOn : Date,
    createdBy : string,
    modifiedBy : string,
    // userId: string,
    status: boolean
}


export interface UnitCreate
{
   
    name: string,
    note: string,
    status: boolean
   
}



export interface UnitEdit
{
    id: number,
    name: string,
    note: string,
    status: boolean
}