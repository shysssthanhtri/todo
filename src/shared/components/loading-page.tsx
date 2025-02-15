import { Loader2 } from "lucide-react";
import React from "react";

interface ILoadingPageProps {
  isLoading?: boolean;
  children: React.ReactNode;
}
export const LoadingPage = ({ isLoading, children }: ILoadingPageProps) => {
  return (
    <>
      {children}
      {isLoading && (
        <div className="fixed left-0 top-0 z-50 block h-full w-full bg-white opacity-75">
          <span className="r-4 relative top-1/2 mx-auto my-0 block h-0 w-0">
            <Loader2 className="mr-2 h-12 w-12 animate-spin" />
            <span className="sr-only">Loading...</span>
          </span>
        </div>
      )}
    </>
  );
};
