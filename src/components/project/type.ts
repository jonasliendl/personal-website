export type ProjectItem = {
    title: string;
    description: string;
    image?: string;
    tags?: Tag[];
    links?: Link[];
};

export type Tag = {
    name: string;
    highlighted?: boolean;
};

export type Link = {
    type: LinkType;
    url: string;
};

export enum LinkType {
    ReadMore = "read-more",
    Visit = "visit",
    SourceCode = "source-code",
};
