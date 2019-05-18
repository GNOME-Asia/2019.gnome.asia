
export const setLang = (lang) => {
    
        localStorage.setItem('lang',lang)
    
    
    return ({
        type:"SET_LANG",
        payload:lang
    })
}

export const setLocation = (loc) => {
    
    localStorage.setItem('loc',loc)
    
    return ({
        type:"SET_LOC",
        payload:loc
    })
}

