/// <reference types="node" />
import http from 'http';
import { AddConnectionFromSourceToWarehouse200Response } from '../model/addConnectionFromSourceToWarehouse200Response';
import { CreateValidationInWarehouse200Response } from '../model/createValidationInWarehouse200Response';
import { CreateValidationInWarehouseV1Input } from '../model/createValidationInWarehouseV1Input';
import { CreateWarehouse200Response } from '../model/createWarehouse200Response';
import { CreateWarehouseV1Input } from '../model/createWarehouseV1Input';
import { DeleteWarehouse200Response } from '../model/deleteWarehouse200Response';
import { GetConnectionStateFromWarehouse200Response } from '../model/getConnectionStateFromWarehouse200Response';
import { GetWarehouse200Response } from '../model/getWarehouse200Response';
import { ListConnectedSourcesFromWarehouse200Response } from '../model/listConnectedSourcesFromWarehouse200Response';
import { ListWarehouses200Response } from '../model/listWarehouses200Response';
import { PaginationInput } from '../model/paginationInput';
import { RemoveSourceConnectionFromWarehouse200Response } from '../model/removeSourceConnectionFromWarehouse200Response';
import { UpdateWarehouse200Response } from '../model/updateWarehouse200Response';
import { UpdateWarehouseV1Input } from '../model/updateWarehouseV1Input';
import { Authentication, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';
export declare enum WarehousesApiApiKeys {
}
export declare class WarehousesApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        token: HttpBearerAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: WarehousesApiApiKeys, value: string): void;
    set accessToken(accessToken: string | (() => string));
    addInterceptor(interceptor: Interceptor): void;
    addConnectionFromSourceToWarehouseAlpha(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddConnectionFromSourceToWarehouse200Response;
    }>;
    addConnectionFromSourceToWarehouseBeta(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddConnectionFromSourceToWarehouse200Response;
    }>;
    addConnectionFromSourceToWarehouseCurrent(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddConnectionFromSourceToWarehouse200Response;
    }>;
    addConnectionFromSourceToWarehouseV1(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddConnectionFromSourceToWarehouse200Response;
    }>;
    createValidationInWarehouseAlpha(CreateValidationInWarehouseV1Input: CreateValidationInWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateValidationInWarehouse200Response;
    }>;
    createValidationInWarehouseBeta(CreateValidationInWarehouseV1Input: CreateValidationInWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateValidationInWarehouse200Response;
    }>;
    createValidationInWarehouseCurrent(CreateValidationInWarehouseV1Input: CreateValidationInWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateValidationInWarehouse200Response;
    }>;
    createValidationInWarehouseV1(CreateValidationInWarehouseV1Input: CreateValidationInWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateValidationInWarehouse200Response;
    }>;
    createWarehouseAlpha(CreateWarehouseV1Input: CreateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWarehouse200Response;
    }>;
    createWarehouseBeta(CreateWarehouseV1Input: CreateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWarehouse200Response;
    }>;
    createWarehouseCurrent(CreateWarehouseV1Input: CreateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWarehouse200Response;
    }>;
    createWarehouseV1(CreateWarehouseV1Input: CreateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateWarehouse200Response;
    }>;
    deleteWarehouseAlpha(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteWarehouse200Response;
    }>;
    deleteWarehouseBeta(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteWarehouse200Response;
    }>;
    deleteWarehouseCurrent(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteWarehouse200Response;
    }>;
    deleteWarehouseV1(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeleteWarehouse200Response;
    }>;
    getConnectionStateFromWarehouseAlpha(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetConnectionStateFromWarehouse200Response;
    }>;
    getConnectionStateFromWarehouseBeta(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetConnectionStateFromWarehouse200Response;
    }>;
    getConnectionStateFromWarehouseCurrent(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetConnectionStateFromWarehouse200Response;
    }>;
    getConnectionStateFromWarehouseV1(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetConnectionStateFromWarehouse200Response;
    }>;
    getWarehouseAlpha(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouse200Response;
    }>;
    getWarehouseBeta(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouse200Response;
    }>;
    getWarehouseCurrent(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouse200Response;
    }>;
    getWarehouseV1(warehouseId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWarehouse200Response;
    }>;
    listConnectedSourcesFromWarehouseAlpha(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedSourcesFromWarehouse200Response;
    }>;
    listConnectedSourcesFromWarehouseBeta(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedSourcesFromWarehouse200Response;
    }>;
    listConnectedSourcesFromWarehouseCurrent(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedSourcesFromWarehouse200Response;
    }>;
    listConnectedSourcesFromWarehouseV1(warehouseId: string, pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListConnectedSourcesFromWarehouse200Response;
    }>;
    listWarehousesAlpha(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWarehouses200Response;
    }>;
    listWarehousesBeta(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWarehouses200Response;
    }>;
    listWarehousesCurrent(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWarehouses200Response;
    }>;
    listWarehousesV1(pagination: PaginationInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ListWarehouses200Response;
    }>;
    removeSourceConnectionFromWarehouseAlpha(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceConnectionFromWarehouse200Response;
    }>;
    removeSourceConnectionFromWarehouseBeta(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceConnectionFromWarehouse200Response;
    }>;
    removeSourceConnectionFromWarehouseCurrent(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceConnectionFromWarehouse200Response;
    }>;
    removeSourceConnectionFromWarehouseV1(warehouseId: string, sourceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RemoveSourceConnectionFromWarehouse200Response;
    }>;
    updateWarehouseAlpha(warehouseId: string, UpdateWarehouseV1Input: UpdateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWarehouse200Response;
    }>;
    updateWarehouseBeta(warehouseId: string, UpdateWarehouseV1Input: UpdateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWarehouse200Response;
    }>;
    updateWarehouseCurrent(warehouseId: string, UpdateWarehouseV1Input: UpdateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWarehouse200Response;
    }>;
    updateWarehouseV1(warehouseId: string, UpdateWarehouseV1Input: UpdateWarehouseV1Input, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateWarehouse200Response;
    }>;
}
