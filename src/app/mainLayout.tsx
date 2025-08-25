"use client";

import { ThemeProvider } from "@byteform/core";

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme="dark">
            <div className="flex flex-col min-h-screen bg-dark-900 text-white">
                {children}
            </div>
        </ThemeProvider>
    );
}
