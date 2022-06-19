const formatDate = (date) => {
    const newDate = new Date(date);

    let day = `${newDate.getDate()}`;
    let month = `${newDate.getMonth() + 1}`
    const year = `${newDate.getFullYear()}`

    if(day.length < 2){
        day = '0' + day;
    }
    if(month.length < 2){

        month = '0' + month;
    }

    const text = [year, month, day ].join("-");
    return text;
}
export default formatDate