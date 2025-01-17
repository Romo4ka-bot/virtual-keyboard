const languagesData =   [
    {
      iso_639_2: "eng",
      languageName: "English",
        translatedName:"English",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "q", "Q"], ["", "w", "W"], ["", "e", "E"], ["", "r", "R"], ["", "t", "T"], ["", "y", "Y"], ["", "u", "U"], ["", "i", "I"], ["", "o", "O"], ["", "p", "P"], ["", "[", "{"], ["", "]", "}"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "a", "A"], ["", "s", "S"], ["", "d", "D"], ["", "f", "F"], ["", "g", "G"], ["", "h", "H"], ["", "j", "J"], ["", "k", "K"], ["", "l", "L"], ["", ";", ":"], ["", "'", "\""], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "z", "Z"], ["", "x", "X"], ["", "c", "C"], ["", "v", "V"], ["", "b", "B"], ["", "n", "N"], ["", "m", "M"], ["", ",", "<"], ["", ".", ">"], ["", "/", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "type here"
    },
    {
      iso_639_2: "heb",
      languageName: "Hebrew",
        translatedName:"עברית",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "/"], ["", "'"], ["", "ק"], ["", "ר"], ["", "א"], ["", "ט"], ["", "ו"], ["", "ן"], ["", "ם"], ["", "פ"], ["", "[", "{"], ["", "]", "}"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "ש"], ["", "ד"], ["", "ג"], ["", "כ"], ["", "ע"], ["", "י"], ["", "ח"], ["", "ל"], ["", "ך"], ["", "ף"], ["", "."], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "ז"], ["", "ס"], ["", "ב"], ["", "ה"], ["", "נ"], ["", "מ"], ["", "צ"], ["", "ת"], ["", ","], ["", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "הקלד כאן"
    },
    {
      iso_639_2: "ara",
      languageName: "Arabic",
        translatedName:"عربيه<",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "ض"], ["", "ص"], ["", "ث"], ["", "ق"], ["", "ف"], ["", "غ"], ["", "ع"], ["", "ه"], ["", "خ"], ["", "ح"], ["", "[", "{"], ["", "]", "}"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "ج"], ["", "د"], ["", "ش"], ["", "س"], ["", "ي"], ["", "ب"], ["", "ل"], ["", "ا"], ["", "ت"], ["", "ن"], ["", "م"], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "ك"], ["", "ط"], ["", "ئ"], ["", "ؤ"], ["", "ر"], ["", "ا"], ["", "ى"], ["", "ة"], ["", "و"], ["", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "أكتب هنا"
    },

    {
      iso_639_2: "ukr",
      languageName: "ukranian",
        translatedName:"українська<",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "й"], ["", "ц"], ["", "у"], ["", "к"], ["", "е"], ["", "н"], ["", "г"], ["", "ш"], ["", "щ"], ["", "з"], ["", "х"], ["", "ї"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "ф"], ["", "і"], ["", "в"], ["", "а"], ["", "п"], ["", "р"], ["", "о"], ["", "л"], ["", "д"], ["", "ж"], ["", "є"], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "я"], ["", "ч"], ["", "с"], ["", "м"], ["", "и"], ["", "т"], ["", "ь"], ["", "б"], ["", "ю"], ["", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "друкуйте тут"
    },{
      iso_639_2: "rus",
      languageName: "russian",
        translatedName:"русский",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "й"], ["", "ц"], ["", "у"], ["", "к"], ["", "е"], ["", "н"], ["", "г"], ["", "ш"], ["", "щ"], ["", "з"], ["", "х"], ["", "ъ"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "ф"], ["", "ы"], ["", "в"], ["", "а"], ["", "п"], ["", "р"], ["", "о"], ["", "л"], ["", "д"], ["", "ж"], ["", "э"], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "я"], ["", "ч"], ["", "с"], ["", "м"], ["", "и"], ["", "т"], ["", "ь"], ["", "б"], ["", "ю"], ["", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "напечатайте здесь"
    },{
      iso_639_2: "por",
      languageName: "portuguese",
        translatedName:"Português",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "q", "Q"], ["", "w", "W"], ["", "e", "E"], ["", "r", "R"], ["", "t", "T"], ["", "y", "Y"], ["", "u", "U"], ["", "i", "I"], ["", "o", "O"], ["", "p", "P"], ["", "[", "{"], ["", "]", "}"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "a", "A"], ["", "s", "S"], ["", "d", "D"], ["", "f", "F"], ["", "g", "G"], ["", "h", "H"], ["", "j", "J"], ["", "k", "K"], ["", "l", "L"], ["", "ç", ":"], ["", "'", "\""], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "z", "Z"], ["", "x", "X"], ["", "c", "C"], ["", "v", "V"], ["", "b", "B"], ["", "n", "N"], ["", "m", "M"], ["", ",", "<"], ["", ".", ">"], ["", "/", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "digite aqui"
    },{
      iso_639_2: "spa",
      languageName: "spanish",
        translatedName:"Español",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "q", "Q"], ["", "w", "W"], ["", "e", "E"], ["", "r", "R"], ["", "t", "T"], ["", "y", "Y"], ["", "u", "U"], ["", "i", "I"], ["", "o", "O"], ["", "p", "P"], ["", "[", "{"], ["", "]", "}"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "a", "A"], ["", "s", "S"], ["", "d", "D"], ["", "f", "F"], ["", "g", "G"], ["", "h", "H"], ["", "j", "J"], ["", "k", "K"], ["", "l", "L"], ["", "ñ", ":"], ["", "ç", "\""], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "z", "Z"], ["", "x", "X"], ["", "c", "C"], ["", "v", "V"], ["", "b", "B"], ["", "n", "N"], ["", "m", "M"], ["", ",", "<"], ["", ".", ">"], ["", "/", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "escriba aquí"
    },{
      iso_639_2: "mkd",
      languageName: "macedonian",
        translatedName:"Македонски",
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "љ"], ["", "њ"], ["", "е"], ["", "р"], ["", "т"], ["", "ѕ"], ["", "у"], ["", "и"], ["", "о"], ["", "п"], ["", "ш"], ["", "ѓ"], ["key-fwslash", "\\", "|"]],
          [["key-caps", "caps"], ["", "а"], ["", "с"], ["", "д"], ["", "ф"], ["", "г"], ["", "х"], ["", "ј"], ["", "к"], ["", "л"], ["", "ч"], ["", "ќ"], ["", "ж"], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "з"], ["", "џ"], ["", "ц"], ["", "в"], ["", "б"], ["", "н"], ["", "м"], ["", ",", "<"], ["", ".", ">"], ["", "/", "?"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "пишувајте овде"
    },{
      iso_639_2: "fas",
      languageName: "Persian",
        translatedName:"فارسی",
        characters: [
            'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح','ج','چ','پ',
            'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م','ک','گ',
            'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'ئ','و','.','/'
        ],
        shiftCharacters: [
            'ً', 'ٌ', 'ٍ', 'ريال', '،', '؛', ',', ']', '[','\\','}','{','|',
            'َ', 'ُ', 'ِ', 'ّ', 'ۀ', 'آ', 'ـ', '«', '»', ':', '"',
            'ة','ي','ژ','ؤ','إ','أ','ء','<','>','؟',
        ],
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "ض"], ["", "ص"], ["", "ث"], ["", "ق", "ريال"], ["", "ف", "،"], ["", "غ", "؛"], ["", "ع", ","], ["", "ه", "]"], ["", "خ", "["], ["", "ح", "\\"], ["", "ج", "}"], ["", "چ", "{"], ["key-fwslash", "پ", "|"]],
          [["key-caps", "caps"], ["", "ش"], ["", "س"], ["", "ی"], ["", "ب", "ۀ"], ["", "ل", "آ"], ["", "ا", "ـ"], ["", "ت", "«"], ["", "ن", "»"], ["", "م", ":"], ["", "ک", "\""], ["", "گ",], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "ظ", "ة"], ["", "ط", "ي"], ["", "ز", "ژ"], ["", "ر", "ؤ"], ["", "ذ", "إ"], ["", "د", "أ"], ["", "ئ", "ء"], ["", "و", "<"], ["", ".", ">"], ["", "/", "؟"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "اینجا بنویس"
    },
    {
      iso_639_2: "hin",
      languageName: "Hindi",
        translatedName:"हिंदी",
        characters: [
            'ध', 'स', 'थ', 'क', 'फ', 'घ', 'अ', 'ह', 'ख', 'ह', 'ज', 'च', 'प',
            'श', 'स', 'य', 'ब', 'ल', 'आ', 'त', 'न', 'म', 'क', 'ग',
            'झ', 'ठ', 'ज', 'र', 'ड', 'ड़', 'ए', 'व', '.', '/',
        ],
        shiftCharacters: [
            'ं', 'ँ', 'इ', 'रुपए', '़', '़', '़', ']', '[', '\\', '}', '{', '|',
            'ा', 'ू', 'ी', '्', 'े', 'आ', ' ', '«', '»', ':', '"',
            'ट', 'इ', 'ज', 'ओ', 'इ', 'आ', 'अ', '<', '>', '।',
        ],
        keyList: [
          [["", "`", "~"], ["", "1", "!"], ["", "2", "@"], ["", "3", "#"], ["", "4", "$"], ["", "5", "%"], ["", "6", "^"], ["", "7", "&"], ["", "8", "*"], ["", "9", "("], ["", "0", ")"], ["", "-", "_"], ["", "=", "+"], ["key-bspc", "←"]],
          [["key-tab", "tab"], ["", "ध", "'ं"], ["", "स", "'ँ"], ["", "थ", "इ"], ["", "क", "ए"], ["", "फ", "'़"], ["", "घ", "'़"], ["", "अ", "'़"], ["", "ह", "]"], ["", "ख", "["], ["", "ह", "\\"], ["", "ज", "}"], ["", "च", "{"], ["key-fwslash", "प", "|"]],
          [["key-caps", "caps"], ["", "श", "'ा"], ["", "स", "'ू"], ["", "य", "'ी"], ["", "ब", "'्"], ["", "ल", "'े"], ["", "आ", "आ"], ["", "त", " "], ["", "न", "«"], ["", "म", "»"], ["", "क", ":"], ["", "ग", "\""], ["key-return", "↵"]],
          [["key-lshift", "shift"], ["", "झ", "ट"], ["", "ठ", "इ"], ["", "ज", "ज"], ["", "र", "ओ"], ["", "ड", "इ"], ["", "ड़", "आ"], ["", "ए", "अ"], ["", "व", "<"], ["", ".", ">"], ["", "/", "।"], ["key-rshift", "shift"]],
          [["key-lctrl", "ctrl"], ["key-lopt", "⌥"], ["key-lcmd", "⌘"], ["key-spc", "space"], ["key-rcmd", "⌘"], ["key-ropt", "⌥"], ["key-rctrl", "ctrl"]]
        ],
        placeholder: "यहाँ लिखें"
    }
];

export default languagesData;
const getLanguage = (languageName) => {
    const lowercasedLanguageName = languageName.toLowerCase();
    return languagesData.find((language) => language.languageName.toLowerCase() === lowercasedLanguageName);
};
export { getLanguage };
const findCharInLanguage = (language, char) => {
    const lowercasedChar = char.toLowerCase();
    const charIndex = language.characters.findIndex((c) => c === lowercasedChar);
    if (charIndex !== -1) {
        return charIndex;
    }
    const shiftCharIndex = language.shiftCharacters.findIndex((c) => c === lowercasedChar);
    return shiftCharIndex;
};

const findCharIndex = (char) => {
    for (let i = 0; i < languagesData.length; i++) {
        const language = languagesData[i];
        const indexInLanguage = findCharInLanguage(language, char);
        if (indexInLanguage !== -1) {
            return indexInLanguage;
        }
    }
    return -1; // Character not found in any language
};
export {findCharIndex}