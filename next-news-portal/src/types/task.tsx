export interface News {
    _id: string;
    userId: {
        _id : string,
        name : string
    },
    title : string,
    description : string,
    status : string,
    createdAt : string,
    updatedAt : string
}


export interface NewsCardProps {
    item : News
}