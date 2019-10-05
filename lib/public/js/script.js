$(document).ready(function(){
  /* home_home */
  run_my_slide("noibat");
  run_my_slide("moi");

  /* box-product */
  $(".box-product .wrap-img img").click(function(){
    window.location.href = $(this).attr("purl");
  });

  /* product_detail */
  $("#product_detail_content .sub-img div").click(function(){
    $("#product_detail_content .main-img").html($(this).html());
  });

  /* footer */
  $("#footer_content .btn-subscribe").click(function(){
    var email = $("#footer_content .txt-email-subscribe").val();
    if(email == "")
    {
      alert("VUI LÒNG NHẬP ĐỊA CHỈ EMAIL!");
    }
    else
    {
      $.post("source/ajax.php?action=subscribe_email",
      {
        email: email
      },
      function(data){
        alert(data);
      });
    }
  });

  /* header */
  $("#header_logo .logo-col-r .ml-1 i").click(function(){
    $("#header_logo .logo-col-r .ml-1").hide();
    $("#header_logo .logo-col-r input").show().focus();
  });
  $("#header_logo .logo-col-r input").blur(function(){
    $("#header_logo .logo-col-r input").val("").hide();
    $("#header_logo .logo-col-r .ml-1").show();
  });
  $("#header_logo .logo-col-r input").keydown(function(event){
    var txt_s = $(this).val();
    if(event.which == 13 && txt_s != "") {
      window.location.replace('index.php?control=product&action=search&search=' + txt_s);
    }
  });

  /* add to cart */
  $(".box-addtocart .btn-add-to-cart").click(function(){
    var pid = $(this).attr("pid");
    var pname = $(this).attr("pname");
    var psize = $(this).attr("psize");
    var pimg = $(this).attr("pimg");
    var pprice = $(this).attr("pprice");
    var pnum = $(this).prev().val();

    $.post("source/ajax.php?action=add_to_cart",
    {
      pid: pid,
      pname: pname,
      psize: psize,
      pimg: pimg,
      pprice: pprice,
      pnum: pnum
    },
    function(data){
      alert(data);
    });
  });
});

function run_my_slide(id)
{
  $("#home_home_product ."+id+"-item").css("display", "none");
  $("#home_home_product ."+id+"-p1").css("display", "block");
  var num_nb = $("#num_"+id).html();
  if(num_nb == 0) {
    $("#home_home_product ."+id+"-paging").css("display", "none");
    $("#home_home_product .arrow-"+id).css("display", "none");
  }
  if(num_nb > 0 && num_nb < 5) {
    $("#home_home_product ."+id+"-paging .btn-"+id+"2").css("display", "none");
    $("#home_home_product ."+id+"-paging .btn-"+id+"3").css("display", "none");
    $("#home_home_product .arrow-"+id).css("display", "none");
  }
  if(num_nb >= 5 && num_nb < 9) {
    $("#home_home_product ."+id+"-paging .btn-"+id+"3").css("display", "none");
  }

  $("#home_home_product .btn-"+id+"1").click(function(){
    home_home_product_show_p1(id);
  });
  $("#home_home_product .btn-"+id+"2").click(function(){
    home_home_product_show_p2(id);
  });
  $("#home_home_product .btn-"+id+"3").click(function(){
    home_home_product_show_p3(id);
  });

  $("#home_home_product .arrow-"+id+".fa-chevron-left").click(function(){
      var cur_page = $("#cur_page_"+id).html();
      cur_page = Number(cur_page);
      if(cur_page == 1) {
          home_home_product_show_p3(id);
      }
      if(cur_page == 2) {
          home_home_product_show_p1(id);
      }
      if(cur_page == 3) {
          home_home_product_show_p2(id);
      }
  });
  $("#home_home_product .arrow-"+id+".fa-chevron-right").click(function(){
      var cur_page = $("#cur_page_"+id).html();
      cur_page = Number(cur_page);
      if(cur_page == 1) {
          home_home_product_show_p2(id);
      }
      if(cur_page == 2) {
          home_home_product_show_p3(id);
      }
      if(cur_page == 3) {
          home_home_product_show_p1(id);
      }
  });
}
function home_home_product_show_p1(id)
{
    $("#home_home_product ."+id+"-item").css("display", "none");
    $("#home_home_product ."+id+"-p1").fadeIn(500);
    $("#home_home_product .btn-"+id+"1").html('<i class="fas fa-circle"></i>');
    $("#home_home_product .btn-"+id+"2").html('<i class="far fa-circle"></i>');
    $("#home_home_product .btn-"+id+"3").html('<i class="far fa-circle"></i>');
    $("#cur_page_"+id).html("1");
}
function home_home_product_show_p2(id)
{
    $("#home_home_product ."+id+"-item").css("display", "none");
    $("#home_home_product ."+id+"-p2").fadeIn(500);
    $("#home_home_product .btn-"+id+"1").html('<i class="far fa-circle"></i>');
    $("#home_home_product .btn-"+id+"2").html('<i class="fas fa-circle"></i>');
    $("#home_home_product .btn-"+id+"3").html('<i class="far fa-circle"></i>');
    $("#cur_page_"+id).html("2");
}
function home_home_product_show_p3(id)
{
    $("#home_home_product ."+id+"-item").css("display", "none");
    $("#home_home_product ."+id+"-p3").fadeIn(500);
    $("#home_home_product .btn-"+id+"1").html('<i class="far fa-circle"></i>');
    $("#home_home_product .btn-"+id+"2").html('<i class="far fa-circle"></i>');
    $("#home_home_product .btn-"+id+"3").html('<i class="fas fa-circle"></i>');
    $("#cur_page_"+id).html("3");
}

/* onerror_image */
function onerror_image(x) {
  x.src = "public/img/no_image.png";
}
