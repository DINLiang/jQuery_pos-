/**
 * Created by ding on 15-3-19.
 */
//document.write("<script language='javascript' src='shopping_cart.js'></script>");
     function add_goods()
    {
        for(var k in all_items)
            $("#lists").dataTable().fnAddData(
                [all_items[k].sort,all_items[k].name,all_items[k].price,all_items[k].unit])

    //for(var i in all_items)
    //    $("#lists").dataTable().fnAddData(
    //        [all_items[i].sort, all_items[i].name, all_items[i].price, all_items[i].unit,all_items[i].barcode])
}
