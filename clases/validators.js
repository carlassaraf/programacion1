class Validator {

  static validarString(string) {

    if(string === null) {
      return false;
    }
    else if(string.trim() === "") {
      return false;
    }
    // else if(!isNaN(string)) {
    //   return false;
    // }
    return true;
  }

  static validarNumber(number) {

    if(isNaN(number)) {
      return false;
    }
    return true;
  }

}