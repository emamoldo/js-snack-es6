const nameList = ['LucA', 'GiovAnni', 'francesca', 'RICCARdo', 'LOREnzo'];

const newNames = nameList.map(element => {
    return element.charAt(0).toLocaleUpperCase() + element.slice(1).toLowerCase();
})
console.log(newNames);