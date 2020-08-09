export interface MdEpisodes {
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
    air_date:string;
    characters:Array<string>;
    created:string;
    episode:string;
    id:number;
    name:string;
    url:string;
}