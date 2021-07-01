import { Color } from './theme';
export declare const MIN_HEIGHT = 1200;
export declare const HOUR_GUIDE_WIDTH = 50;
export declare const OVERLAP_OFFSET: number;
export declare const OVERLAP_PADDING: number;
export declare const commonStyles: {
    eventCell: {
        backgroundColor: Color;
        zIndex: number;
        start: number;
        end: number;
        borderRadius: number;
        padding: number;
        overflow: "hidden";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        minWidth: string;
    };
};
export declare const u: {
    flex: {
        flexDirection: "row";
    };
    'flex-row': {
        flexDirection: "row";
    };
    'flex-row-reverse': {
        flexDirection: "row-reverse";
    };
    'flex-column': {
        flexDirection: "column";
    };
    'flex-1': {
        flex: number;
    };
    'justify-between': {
        justifyContent: "space-between";
    };
    'justify-center': {
        justifyContent: "center";
    };
    'items-center': {
        alignItems: "center";
    };
    'self-center': {
        alignSelf: "center";
    };
    'border-l': {
        borderLeftWidth: number;
    };
    'border-t': {
        borderTopWidth: number;
    };
    'border-b': {
        borderBottomWidth: number;
    };
    'border-r': {
        borderRightWidth: number;
    };
    'border-gray-100': {
        borderColor: string;
    };
    'border-gray-200': {
        borderColor: string;
    };
    'mt-2': {
        marginTop: number;
    };
    'mt-4': {
        marginTop: number;
    };
    'mt-6': {
        marginTop: number;
    };
    'mb-6': {
        marginBottom: number;
    };
    'p-8': {
        padding: number;
    };
    'pt-2': {
        paddingTop: number;
    };
    'py-2': {
        paddingVertical: number;
    };
    'px-6': {
        paddingHorizontal: number;
    };
    'pb-6': {
        paddingBottom: number;
    };
    'text-gray-800': {
        color: string;
    };
    'text-gray-300': {
        color: string;
    };
    'text-2xl': {
        fontSize: number;
    };
    'text-center': {
        textAlign: "center";
    };
    'text-white': {
        color: string;
    };
    'text-primary': {
        color: Color;
    };
    'text-xs': {
        fontSize: number;
    };
    'text-sm': {
        fontSize: number;
    };
    rounded: {
        borderRadius: number;
    };
    'rounded-full': {
        borderRadius: number;
    };
    'z-0': {
        zIndex: number;
    };
    'z-10': {
        zIndex: number;
    };
    'z-20': {
        zIndex: number;
    };
    'bg-primary': {
        backgroundColor: Color;
    };
    'bg-white': {
        backgroundColor: string;
    };
    'w-36': {
        width: number;
    };
    'w-50': {
        width: number;
    };
    'h-36': {
        height: number;
    };
    'overflow-hidden': {
        overflow: "hidden";
    };
    absolute: {
        position: "absolute";
    };
};
export declare const eventTitleStyle: ({
    color: string;
} | {
    fontSize: number;
})[];
export declare const dateCellStyle: ({
    borderLeftWidth: number;
} | {
    borderBottomWidth: number;
} | {
    borderColor: string;
} | {
    backgroundColor: string;
})[];
export declare const guideTextStyle: ({
    color: string;
} | {
    textAlign: "center";
} | {
    fontSize: number;
})[];
