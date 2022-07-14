

exports.getFirstError= (error)=> {

    let errObj= error.errors;
    let errorArray= Object.keys(errObj);

    if (errorArray.length>0) {

        return errObj[errorArray[0]]
    }else {
        return error.message
    }


}
