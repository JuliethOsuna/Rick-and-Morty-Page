export interface MdCharacters {
    info:MdInfo;
    results:MdResults[];
}

export interface MdInfo {
    count:number;
    next:string;
    page:number;
    prev:string;
}

export interface MdResults {
    created:string;
    episode:Array<string>;
    gender:string;
    id:number;
    image:string;
    location:MdLocation[];
    origin:MdOrigin[];
    species:string;
    status:string;
    type:string;
    url:string;
}

export interface MdLocation {
    name:string;
    url:string;
}

export interface MdOrigin {
    name:string;
    url:string;
}


