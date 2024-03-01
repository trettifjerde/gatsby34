import { BG_POS_PROPERTY_NAME, COLOR1_PROPERTY_NAME, COLOR2_PROPERTY_NAME, LAST_COLOR_N, BG_POS_SHIFT_STEP } from '../config';

export const HELLO_CONTENT = [
    {
        lang: 'no',
        h1: "Hei!",
        section: "Jeg heter Sasja.",
    },
    {
        lang: 'ru',
        h1: "Привет!",
        section: "Меня зовут Саша.",
    },
    {
        lang: 'hr',
        h1: "Bok!",
        section: "Zovem se Aleksandra.",
    },
    {
        lang: 'en',
        h1: "Hi there!",
        section: "My name is Sasha.",
    },
];

export function updateGradient(current: [number, number]) {
    const nextColorDir = getNextColorDir(current) as [number, number];
    const color = nextColorDir[0];
    const bgStep = BG_POS_SHIFT_STEP * color;

    document.documentElement.style.setProperty(BG_POS_PROPERTY_NAME, `${bgStep}%`);
    document.documentElement.style.setProperty(COLOR1_PROPERTY_NAME, `var(--c${color})`);
    document.documentElement.style.setProperty(COLOR2_PROPERTY_NAME, `var(--c${color + 1})`);

    return nextColorDir;
}

function getNextColorDir(current: [number, number]) {
    const [color, direction] = current;
    const nextFirstColor = color + direction;

    if ((nextFirstColor === LAST_COLOR_N) || (nextFirstColor === 0))
        return [color - 1, direction * -1];

    return [nextFirstColor, direction];
}