export declare class CreateSourceV1Input {
    'slug': string;
    'enabled': boolean;
    'metadataId': string;
    'settings'?: any;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
