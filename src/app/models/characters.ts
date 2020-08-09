export interface MdCharacters {
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
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:MdOrigin;
    location:MdLocation;
    image:string;
    episode:Array<string>;
    url:string;
    created:string;
}

export interface MdLocation {
    name:string;
    url:string;
}

export interface MdOrigin {
    name:string;
    url:string;
}


