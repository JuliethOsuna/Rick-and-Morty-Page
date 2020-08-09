export interface MdLocations {
    info:MdInfo;
    results:MdResults[];
}

export interface MdInfo {
    count:number;
    next:string;
    pages:number;
    prev:string;
}

export interface MdResults {
    created:string;
    dimension:string;
    id:number;
    name:string;
    residents:Array<string>;
    type:string;
    url:string;
}