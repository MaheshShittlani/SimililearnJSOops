const generateID = (function() {
    let count = 0;
    const getEmpId = function() {
        ++count;
        return `Emp#${count}`;
    };
    return getEmpId;
})();

// const generateID = empId();
console.log('Alex: ',generateID()); // 1
console.log('Clark: ',generateID()); // 2