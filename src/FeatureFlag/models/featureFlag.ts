export interface FeatureGroup {
    title: string;
    items: FeatureFlag[];
};

export interface FeatureFlag {
    label: string;
    enabled: boolean;
    hasChildren: boolean;
    value?: number;
    children: FeatureFlag[] | [];
    name?: string;
};