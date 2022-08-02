export function formartDate(str) {
    let date = new Date(str);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}