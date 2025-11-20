import React from 'react';

interface IconWrapperProps {
    icon: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

export const IconWrapper = ({ icon, children, className = "" }: IconWrapperProps) => {
    return (
        <div className={`flex flex-row items-center gap-3 ${className}`}>
            {/* shrink-0 ensures the icon maintains size if text is long */}
            <div className="w-full">
                {children}
            </div>
            <div className="shrink-0 flex items-center justify-center text-xl">
                {icon}
            </div>
        </div>
    );
};