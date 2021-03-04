import { StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
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



export default StyleSheet.create(props => ({
    SafeAreaViewStyle: { flex: 1, backgroundColor: Colors.White, width: '100%' },
    Container: { flex: 1, backgroundColor: Colors.White, },
    Cont: { flex: 1, padding: Margin, },
    CenterCont: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    AlcJcc: { alignItems: 'center', justifyContent: 'center' },
    fl1: { flex: 1 },
    zIndex9: { zIndex: 9999 },

    hw100: { height: "100%", width: '100%' },
    Grey54: { color: Colors.Grey54 },
    // --------------------- LOGIN SCREEN -------------------------
    LLogo: { width: height / 15, height: height / 15 },
    WText: { fontSize: height / 35, color: Colors.IText },
    loginImg: { alignSelf: 'center', width: height / 4.5, height: height / 4.5 },
    TText: { flexDirection: 'row', flexWrap: 'wrap', textAlign: 'left', fontSize: height / 55, color: Colors.IText },
    InputLabel: { color: Colors.IText, fontSize: height / 55 },
    InputError: { fontSize: height / 65 },
    InputLIcon: { paddingLeft: height / little, paddingRight: height / little, },
    InputCont: { backgroundColor: Colors.bottomTab, padding: height / little, borderRadius: height / little, borderColor: Colors.trans },
    InputStyle: { fontSize: height / 45, color: Colors.IText },
    ButtonText: { textAlign: 'center', color: Colors.White, padding: height / 80, paddingVertical: height / 60, fontSize: height / 35 },
    LButton: { borderRadius: height / little, marginTop: height / 40, backgroundColor: Colors.Button },
    LButtonView: { position: 'absolute', bottom: 0, right: 0, left: 0 },
    BGDeepSky: { backgroundColor: Colors.DeepSkyBlue4 },
    FText: { textAlign: 'center', color: Colors.Button, fontSize: height / 40, paddingLeft: l_margin / 20, },

    // ----------------------Flat list  -----------------------------
    myCont: { marginHorizontal: height / 80, marginTop: -height / 25, padding: height / 80, borderRadius: height / 80, backgroundColor: Colors.Grey89 },
    myContainer: { flex: 1, marginTop: StatusBar.currentHeight || 0 },
    myItem: { backgroundColor: Colors.Grey89, padding: height / 40, marginVertical: height / 160, marginHorizontal: height / 80 },
    myTitle: { fontSize: height / 40 },
    SaveTitle: { fontWeight: '700', fontSize: height / 35 },
    SaveView: { padding: height / 40, marginVertical: height / 40, backgroundColor: Colors.Grey94 },

    // --------------------- LOADER -------------------------

    LoaderCont: { zIndex: 1, width: width, height: height / 1.2, alignItems: 'center', position: 'absolute', justifyContent: "center", backgroundColor: Colors.LoaderBG, },
    ThankuCont: { padding: MinMargin, zIndex: 1, width: width, height: height, alignItems: 'center', position: 'absolute', justifyContent: "center", backgroundColor: Colors.White, },
    LoaderCircle: { elevation: 2, width: height / 12, height: height / 12, borderRadius: height / 24, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.White },




    // ----------------------Contact Us  -----------------------------


    InputStyleContact: { alignSelf: 'flex-start', textAlignVertical: 'top', fontSize: height / 45, color: Colors.IText, },
    InputContContact: { backgroundColor: Colors.White, borderWidth: 1, height: height / 3, padding: height / little, borderRadius: height / little, borderColor: Colors.Grey94, },

    InputContContact1: { backgroundColor: Colors.White, borderWidth: 1, borderColor: Colors.Grey94, },
    FTextContact: { marginTop: MinMargin, fontSize: height / 50, textAlign: 'justify', lineHeight: height / 30 },
    titleContact: { fontSize: height / 30, color: Colors.IText, fontWeight: '500', },
    // -----------------------Change Password  ------------------------

    ChangePassImg: { alignSelf: 'center', width: height / 3, height: height / 3.75 },
    WCText: { alignSelf: 'center', fontWeight: '500', fontSize: height / 45, color: Colors.Delete },
    CTText: { flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center', fontSize: height / 55, color: Colors.IText },



    // --------------------- LOGIN SCREEN -------------------------
    ForgotImg: { alignSelf: 'center', width: width, height: height / 3 },
    FBText: { textAlign: 'center', color: Colors.Button, fontSize: height / 45 },


    // --------------------- AUTH SCREEN-------------------------
    AuthImg: { alignSelf: 'center', width: width, height: height, top: 0, },

    //  --------------------- COMPONENTS -------------------------



    //  --------------------- GlobalInput -------------------------
    input_style: { color: Colors.Black, fontSize: TitleFontSize, minHeight: 0 },
    LabelStyle: { fontSize: TitleFontSize, color: Colors.grey },
    DefaultErrorStyle: { height: 0, margin: 0 },
    IPIconDefaultContainerStyle: { height: 'auto', marginVertical: 0, paddingHorizontal: height / 100 },


    //  --------------------- GlobalButton -------------------------

    ButtonStyle: { width: props && props.Width ? props.Width : '100%', marginBottom: props && props.MarginBottom ? props.MarginBottom : 0, justifyContent: 'center', borderRadius: props && props.borderradius ? props.borderradius : BorderRadius, backgroundColor: props && props.BackColors ? props.BackColors : Colors.AppThemeColor },
    ButtonLabel: { fontSize: ButtonFontSize, letterSpacing: 0, marginVertical: props && props.ButtonPadding ? props.ButtonPadding : MinMargin, marginHorizontal: props && props.ButtonHorPadding ? props.ButtonHorPadding : Margin },





    // --------------------- SideMenu -------------------------

    SideMenuTabView: { backgroundColor: props && props.status ? Colors.Button : Colors.White, flex: 0.8, justifyContent: 'center', },
    SideMenuTabViewImg: { backgroundColor: props && props.status ? Colors.Button : Colors.White, alignItems: 'center', justifyContent: 'center', marginHorizontal: width / 40, flex: 0.2, },
    SideMenuImageStyle: { width: "100%", height: height / 4, justifyContent: 'center', },
    SideMenuTabMainView: { flexDirection: 'row', flex: 1, backgroundColor: props && props.status ? Colors.Button : Colors.White, height: height / 12 },
    SideMenuTabTextStyle: { color: props && props.status ? Colors.White : Colors.SideMenuText, fontSize: height / 40, fontWeight: '500', },
    TopView: { padding: Margin, },
    SideUserImageStyle: { backgroundColor: 'transparent', borderRadius: height / 15, width: height / 15, height: height / 15, borderColor: Colors.White, },
    SideUserImageView: { width: height / 10, height: height / 10, borderRadius: height / 20, justifyContent: 'center', alignItems: 'center', borderWidth: width / 20, borderColor: Colors.Button, },
    SideUserImageView1: { width: height / 11.5, height: height / 11.5, borderRadius: height / 23, justifyContent: 'center', alignItems: 'center', borderWidth: width / 20, borderColor: Colors.White1 },
    SideUserImageView2: { width: height / 13, height: height / 13, borderRadius: height / 26, justifyContent: 'center', alignItems: 'center', borderWidth: width / 20, borderColor: Colors.White2 },
    SideUserImageTxt: { color: Colors.White, fontSize: props && props.size ? props.size : height / 45, fontWeight: '500', },
    SideImageDashView: { position: "absolute", bottom: -8, justifyContent: 'flex-end' },
    SideImageDashTxt: { width: width * 0.8, color: Colors.Grey89, alignSelf: 'flex-end' },
    ParantDrop: { marginVertical: height / 80, flexDirection: 'row', justifyContent: 'space-between' },
    parentChildImg: { height: height / 18, width: height / 18, borderRadius: height / 36 },
    ParentPopup: { backgroundColor: Colors.White, borderRadius: height / 130, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, maxHeight: height / 4, padding: MinMargin, position: 'absolute', bottom: props && props.ChildArr ? props.ChildArr.length > 1 ? -height / 3.8 : -height / 6 : -height / 3.8, width: '100%', zIndex: 1 },



















    //----------------------- NoData ------------------------ 

    NoDataView: { flex: 1, height: height - (height / 7), justifyContent: 'center', alignItems: 'center' },
    NoDataText: { color: Colors.IText, fontWeight: '400', fontSize: height / 45 },
    // w:{width: `'${props.width}'%` },
    w10: { width: '10%' },
    w15: { width: '15%' },
    w20: { width: '20%' },
    w30: { width: '30%' },
    w40: { width: '40%' },
    w50: { width: '50%' },
    w60: { width: '60%' },
    w65: { width: '65%' },
    w70: { width: '70%', },
    w75: { width: '75%', },
    w80: { width: '80%' },
    w90: { width: '90%' },
    w100: { width: '100%' },


    h10: { height: height / 10 },
    h15: { height: height / 15 },
    h20: { height: height / 20 },
    h30: { height: height / 30 },
    h40: { height: height / 40 },
    h50: { height: height / 50 },
    h60: { height: height / 60 },
    h65: { height: height / 65 },
    h70: { height: height / 70 },
    h75: { height: height / 75 },
    h80: { height: height / 80 },
    h90: { height: height / 90 },
    h100: { height: height / 100 },

    m10: { margin: height / 10 },
    m20: { margin: height / 20 },
    m30: { margin: height / 30 },
    m40: { margin: height / 40 },
    m50: { margin: height / 50 },
    m60: { margin: height / 60 },
    m70: { margin: height / 70 },
    m80: { margin: height / 80 },
    m90: { margin: height / 90 },
    m100: { margin: height / 100 },

    p10: { padding: height / 10 },
    p20: { padding: height / 20 },
    p30: { padding: height / 30 },
    p40: { padding: height / 40 },
    p50: { padding: height / 50 },
    p60: { padding: height / 60 },
    p70: { padding: height / 70 },
    p80: { padding: height / 80 },
    p90: { padding: height / 90 },
    p100: { padding: height / 100 },

    mt10: { marginTop: height / 10, },
    mt20: { marginTop: height / 20, },
    mt25: { marginTop: height / 25, },
    mt30: { marginTop: height / 30, },
    mt40: { marginTop: height / 40, },
    mt50: { marginTop: height / 50, },
    mt60: { marginTop: height / 60, },
    mt70: { marginTop: height / 70, },
    mt80: { marginTop: height / 80, },
    mt90: { marginTop: height / 90, },
    mt100: { marginTop: height / 100, },

    mb4: { marginBottom: height / 4, },
    mb3_8: { marginBottom: height / 3.8, },

    mb5: { marginBottom: height / 5, },
    mb5_5: { marginBottom: height / 5.5, },
    mb6: { marginBottom: height / 6, },
    mb7: { marginBottom: height / 7, },
    mb10: { marginBottom: height / 10, },
    mb15: { marginBottom: height / 15, },
    mb20: { marginBottom: height / 20, },
    mb30: { marginBottom: height / 30, },
    mb40: { marginBottom: height / 40, },
    mb50: { marginBottom: height / 50, },
    mb60: { marginBottom: height / 60, },
    mb70: { marginBottom: height / 70, },
    mb80: { marginBottom: height / 80, },
    mb90: { marginBottom: height / 90, },
    mb100: { marginBottom: height / 100, },

    ml10: { marginLeft: height / 10, },
    ml20: { marginLeft: height / 20, },
    ml30: { marginLeft: height / 30, },
    ml40: { marginLeft: height / 40, },
    ml50: { marginLeft: height / 50, },
    ml60: { marginLeft: height / 60, },
    ml70: { marginLeft: height / 70, },
    ml80: { marginLeft: height / 80, },
    ml90: { marginLeft: height / 90, },
    ml100: { marginLeft: height / 100, },


    ph10: { paddingHorizontal: height / 10, },
    ph20: { paddingHorizontal: height / 20, },
    ph30: { paddingHorizontal: height / 30, },
    ph40: { paddingHorizontal: height / 40, },
    ph50: { paddingHorizontal: height / 50, },
    ph60: { paddingHorizontal: height / 60, },
    ph70: { paddingHorizontal: height / 70, },
    ph80: { paddingHorizontal: height / 80, },
    ph90: { paddingHorizontal: height / 90, },
    ph100: { paddingHorizontal: height / 100, },
    pMargin: { paddingHorizontal: Margin, },



    mh20: { marginHorizontal: height / 20, },
    mh40: { marginHorizontal: height / 40, },
    mh80: { marginHorizontal: height / 80, },
    mh90: { marginHorizontal: height / 90, },
    mh100: { marginHorizontal: height / 100, },

    mv15: { marginVertical: height / 15 },
    mv20: { marginVertical: height / 20 },
    mv30: { marginVertical: height / 30 },
    mv40: { marginVertical: height / 40 },
    mv50: { marginVertical: height / 50 },
    mv60: { marginVertical: height / 60 },
    mv80: { marginVertical: height / 80 },
    mv100: { marginVertical: height / 100 },






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
