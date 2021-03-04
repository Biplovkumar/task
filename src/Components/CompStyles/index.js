import { StyleSheet, Dimensions, Platform } from 'react-native';
import Fonts from '../../Utils/Fonts/Index';
import Config from '../../Utils/Config/Index';
import Colors from '../../Utils/Colors/Index';
const { height, width } = Dimensions.get('window');
let little = height / 7
export const l_margin = height / 7;
export const Margin = width / 20;
export const MinMargin = width / 40;
export const BigTitleFontSize = height / 35;
export const TitleFontSize = height / 45;
export const BorderRadius = height / 200;
export const ButtonFontSize = height / 60;
const THUMB_RADIUS = 12;


// --------------------- Components style page -------------------------
export default StyleSheet.create(props => ({
    z1: { zIndex: 1},
    flexGrow: { flexGrow: 1 },
    AlignC:{ alignItems: 'center' },
    h100: { height: '100%' },
    w100: { width: '100%' },
    jus: { justifyContent: "center"},
    AlcJcc:{ alignItems: 'center', justifyContent: 'center' },
    flexjustify: { flex: 1, justifyContent: 'center' },
    HeaderSearch: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end' },
    flex1: { flex: 1, flexDirection: 'row', },

    // ---------------------- Global button -------------------------
    GlobalButt: { fontSize: height / 50, color: props && props.LabelColor, marginHorizontal: height / 100 },

    // ----------------------  Thank You -------------------------
    ThankView: { flex: 5, justifyContent: 'flex-end', alignItems: 'center' },
    ThankView1: { flex: 5, justifyContent: 'flex-start', alignItems: 'center' },
    ThankViewTitle: { fontSize: height / 20, color: Colors.AppTxt, marginTop: Margin },
    ThankViewTitle1: { marginTop: Margin, fontSize: height / 48, color: Colors.AppTxt, textAlign: 'center', lineHeight: height / 30 },
    ThankView2: { marginTop: Margin, height: height / 13, width: width / 1.5, backgroundColor: Colors.Button, justifyContent: 'center', alignItems: 'center', borderRadius: height / 150 },





























































































































































    fl1: { flex: 1 },
    fl2: { flex: 2 },
    fl3: { flex: 3 },
    fl4: { flex: 4 },
    fl5: { flex: 5 },
    fl6: { flex: 6 },
    fl7: { flex: 7 },
    fl9: { flex: 9 },
    fl10: { flex: 10 },

}));


















const margin = height / 80;
const borderradius = height / 150
const UpArror = 'chevron-up'
const DownArror = 'chevron-down'
const TypeArrow = 'entypo'
const SideArror = 'chevron-right'
let pickerHeight = 0;
const MaxPickerHeight = height / 1.5
const HeaderFontSize = height / 32
const TitleBigFontSize = height / 43
const HeaderMediumFontSize = height / 35
const TitleSemiBigFontSize = height / 48
const TitleMediumFontSize = height / 55
const TitleSmallFontSize = height / 60
const TitleSemiSmallFontSize = height / 73

const PriceFontSize = height / 52
const PickerFontSize = height / 50
