var canvas_logo = document.getElementById("logo_image");
var canvas_fav = document.getElementById("fav_image");

canvas_logo.width = 5;
canvas_logo.height = 5;
canvas_fav.width = 5;
canvas_fav.height = 5;

var ctx_logo = logo_image.getContext("2d");
var ctx_fav = fav_image.getContext("2d");
var txt = "";
var txt2 = "";
var ico = window
  .getComputedStyle(document.querySelector("#icp-component i"), ":before")
  .content.replace(/'|"/g, "");
var ico_font_family = window.getComputedStyle(
  document.querySelector("#icp-component i")
).fontFamily;
var ico_font_weight = window.getComputedStyle(
  document.querySelector("#icp-component i")
).fontWeight;
var clr = "#000000";
var ico_clr = clr;
var ico_sz = 48;
var fnt = "Arial";
var fnt2 = "Arial";
var clr2 = "#cccccc";
var off_1 = 0;
var layout = 'HORIZONTAL';
var shapes = true;
var off_clr = "#f2f2f2";
var a_bold = "bold ";
var m_bold = "bold ";
var l_sp = 0;

var margin_w = 15;
var margin_h = 30;

$("#icp").iconpicker({});
$("#icp").on("iconpickerSelected", function (e) {
  ico = window
    .getComputedStyle(document.querySelector("#icp-component i"), ":before")
    .content.replace(/'|"/g, "");
  ico_font_family = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontFamily;
  ico_font_weight = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontWeight;
  render(layout);
});

document.getElementById("txt").oninput = function () {
  txt = document.getElementById("txt").value;
  render(layout);
};

document.getElementById("txt2").oninput = function () {
  txt2 = document.getElementById("txt2").value;
  render(layout);
};

document.getElementById("fx1").onclick = function () {
  if (off_1 !== 3) {
    off_1 = 3;
    
  } else {
    off_1 = 0;
  }
  render(layout);
};

document.getElementById("fx2").onclick = function () {
  clr = document.getElementById("clr").value;
  clr2 = hexToComplimentary(clr);
  document.getElementById("clr2").value = clr2;
  render(layout);
};

document.getElementById("fx4").onclick = function () {
  if (layout.toUpperCase() == 'HORIZONTAL') {
    layout = 'VERTICAL';
    document.getElementById("l_sp").hidden = false;
  } else {
    layout = 'HORIZONTAL';
    document.getElementById("l_sp").hidden = true;
  }
  render(layout);
};

document.getElementById("m_bold").onclick = function () {
  if (m_bold == "") {
    m_bold = "bold ";
  } else {
    m_bold = "";
  }
  render(layout);
};

document.getElementById("a_bold").onclick = function () {
  if (a_bold == "") {
    a_bold = "bold ";
  } else {
    a_bold = "";
  }
  render(layout);
};

document.getElementById("fx5").onclick = function () {
  if (shapes) {
    shapes = false;
  } else {
    shapes = true;
  }
  render(layout);
};

document.getElementById("clr").oninput = function () {
  clr = document.getElementById("clr").value;
  render(layout);
};

document.getElementById("clr2").oninput = function () {
  clr2 = document.getElementById("clr2").value;
  render(layout);
};

document.getElementById("off_clr").oninput = function () {
  off_clr = document.getElementById("off_clr").value;
  render(layout);
};

document.getElementById("ico_clr").oninput = function () {
  ico_clr = document.getElementById("ico_clr").value;
  render(layout);
};

document.getElementById("ico_sz").oninput = function () {
  ico_sz = document.getElementById("ico_sz").value;
  render(layout);
};

document.getElementById("l_sp").oninput = function () {
  l_sp = document.getElementById("l_sp").value;
  render(layout);
};

var fonts = [
  "Arial",
  "Montez",
  "Lobster",
  "Josefin Sans",
  "Shadows Into Light",
  "Pacifico",
  "Amatic SC",
  "Orbitron",
  "Rokkitt",
  "Righteous",
  "Dancing Script",
  "Bangers",
  "Chewy",
  "Sigmar One",
  "Architects Daughter",
  "Abril Fatface",
  "Covered By Your Grace",
  "Kaushan Script",
  "Gloria Hallelujah",
  "Satisfy",
  "Lobster Two",
  "Comfortaa",
  "Cinzel",
  "Courgette",
  "Annie Use Your Telescope",
  "Baloo",
  "Bowlby One SC",
  "Bungee Inline",
  "Cabin Sketch",
  "Caveat",
  "Contrail One",
  "Damion",
  "Economica",
  "Fascinate Inline",
  "Faster One",
  "Fredericka the Great",
  "Gabriela",
  "Just Another Hand",
  "Kodchasan",
  "Love Ya Like A Sister",
  "Megrim",
  "Monoton",
  "Mouse Memoirs",
  "Podkova",
  "Pompiere",
  "Quicksand",
  "Reenie Beanie",
  "Rokkitt",
  "Six Caps",
  "Source Sans Pro",
  "Special Elite",
  "Spicy Rice",
  "VT323",
  "Wire One",
];
var string = "";
var select = document.getElementById("select");
var select2 = document.getElementById("select2");
for (var a = 0; a < fonts.length; a++) {
  var opt = document.createElement("option");
  opt.value = opt.innerHTML = fonts[a];
  opt.style.fontFamily = fonts[a];
  select.add(opt);
}
for (var a = 0; a < fonts.length; a++) {
  var opt = document.createElement("option");
  opt.value = opt.innerHTML = fonts[a];
  opt.style.fontFamily = fonts[a];
  select2.add(opt);
}

document.getElementById("select").oninput = function () {
  fnt = document.getElementById("select").value;
  fontChange();
  render(layout);
};

document.getElementById("select2").oninput = function () {
  fnt2 = document.getElementById("select2").value;
  fontChange2();
  render(layout);
};

function fontChange() {
  var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
  document.body.insertAdjacentHTML(
    "beforeend",
    "<style> #text{ font-family:'" +
      y[x].text +
      "';}" +
      "#select{font-family:'" +
      y[x].text +
      "';</style>"
  );
}

function fontChange2() {
  var x = document.getElementById("select2").selectedIndex;
  var y = document.getElementById("select2").options;
  document.body.insertAdjacentHTML(
    "beforeend",
    "<style> #text{ font-family:'" +
      y[x].text +
      "';}" +
      "#select2{font-family:'" +
      y[x].text +
      "';</style>"
  );
}

/**
 * Render favicon and logo canvas
 * @param {String} layout : logo layout to be render
 */
function render(layout){
  if (layout.toUpperCase() == 'HORIZONTAL') {
    renderImage();
  } else {
    renderImage2();
  }
}

function renderImage() {
  document.fonts.ready.then((_) => {
    ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
    var ico_w = ctx_logo.measureText(ico).width;
    var ico_h = parseInt(ico_sz, 10);

    ctx_fav.font = ico_font_weight + " 48px " + ico_font_family;
    var ico_w2 = ctx_fav.measureText(ico).width;

    ctx_logo.font = m_bold + "48px " + fnt;
    var txt_w = ctx_logo.measureText(txt).width;
    var txt_h = parseInt(ctx_logo.font.match(/\d+/), 10);

    ctx_logo.font = a_bold + "48px " + fnt2;
    var txt2_w = ctx_logo.measureText(txt2).width;
    var txt2_h = parseInt(ctx_logo.font.match(/\d+/), 10);

    var max_h = Math.max(ico_h, txt_h, txt2_h);
    var start_ico = max_h;
    var start_txt = max_h - 2;

    canvas_logo.width = ico_w + txt_w + txt2_w + margin_w;
    canvas_logo.height = max_h + margin_h;
    canvas_fav.width = ico_w2 + 5;
    canvas_fav.height = 58;

    if (off_1 == 3) {
      ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(ico, off_1, start_ico + off_1);
      ctx_logo.font = m_bold + "48px " + fnt;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(txt, ico_w + off_1, start_txt + off_1);
    }

    if (off_1 == 3 && !shapes) {
      ctx_logo.font = a_bold + "48px " + fnt2;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(txt2, ico_w + 0 + txt_w + 5 + off_1, start_txt + off_1);
    }

    ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
    ctx_logo.fillStyle = ico_clr;
    ctx_logo.fillText(ico, 0, start_ico);
    ctx_fav.font = ico_font_weight + " 48px " + ico_font_family;
    ctx_fav.fillStyle = ico_clr;
    ctx_fav.fillText(ico, 0, 48);
    ctx_logo.font = m_bold + "48px " + fnt;
    ctx_logo.fillStyle = clr;
    ctx_logo.fillText(txt, ico_w, start_txt);

    if (txt2 != "" && shapes) {
      ctx_logo.strokeStyle = clr;
      ctx_logo.moveTo(ico_w + 0 + txt_w + 2, start_txt + margin_h / 2 - 3);
      ctx_logo.lineTo(ico_w + 0 + txt_w + 2, start_txt + margin_h / 2 - 3 - txt2_h);
      ctx_logo.arcTo(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        ico_w + 0 + txt_w + 5,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        3
      );
      ctx_logo.lineTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 3,
        start_txt + margin_h / 2 - 3 - txt2_h - 3
      );
      ctx_logo.arcTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 - txt2_h,
        3
      );
      ctx_logo.lineTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3
      );
      ctx_logo.arcTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 + 3,
        ico_w + 0 + txt_w + 2 + txt2_w + 3,
        start_txt + margin_h / 2 - 3 + 3,
        3
      );
      ctx_logo.lineTo(ico_w + 0 + txt_w + 5, start_txt + margin_h / 2 - 3 + 3);
      ctx_logo.arcTo(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 + 3,
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3,
        3
      );
      ctx_logo.lineWidth = 3;
      ctx_logo.stroke();
      ctx_logo.fillStyle = clr;
      ctx_logo.fillRect(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        txt2_w + 6,
        txt2_h + 6
      );
    }

    ctx_logo.font = a_bold + "48px " + fnt2;
    ctx_logo.fillStyle = clr2;
    ctx_logo.fillText(txt2, ico_w + 0 + txt_w + 5, start_txt);
  });
}

