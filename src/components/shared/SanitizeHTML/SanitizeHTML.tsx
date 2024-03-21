import { HTMLAttributes, createElement } from "react";
import sanitize from 'sanitize-html';

type SanitizeProps = {
    children: string
    tag: string
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: [
            'b',
            'i',
            'em',
            'strong'
        ]
    });
    return(createElement(tag, {...rest}, sanitizedHTML));
}