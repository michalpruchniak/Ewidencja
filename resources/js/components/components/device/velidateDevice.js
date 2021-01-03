const validateDevice = (device, protocol) => {
    let validate = {
        flag: 1,
        msg: ''
    };
    if (protocol.list.find(x => x.id == device.id)) {
        validate.flag = 0;
        validate.msg = 'To urządzenie zostało już dodane'
    }
    if (protocol.fromTo.length < 1){
        validate.flag = 0;
        validate.msg = "Najpierw musisz stworzyć protokół przekazania"
    }

    return validate;

}
export default validateDevice;