var siteName = document.getElementById("siteName")
var siteURL = document.getElementById("siteURL")
var productList = []
if( localStorage.getItem("productList",JSON.stringify(productList))==null){
    productList = []
}else{
   productList = JSON.parse(localStorage.getItem("productList"))
   disPlayData()
}
function addProduct() {
    var product = {
        name: siteName.value,
        url: siteURL.value
    }
    productList.push(product)
    localStorage.setItem("productList",JSON.stringify(productList))
    disPlayData()
    clear()

}
function disPlayData() {
    var cartona = ""
    for (var i = 0; i < productList.length; i++) {
        cartona += ` <tr>
                <td>${i + 1}</td>
                <td>${productList[i].name}</th>
                <td><button class="btn btn-warning" onclick="visit(${productList[i].url})">Visit</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    }
    document.getElementById("bTable").innerHTML = cartona;
}
function clear() {
        siteName.value=""
        siteURL.value=""
}
function deleteProduct(index){
    productList.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productList))
    disPlayData()

}
function visit(url){
    window.open(url)
        localStorage.setItem("productList",JSON.stringify(productList))
    disPlayData()
}