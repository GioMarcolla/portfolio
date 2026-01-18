import React from "react";

interface RetryStateProps {
    timeLeft: number;
}

export const RetryState = React.memo(({ timeLeft }: RetryStateProps) => {
    return (
        <div className="flex flex-col justify-center items-center p-8 w-full h-full">
            <div className="text-center max-w-md">
                <div className="text-6xl mb-4">😴</div>
                <p className="text-xl font-medium mb-2">Oh no! Seems like the server is taking a nap.</p>
                <p className="text-lg">
                    Let me try again in <span className="font-bold text-primary">
                        {timeLeft <= 0 ? "now!" : `${timeLeft} second${timeLeft === 1 ? '' : 's'}`}
                    </span>
                </p>
            </div>
        </div>
    );
});

RetryState.displayName = "RetryState";