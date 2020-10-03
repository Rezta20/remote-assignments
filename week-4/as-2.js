function ajax(src, callback){
    fetch(src).then( function(response){
        response.text().then((t)=>{
            callback(t);
        });
    });
};


function render(data){
    let response =docuent.createElement('span');
    response.textContent = data;
    document.querySelector('body').appendChild(response);
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
    });