import { Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const CustomFonts = {
    light: "Lato-Light",
    bold: "Lato-Bold",
    regular: "Lato-Regular",
    Montserrat: "Montserrat-Light",
    gbold: 'GothamRounded-Bold',
    g: 'GothamRounded-Book',
    glight: 'GothamRounded-Light',
    gmed: 'GothamRounded-Medium',
}

const size = {

    h1: HeightBy(10),
    h15: HeightBy(15),
    h2: HeightBy(20),
    h25: HeightBy(25),
    h3: HeightBy(30),
    h35: HeightBy(35),
    h4: HeightBy(40),
    h45: HeightBy(45),
    h5: HeightBy(50),
    h55: HeightBy(55),
    h6: HeightBy(60),
    h65: HeightBy(65),
    h7: HeightBy(70),
    h75: HeightBy(75),
    h8: HeightBy(80),
    h85: HeightBy(85),
    h9: HeightBy(90),
    h95: HeightBy(95),
    big: HeightBy(12.5),
    medium: HeightBy(22.5),
    input: HeightBy(27.5),
    regular: HeightBy(32.5),
    small: HeightBy(42.5),
    tiny: HeightBy(52.5),
    w1: WidthBy(10),
    w15: WidthBy(15),
    w2: WidthBy(20),
    w25: WidthBy(25),
    w3: WidthBy(30),
    w35: WidthBy(35),
    w4: WidthBy(40),
    w45: WidthBy(45),
    w5: WidthBy(50),
    w55: WidthBy(55),
    w6: WidthBy(60),
    w65: WidthBy(65),
    w7: WidthBy(70),
    w75: WidthBy(75),
    w8: WidthBy(80),
    w85: WidthBy(85),
    w9: WidthBy(90),
    w95: WidthBy(95),
    w98: WidthBy(98),
    w99: WidthBy(99)
}

const style = {

    h1: {
        fontSize: size.h1
    },
    h15: {
        fontSize: size.h15
    },
    h2: {
        fontSize: size.h2
    },
    h25: {
        fontSize: size.h25
    },
    h3: {
        fontSize: size.h3
    },
    h35: {
        fontSize: size.h35
    },
    h4: {
        fontSize: size.h4
    },
    h45: {
        fontSize: size.h45
    },
    h5: {
        fontSize: size.h5
    },
    h55: {
        fontSize: size.h55
    },
    h6: {
        fontSize: size.h6
    },
    h65: {
        fontSize: size.h65
    },
    h7: {
        fontSize: size.h7
    },
    h75: {
        fontSize: size.h75
    },
    h8: {
        fontSize: size.h8
    },
    h85: {
        fontSize: size.h85
    },
    h9: {
        fontSize: size.h9
    },
    h95: {
        fontSize: size.h95
    },
    big: {
        fontSize: size.big
    },
    medium: {
        fontSize: size.medium
    },
    input: {
        fontSize: size.input
    },
    regular: {
        fontSize: size.regular
    },
    small: {
        fontSize: size.small
    },
    tiny: {
        fontSize: size.tiny
    },
    w1: {
        fontSize: size.w1
    },
    w15: {
        fontSize: size.w15
    },
    w2: {
        fontSize: size.w2
    },
    w25: {
        fontSize: size.w25
    },
    w3: {
        fontSize: size.w3
    },
    w35: {
        fontSize: size.w35
    },
    w4: {
        fontSize: size.w4
    },
    w45: {
        fontSize: size.w45
    },
    w5: {
        fontSize: size.w5
    },
    w55: {
        fontSize: size.w55
    },
    w6: {
        fontSize: size.w6
    },
    w65: {
        fontSize: size.w65
    },
    w7: {
        fontSize: size.w7
    },
    w75: {
        fontSize: size.w75
    },
    w8: {
        fontSize: size.w8
    },
    w85: {
        fontSize: size.w85
    },
    w9: {
        fontSize: size.w9
    },
    w95: {
        fontSize: size.w95
    },
    w98: {
        fontSize: size.w98
    },
    w99: {
        fontSize: size.w99
    }
}

function HeightBy(n) {
    return Math.trunc(SCREEN_HEIGHT / n);
}

function WidthBy(n) {
    return Math.trunc(SCREEN_WIDTH / n);
}

export default {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    CustomFonts,
    size,
    style

}