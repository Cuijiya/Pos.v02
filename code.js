 */
var barcodearr =[
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
]

/*#1计算商品数量(15min)
input barcodearr: [String]

output newbarcodearr: [
{“barcode”, “count”},
 …
]*/

function getCount(barcodearr) {
    var newbarcodearr=[],index=0;
    for ( var i=0;i<barcodearr.length;) {
        var count=1;
        for (var j=i+1;j<barcodearr.length;j++) {
            if (barcodearr[i]===barcodearr[j]) {
                count++;
            }
        }
        newbarcodearr[index]=[];
        newbarcodearr[index].push(barcodearr[i], count);
        index++;
        i+=count;
    }
return newbarcodearr;
};

/*#2找到商品信息（15min）
input
newbarcodearr: [
{“barcode”, “count”},
 …
]

foodinfor: [
{barcode: ..., name: ..., unit: ..., price: …},
…
]

output foodlist: [
{barcode: ..., name: ..., unit: ..., price: ..., count: ...},
…
]*/

function getFoodList(newbarcodearr) {
var foodList=[];
    for (var i=0;i<newbarcodearr.length;i++) {
        for(var j=0;j<foodInfo.length;j++) {
            if (newbarcodearr[i][0]===foodInfo[j].barcode) {
                foodList.push(foodInfo[j]);
                foodList[i].count=newbarcodearr[i][1]
            }
        }
    }
    return foodList
};

/*#3计算每类商品价格(5min)
input foodlist:[
{barcode: ..., name: ..., unit: ..., price: ..., count: ...},
…
]        //根据price和count计算subtotal

output subtotal:[subtotal: …]*/

function getSubtotal(arr) {
    var subtotal, newArr = arr.slice();
    for (var i=0;i<arr.length;i++) {
        subtotal=arr[i].price*arr[i].count
        newArr[i].subtotal=subtotal
    }
    return newArr

};

/*#4计算总价(5min)
input subtotal:[subtotal: ...]
output total: number*/

function getTotal(arr) {
    var total=0;
    for(var i=0;i<arr.length;i++) {
        total+=arr[i].subtotal
    }
    return total
};

/*#5合并信息并打印(5min)
input
foodlist: [Object]
subtotal:[Object]
total: number

output finallist: print*/

function print(out,total) {
    console.log('***<没钱赚商店>收据***');
    for (i=0;i<out.length;i++) {
        console.log(`名称：${out[i].name}，数量：${out[i].count}${out[i].unit}，单价：${out[i].price}(元)，小计：${out[i].subtotal.toFixed(2)}(元)`);
    }
    console.log(`----------------------\n总计：${total.toFixed(2)}(元) \n**********************`);
};

var foodInfo =[{
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
},
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    },
    {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50
    }
]
var newbarcode=getCount(barcodearr)
var foodList=getFoodList(newbarcode)
var subtotal=getSubtotal(foodList)
var total=getTotal(subtotal)
print(foodList,total)
