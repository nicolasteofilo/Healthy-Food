const baseUrl = '';

const fontFamily = '"Nunito"';

const fontSize = {
    default: 22,
};

const getFontWeight = (family: 'Nunito-Thin' | 'Nunito-Light' | 'Nunito-Regular' | 'Nunito-Bold' | 'Nunito-Black'): number => {
    if (family === 'Nunito-Thin') {
        return 100;
    }
    if (family === 'Nunito-Light') {
        return 300;
    }
    if (family === 'Nunito-Regular') {
        return 400;
    }
    if (family === 'Nunito-Bold') {
        return 700;
    }
    if (family === 'Nunito-Black') {
        return 900;
    }
    return 0;
};

export default {
    baseUrl,
    fontFamily,
    fontSize,
    getFontWeight,
};
