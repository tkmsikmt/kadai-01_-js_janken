

$("#area").change(function () {
  var r = $("option:selected").val();

  console.log(r);

  if (r ==0) {
    console.log("1800");
    $("h1").text("表参道");
    $("img").attr("src", "./img/omotesando.jpeg");
  }
  
  if (r ==1) {
    console.log("1801");
    $("h1").text("明治神宮前");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

  if (r == 2) {
    console.log("1802");

    $("h1").text("明治神宮前");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

  if (r == 3) {
    console.log("1803");

    $("h1").text("明治神宮前");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

  if (r == 4) {
    console.log("1804");

    $("h1").text("原宿");
    $("img").attr("src", "./img/meiji_jingumae.jpeg");
  }

  if (r == 5) {
    console.log("1805");

    $("h1").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  if (r == 6) {
    console.log("1806");

    $("h1").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  if (r == 7) {
    console.log("1807");

    $("h1").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  if (r == 8) {
    console.log("1808");

    $("h1").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

  if (r == 9) {
    console.log("1809");

    $("h1").text("原宿");
    $("img").attr("src", "./img/harajuku.jpeg");
  }

});




