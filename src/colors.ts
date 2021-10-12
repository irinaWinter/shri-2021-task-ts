import { backgroundColors, effects, fontColors, Reset } from './model';

export type FontColor = keyof typeof fontColors;
export type BackgroundColor = keyof typeof backgroundColors;
export type Color = FontColor | BackgroundColor;
export type Effect = keyof typeof effects;

function addColor(text: string, color: Color, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Effect[]) {
    return effectList.map(effect => effects[effect]).join('');
}

export interface ColorProps {
    font?: FontColor 
    background?: BackgroundColor
    effects?: Effect[]
}

export function color(text: string, options?: ColorProps) {
    const preparedText: string = text.replace(/ё/g, 'е');
    let result: string = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
