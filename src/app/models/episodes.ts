export interface MdEpisodes {
    info:MdInfo;
    results:MdResults[];
}

export interface MdInfo {
    count:number;
    pages:number;
    next:string;
    prev:string;
}

export interface MdResults {
    id:number;
    name:string;
    air_date:string;
    episode:string;
    characters:Array<string>;
    url:string;
    created:string;
}