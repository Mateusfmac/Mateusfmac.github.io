$(document).ready(function () {
  arrowTop()
  validaCadastro()
  validaTrabalheConosco()

  $(".card-popup").click(function (event) {
    $(".box-popup").addClass("active")
  })

  $(".close-box").click(function (event) {
    $(".box-popup").removeClass("active")
  })
})

//funcao para validar nome
function validaCadastro() {
  $("#form-cadastro").blur(function () {
    if ($(this).val() == "") {
      $(this).css({
        backgroundColor: "#FAA4A2"
      })
    }
  });
  $("#enviar1").click(function () {
    var cont = 0;
    $("#form-cadastro input").each(function () {
      if ($(this).val() == "") {
        $(this).css({
          backgroundColor: "#FAA4A2"
        })
        cont++;
      }
    });
    if (cont == 0) {
      alert("dados enviados")
    }
  });
}

function validaTrabalheConosco() {
  $("#formTrabalhe").blur(function () {
    if ($(this).val() == "") {
      $(this).css({
        backgroundColor: "#FAA4A2"
      })
    }
  });
  $("#enviar2").click(function () {
    var cont = 0;
    $("#formTrabalhe input, select").each(function () {
      if ($(this).val() == "") {
        $(this).css({
          backgroundColor: "#FAA4A2"
        })
        cont++;
      }
    });
    if (cont == 0) {
      alert("dados enviados")
    }
  });
}

function arrowTop() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#btnTop").show()
    } else {
      $("#btnTop").hide()
    }
  })
  $("#btnTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  })
}