function renderImage2() {
  document.fonts.ready.then((_) => {
    canvas_logo.style.letterSpacing = 0 + "px";
    ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
    var ico_w = ctx_logo.measureText(ico).width;
    var ico_h = parseInt(ico_sz, 10);

    ctx_fav.font = ico_font_weight + " 48px " + ico_font_family;
    var ico_w2 = ctx_fav.measureText(ico).width;

    ctx_logo.font = m_bold + "48px " + fnt;
    var txt_w = ctx_logo.measureText(txt).width;
    var txt_h = parseInt(ctx_logo.font.match(/\d+/), 10);

    ctx_logo.font = a_bold + "12px " + fnt2;
    var txt2_w = ctx_logo.measureText(txt2).width;
    var txt2_h = parseInt(ctx_logo.font.match(/\d+/), 10);

    var max_w = Math.max(ico_w, txt_w, txt2_w);
    var center = (max_w + margin_w) / 2;

    canvas_logo.width = max_w + margin_w;
    canvas_logo.height = ico_h + txt_h + txt2_h + margin_h;
    canvas_fav.width = ico_w2 + 5;
    canvas_fav.height = 58;

    ctx_logo.textAlign = "center";

    if (off_1 == 3) {
      ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(ico, center + off_1, ico_h + off_1);
      ctx_logo.font = m_bold + "48px " + fnt;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(txt, center + off_1, ico_h + 5 + txt_h + off_1);
    }
    ctx_logo.font = ico_font_weight + " " + ico_sz + "px " + ico_font_family;
    ctx_logo.fillStyle = ico_clr;
    ctx_logo.fillText(ico, center, ico_h);
    ctx_fav.font = ico_font_weight + " 48px " + ico_font_family;
    ctx_fav.fillStyle = ico_clr;
    ctx_fav.fillText(ico, 0, 48);
    canvas_logo.style.letterSpacing = 0 + "px";
    ctx_logo.font = m_bold + "48px " + fnt;
    ctx_logo.fillStyle = clr;
    ctx_logo.fillText(txt, center, ico_h + 5 + txt_h);

    if (txt2 != "" && shapes) {
      ctx_logo.strokeStyle = clr;
      ctx_logo.moveTo(center - txt_w / 2, ico_h + 10 + txt_h + margin_h / 2);
      ctx_logo.lineTo(center + txt_w / 2, ico_h + 10 + txt_h + margin_h / 2);
      ctx_logo.lineWidth = 2;
      ctx_logo.stroke();
    }
    if (off_1 == 3) {
      canvas_logo.style.letterSpacing =
        document.getElementById("l_sp").value + "px";
      ctx_logo.font = a_bold + "12px " + fnt2;
      ctx_logo.fillStyle = off_clr;
      ctx_logo.fillText(
        txt2,
        center + off_1,
        ico_h + 5 + txt_h + 5 + txt2_h + off_1 + margin_h / 2
      );
    }
    canvas_logo.style.letterSpacing =
      document.getElementById("l_sp").value + "px";
    ctx_logo.font = a_bold + "12px " + fnt2;
    ctx_logo.fillStyle = clr2;
    ctx_logo.fillText(txt2, center, ico_h + 5 + txt_h + 5 + txt2_h + margin_h / 2);
    l_sp = 0;
  });
}

