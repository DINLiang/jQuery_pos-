/**
 * Created by ding on 15-3-27.
 */
$(function()
{
    home_show();
})
function home_show()
{
    var add_num = 0;
    var local_list = JSON.parse(localStorage.getItem('goods_list'));
    for (var k in local_list) {
        add_num += local_list[k].count;
    }
    $('#cart_num').html(add_num);
}