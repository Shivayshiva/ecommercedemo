// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

export const setlogin=()=>{
    return{
        type:"LOGGEDIN"
    }
}

export const setlogout=()=>{
    return{
        type:"LOGGEDOUT"
    }
}

export const addDatabaseItem=(product)=>{
    return{
        type:"ADDITEMFROMREMOTE",
        payload:product
    }
}

export const emptyCart=()=>{
    return{
        type:"EMPTYCART"
    }
}