export interface TestimonialsData {
    uid: string;
    data: {
        title: string;
        content: string;
        city:string;
        image:{
            url:string;
        }
    }
}

export interface BlogItemData {
    uid: string;
    lastPublicationDate: string;
    data: {
        titulo: string;
        banner: {
            url: string;
            alt: string;
        }
        content: {
            excerpt: string;
        }
    }
}
