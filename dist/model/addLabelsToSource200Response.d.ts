import { AddLabelsToSourceAlphaOutput } from './addLabelsToSourceAlphaOutput';
export declare class AddLabelsToSource200Response {
    'data'?: AddLabelsToSourceAlphaOutput;
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