var btn_download_fav = document.getElementById("fav-download");
btn_download_fav.addEventListener(
  "click",function (e) {
    exportCanva(btn_download_fav, canvas_fav, "favicon"); 
  }
);
var btn_download_logo = document.getElementById("logo-download");
btn_download_logo.addEventListener(
  "click",
  function (e) {
    exportCanva(btn_download_logo, canvas_logo, "logo")
  }
);
function exportCanva(btn_download,canvas, filename) {
  var selectFormat = document.getElementById("selectFormat");
  var mimetype = selectFormat.options[selectFormat.selectedIndex].value;
  var extension = selectFormat.options[selectFormat.selectedIndex].text;
  switch (mimetype) {
    case "image/png":
      break;
    case "image/webp":
      break;
    case "image/jpeg":
      var canvas_temp = canvas.cloneNode(true);
      var ctx_temp = canvas_temp.getContext('2d');
      ctx_temp.fillStyle = '#FFF';
      ctx_temp.fillRect(0,0,canvas_temp.width,canvas_temp.height);
      ctx_temp.drawImage(canvas, 0, 0);
      canvas = canvas_temp;
      break;
    default:
      break;
  }
  var dataURL = canvas.toDataURL(mimetype);
  btn_download.setAttribute("download", filename + "." + extension);
  btn_download.href = dataURL;
}

/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex) {
  // Convert hex to rgb
  // Credit to Denis http://stackoverflow.com/a/36253499/4939630
  var rgb =
    "rgb(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .join(",") +
    ")";

  // Get array of RGB values
  rgb = rgb.replace(/[^\d,]/g, "").split(",");

  var r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  // Convert RGB to HSL
  // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2.0;

  if (max == min) {
    h = s = 0; //achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

    if (max == r && g >= b) {
      h = (1.0472 * (g - b)) / d;
    } else if (max == r && g < b) {
      h = (1.0472 * (g - b)) / d + 6.2832;
    } else if (max == g) {
      h = (1.0472 * (b - r)) / d + 2.0944;
    } else if (max == b) {
      h = (1.0472 * (r - g)) / d + 4.1888;
    }
  }

  h = (h / 6.2832) * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += 180;
  if (h > 360) {
    h -= 360;
  }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 | rgb).toString(16).substring(1);
}
