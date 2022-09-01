const mobileDetection = () => {
    if(/Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        return true;
    }
    else {
        // false for not mobile device
        return false;
    }
}

export default mobileDetection