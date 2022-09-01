export const emailValidation = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const phoneNumberValidation = (number) => {
    let phoneNumber = (number).toString().replace(/[^0-9]+/g,'');

    return phoneNumber.match(/5\d{6,7}$/);
}

export const personalCodeValidation = (id) => {
    return id.match(/^[1-6]{1}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$/);
}