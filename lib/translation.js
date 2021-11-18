const de = {
    "Home": "Heim",
    "About": "Über",
    "Projects": "Projekte",
    "Blog": "Blog",
}
export default (str, locale) => {
    console.log(str, locale)
    if (locale.toLowerCase() === 'de' && de[str]) {
        return de[str];
    }
    return str;
}



