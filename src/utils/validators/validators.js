
export const requiredField = (value) => {
    if(value) return undefined
    return "Field is required"
}

// export const maxLengthField = (value, values, props, name) => {
//
//     let maxLength = name.substr(name.length - 2, 2)
export const MaxLengthCreator = (maxLength) => (value) => {

    if(value.length > maxLength) return `Max length field has ${maxLength} symbols`
    return undefined
}

export const maxLength05 = MaxLengthCreator(5)
