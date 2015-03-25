/**
 * Created by ding on 15-3-19.
 */
//document.write("<script language='javascript' src='shopping_cart.js'></script>");
var show_list = JSON.parse(localStorage.getItem('goods_list'));
function show_cart_goods()
{
    var html = '<tr class="list_top"><th id="sort">分类</th><th id="name">名称</th><th id="price">单价（元）</th> <th id="unit">单位</th><th id="cart">数量</th><th id="count">小计</th></tr></thead>';
    for(var i = 0;i < show_list.length;i++)
    {
        var key_id = i.toString();
        html = html + '<tr>';
        var item = all_items[i];
        html = html + "<td>" + item.sort + "</td><td>" + item.name + "</td><td>" + item.price + "</td><td>" + item.unit +"</td><td>" +
        '<button id = ' + key_id + ' onclick = "add_goods()" >加入购物车</button></td>';
        html = html + '</tr>';
    }
    $('#lists').html(html);
}

