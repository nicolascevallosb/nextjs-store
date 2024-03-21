interface ErrorPageProps {
    error: Error,
    reset: () => void,
}

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    gql_id: string;
};

type CartItem = {
    title: string;
    price: number;
    quantity: number;
    id: string;
    image: string;
    merchandiseId: string;
}

interface SmartCollection {
    id: number;
    handle: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    published_at: string;
    updated_at: string;
    rules: {
        column: string;
        relation: string;
        condition: string;
    }[];
    disjunctive: boolean;
    sort_order: string;
    template_suffix: string | null;
    admin_graphql_api_id: string;
}

type Collection = Pick<SmartCollection, "id" | "handle" | "title">;

type ProductType = {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};