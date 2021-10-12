import { color } from './colors';
import { markdown } from './md';

interface OptionsProps {
    font?: string;
    background?: string;
    effects?: string[];
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
}

export function style(text: string, options: OptionsProps) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
