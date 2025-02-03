let a = {
    case: 'success'
}
switch (a.case){
    case 'success':
        console.log('done!');
        break;
    case 'error' :
        console.log('failed!');
        break;
        default:
            console.error('loading...');

}