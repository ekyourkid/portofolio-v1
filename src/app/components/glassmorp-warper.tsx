import React from "react";

const GlassmorpWarpper = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?:string
}) => {
    return (
        <div className={"glassmorph w-8/12 " + className}>
            {children}
        </div>
    );
};

export default GlassmorpWarpper;
