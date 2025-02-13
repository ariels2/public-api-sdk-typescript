/**
 * Segment Public API
 * The Segment Public API helps you manage your Segment Workspaces and its resources. You can use the API to perform CRUD (create, read, update, delete) operations at no extra charge. This includes working with resources such as Sources, Destinations, Warehouses, Tracking Plans, and the Segment Destinations and Sources Catalogs.  All CRUD endpoints in the API follow REST conventions and use standard HTTP methods. Different URL endpoints represent different resources in a Workspace.  See the next sections for more information on how to use the Segment Public API.
 *
 * The version of the OpenAPI document: 32.0.2
 * Contact: friends@segment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class RegulationListEntryV1 {
    'id': string;
    'subjectType': string;
    'subjects': Array<string>;
    'status': RegulationListEntryV1.StatusEnum;
    'createdAt': string;
    'finishedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'subjectType',
            baseName: 'subjectType',
            type: 'string',
        },
        {
            name: 'subjects',
            baseName: 'subjects',
            type: 'Array<string>',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'RegulationListEntryV1.StatusEnum',
        },
        {
            name: 'createdAt',
            baseName: 'createdAt',
            type: 'string',
        },
        {
            name: 'finishedAt',
            baseName: 'finishedAt',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return RegulationListEntryV1.attributeTypeMap;
    }
}

export namespace RegulationListEntryV1 {
    export enum StatusEnum {
        FAILED = <any>'FAILED',
        FINISHED = <any>'FINISHED',
        INITIALIZED = <any>'INITIALIZED',
        INVALID = <any>'INVALID',
        NOT_SUPPORTED = <any>'NOT_SUPPORTED',
        PARTIAL_SUCCESS = <any>'PARTIAL_SUCCESS',
        RUNNING = <any>'RUNNING',
    }
}
