

export const initialState = {
    qus:[{queText: "Quse", qusType:"radio", Option:[{optionText:"option 1"}], open: true, required: false}],
    qusType: "radio",
    doc_name: "New form",
    doc_desc: "add the dis"    
}

export const actionType = {
    SET_QUS: "SET_QUS",
    CHANGE_TYPE: "CHANGE TYPE",
    SET_DOC_NAME: "SETDOCNA",
    SET_DOC_DESC: "SETDOCDES"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.SET_QUS :
            return {
                ...state, qus:action.qus,
            };
        case actionType.CHANGE_TYPE :
            return {
                ...state, qusType:action.qusType,
            }
        case actionType.SET_DOC_NAME :
            return {
                ...state, doc_name:action.doc_name
            }
        case actionType.SET_DOC_DESC : 
            return {
                ...state, doc_desc:action.doc_desc
            }
        default: 
        return state;
    }
}

export default reducer;
