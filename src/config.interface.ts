import { WorkspaceConfiguration } from "vscode";

export interface Config extends WorkspaceConfiguration {
    files: {
        filter: {
            create: boolean,
            extension: string,
            template?: string
        },
        controller: {
            create: boolean,
            extension: string,
            template?: string
        },
        directive: {
            create: boolean,
            extension: string,
            template?: string
        },
        configRoute: {
            create: boolean,
            extension: string,
            template?: string
        },
        testFile: {
            create: boolean,
            extension: string,
            template?: string
        },
        service: {
            create: boolean,
            extension: string,
            template?: string
        },
        serviceTestFile: {
            create: boolean,
            extension: string,
            template?: string
        },
        component: {
            create: boolean,
            extension: string,
            template?: string
        },
        componentTestFile: {
            create: boolean,
            extension: string,
            template?: string
        },
        css: {
            create: boolean,
            extension: string,
            template?: string
        },
        html: {
            create: boolean,
            extension: string,
            template?: string
        },
        module: {
            create: boolean,
            extension: string,
            template?: string
        }
    };
    globals: {
        applicationName: string,
        prefix: string,
        test:{
            path: string,
            exclude: string[],
            postfix: string
        },
        sharedConstant: string,
        srcConstant: string
    };
};
