"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const NoSSR = ({ children, fallback = null }: NoSSRProps) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
