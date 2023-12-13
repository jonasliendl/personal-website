export type ProjectItem = {
    title: string;
    description: string;
    image?: string;
    link?: string;
    tags?: Tag[];
};

export type Tag = {
    name: string;
    highlighted?: boolean;
};
