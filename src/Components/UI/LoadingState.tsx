import React from "react";
import { LoaderCircle } from "lucide-react";

interface LoadingStateProps {
    dataType: string;
}

export const LoadingState = React.memo(({ dataType }: LoadingStateProps) => {
    return (
        <div className="flex flex-col justify-center items-center p-8 w-full h-full">
            <LoaderCircle className="text-primary animate-spin" size={48} />
            <p className="mt-4 text-foreground text-lg">
                Loading {dataType} data...
            </p>
        </div>
    );
});

LoadingState.displayName = "LoadingState";