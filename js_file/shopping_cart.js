/**
 * Created by ding on 15-3-19.
 */
//document.write("<script language='javascript' src='shopping_cart.js'></script>");
function loadPromotions()
{
    return [
         {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes:
                [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
         }
    ];
}
     localStorage.setItem('free_goods', JSON.stringify(loadPromotions()));
     var promotion_goods = JSON.parse(localStorage.getItem('free_goods'));
console.log(promotion_goods);
     var show_list = JSON.parse(localStorage.getItem('goods_list'));
function show_cart_goods()
{
    var html = '<tr class="list_top"><th id="sort">分类</th><th id="name">名称</th><th id="price">单价（元）</th> <th id="unit">单位</th><th id="cart">数量</th><th id="count">小计</th></tr></thead>';
    for(var i = 0;i < show_list.length;i++)
    {
        var key_id = i.toString();
        html = html + '<tr>';
        var free_lists = [];
        var subtotal = show_list[i].price * show_list[i].count;
        for(var k in show_list)
        {
            show_list[k].free_count = 0;
            for(var j in promotion_goods[0].barcodes)
            {
                if(show_list[k].barcode == promotion_goods[0].barcodes[j])
                {
                    show_list[k].free_count = Math.floor(show_list[k].count/3);
                    free_lists.push (show_list[k]);
                }
            }
        }
        alert(show_list[k].count);
        alert(show_list[k].free_count);
        var new_subtotal = (show_list[k].count - show_list[k].free_count) * show_list[k].price;
        alert(new_subtotal);
        html = html + "<td>" + show_list[i].sort + "</td><td>" + show_list[i].name + "</td><td>" + show_list[i].price + "</td><td>" + show_list[i].unit + "</td><td>" +
        '<button id = ' + key_id + ' onclick = "add_goods()" >-</button>'+ show_list[i].count + '<button>+</button></td><td>' + new_subtotal + '元'+'(原价' + subtotal + '元)' +'</td>';
        html = html + '</tr>';
    }
    $('#lists').html(html);
}

