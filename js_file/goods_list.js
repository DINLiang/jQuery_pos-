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
    var list = document.getElementById('list');
    var put = document.createElement("button");
    put.innerHTML = "加入购物车";
    put.id = "add_car";
    add_goods("add_car");
    for(var i in all_items)
        $("#list").dataTable().fnAddData(
            [all_items[i].sort, all_items[i].name, all_items[i].price, all_items[i].unit, put.outerHTML]);
}
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