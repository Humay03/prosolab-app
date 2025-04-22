import { PropsWithChildren } from "react";
import PublicHeader from "./_components/PublicHeader";


export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <>
            <PublicHeader />
            {children}
        </>
    );
}