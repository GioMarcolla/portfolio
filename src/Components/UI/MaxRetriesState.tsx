import React from "react";

interface MaxRetriesStateProps {
    message?: string;
}

export const MaxRetriesState = React.memo(({
    message = "Max retries exceeded. Please try refreshing the page."
}: MaxRetriesStateProps) => {
    return (
        <div className="flex flex-col justify-center items-center p-8 w-full h-full">
            <div className="text-center max-w-md">
                <div className="text-6xl mb-4">😵</div>
                <p className="text-xl font-medium mb-2">Server is still sleeping...</p>
                <p className="text-lg">{message}</p>
            </div>
        </div>
    );
});

MaxRetriesState.displayName = "MaxRetriesState";