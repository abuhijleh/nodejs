var arr =[];

arr.push(function () {
    console.log('function 1');
});

arr.push(function () {
    console.log('function 2');
});

arr.push(function () {
    console.log('function 3');
});

arr.forEach(
    function(item) {
        item();
    }
);




