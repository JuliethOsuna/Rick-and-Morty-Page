export interface MdRootStore {
    application:MdStore
}

export interface MdStore {
    show:string,
    filter:string,
    prevPage:string,
    nextPage:string
}