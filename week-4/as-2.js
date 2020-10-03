function ajax(src, callback){
    fetch(src,{method:'get'}).then(function(response){
        callback;
    })
};



function render(data){

    data.creatElement();
    data.appendChild();
}

// function ajax(src, callback){
//     // your code here
//     }
//     function render(data){
//     //callback
//     // your code here.
//     // document.createElement() and appendChild() are preferred. No innerHTML or
//     // something alike
//     }
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
    }); // you should get product information in JSON format and render data in the page