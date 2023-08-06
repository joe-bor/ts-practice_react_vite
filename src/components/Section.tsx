 // React 18 changed a lot of how we used TS with React

import { ReactNode } from "react"


 // ------- OLD WAY ---------- //
//  import React from "react";

//  export const Section: React.FC<{ title: string}> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{ title }</h2>
//             <p>{ children }</p>
//         </section>
//     )
//  }

type SectionProps = {
    title?: string,
    children: ReactNode
}

/*
NOTES: 
- since we defined title to be optional inside our
SectionProps<type>
- we must provide a default value when we destructure our prop


 */
export const Section = ({ children, title = 'My Subheading' }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}