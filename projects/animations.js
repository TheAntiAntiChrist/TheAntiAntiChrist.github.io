function animate_logo() {
  if (window.toggle == 0) {
    window.title.innerText = "> my projects_";
    window.toggle = 1;
  } else {
    window.title.innerText = "> my projects";
    window.toggle = 0;
  }
}

//function create_title() {
//  target_string = "> rev-57";
//  window.title.innerText += target_string[i];
//  for (i=0;i<target_string.length;i++) {
//    if (target_string[i] == ">") {
//      window.title.innerText += "> r";
//      i += 2;
//    } else {
//      window.title.innerText += target_string[i];
//    }
//  }
//}

//function initialise_logo() {
//  var target_string = "> rev-57";
//  for (i = 0; i < target_string.length; i++) {
//    setTimeout(function() {window.title.innerText[i] = target_string[i];}, 500);
//    console.log(window.title.innerText);
//  }

  //setInterval("animate_logo()", 500);
//}

function on_page_load() {
  window.toggle = 0;
  window.title = document.getElementById("title");

  //var elstring = "";
  //for (i=0;i<10;i++) {
  //  elstring += i;
  //  console.log(elstring);
  //}
  //create_title();
  //initialise_logo();
  setInterval("animate_logo()", 500);
}
