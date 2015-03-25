/**
 * Created by ding on 15-3-18.
 */
function loadAllItems() {
        return [
            {
                sort: '饮料',
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
            },
            {
                sort: '饮料',
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
            },
            {
                sort: '水果',
                barcode: 'ITEM000002',
                name: '苹果',
                unit: '斤',
                price: 5.50
            },
            {
                sort: '水果',
                barcode: 'ITEM000003',
                name: '荔枝',
                unit: '斤',
                price: 15.00
            },
            {
                sort: '生活用品',
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
            },
            {
                sort: '食品',
                barcode: 'ITEM000005',
                name: '方便面',
                unit: '袋',
                price: 4.50
            }
        ];
    }
    localStorage.setItem('goods', JSON.stringify(loadAllItems()));
    var all_items = JSON.parse(localStorage.getItem('goods'));
function get_goods()
{
    var html = ' <tr> <th id="sort">分类</th> <th id="name">名称</th> <th id="price">单价（元）</th> <th id="unit">单位</th> <th id="cart"></th> </tr> ';
    for(var i = 0;i < all_items.length;i++)
    {
        var key_id = i.toString();
        html = html + '<tr>';
        var item = all_items[i];
        html = html + "<td>" + item.sort + "</td><td>" + item.name + "</td><td>" + item.price + "</td><td>" + item.unit +"</td><td>" +
        '<button id = ' + key_id + ' onclick = "add_goods()" >加入购物车</button></td>';
        html = html + '</tr>';
    }
    $('#list').html(html);
}

function add_goods(){
    var key_id = parseInt(event.srcElement.id,0);
    var cart_item = all_items[key_id];
        cart_item.count = 1;
    var cart_goods_list = JSON.parse(localStorage.getItem('goods_list'))||[];
    if(cart_goods_list.length == 0){
        cart_goods_list.push(cart_item);
    }
    else{
        for(var i = 0; i < cart_goods_list.length; i ++){
            if(cart_goods_list[i].barcode == cart_item.barcode){
                cart_goods_list[i].count ++;
                break;
            }
            else if(cart_goods_list[i].barcode != cart_item.barcode && i == cart_goods_list.length-1){
                cart_goods_list.push(cart_item);
            }
        }
    }
    localStorage.setItem('goods_list', JSON.stringify(cart_goods_list));
}


//function add_goods()
//{
//    var key_id = parseInt(event.srcElement.id,0);
//    var cart_goods = all_items[key_id];
//    var cart_goods_list = [];
//        cart_goods_list.push(cart_goods);
//    var new_cart_goods_list = JSON.parse(localStorage.getItem('goods_list'))||[];
//    for(var i = 0;i < all_items.length; i++)
//    {
//        var temp = all_items[i];
//        var count = 0;
//        for (var j = 0; j < cart_goods_list.length;)
//        {
//            if (all_items[i].barcode == cart_goods_list[j].barcode)
//            {
//                count += 1;
//                cart_goods_list.splice(j,1);
//                j--;
//            }
//            j++;
//        }
//        if (count !== 0) {
//            temp.count = count;
//            new_cart_goods_list.push(temp);
//        }
//    }
//    localStorage.setItem('goods_list', JSON.stringify(new_cart_goods_list));
//}

















//function add_goods()
//{
//    $('#list').find('button').on('click',function()
//    {
//        var name = $(this).closest('tr').find('id').eq(1).text();
//        addNum(name);
//        refreshCart();
//    })
//}
//function addNum(item)
//{
//    var lists = JSON.parse(localStorage.lists );
//    lists[item] = parseInt(lists[item])+1;
//    localStorage.lists = JSON.stringify(lists);
//}
//function refreshCart()
//{
//    var lists = JSON.parse(localStorage.lists );
//    var num = 0;
//    _(lists).each(function(list)
//    {
//        num = list+num;
//    });
//    $('#shop_cart').find('#cartNumber').text(num);
//}