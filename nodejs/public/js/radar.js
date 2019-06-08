let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

function getStatus() {
  $.get(document.location.origin + "/api/distancesensor", (data) => {
    console.log(data);
    data = data.split("_");
    let s1 = data["sensor1"];
    let s2 = data["sensor2"];
    let s3 = data["sensor3"];
    s1 /= 58;
    s2 /= 58;
    s3 /= 58;
    console.log(s1, s2, s3);

    let divS1 = document.getElementById('sensor1');
    let divS2 = document.getElementById('sensor2');
    let divS3 = document.getElementById('sensor3');

    let c1 = convertCMToRGB(s1);
    let c2 = convertCMToRGB(s2);
    let c3 = convertCMToRGB(s3);

    divS1.style.backgroundColor = c1;
    divS2.style.backgroundColor = c2;
    divS3.style.backgroundColor = c3;

    console.log(c1, c2, c3);

    // ctx.rect(0, 0, 150, 50);
    // ctx.fillStyle = convertCMToRGB(s1);
    // ctx.fillRect(0, 0, 150, 50);
    //
    // ctx.rect(150, 0, 150, 50);
    // ctx.fillStyle = convertCMToRGB(s2);
    // ctx.fillRect(150, 0, 150, 50);
    //
    // ctx.rect(300, 0, 150, 50);
    // ctx.fillStyle = convertCMToRGB(s3);
    // ctx.fillRect(300, 0, 150, 50);
  });
}

function convertCMToRGB(cm) {
  if (cm > 85) { // Above 85cm, safe // green
    return "rgb(0, 255, 0)";
  } else if (cm >= 42.5) { // between 85cm and 42.5cm
    return "rgb(" + ((cm * 6) - 255) + ", 255, 0)";
  } else { // Under 42.5cm
    return "rgb(255, " + (cm * 6) + ", 0)";
  }
}


window.onload = setInterval(getStatus, 100);


/*

*** COLORS ***
Nothing wrong: rgb(0, 255, 0)
85cm: rgb(6, 255, 0)
42,5cm: rgb(255, 255, 0)
42cm: rgb(255, 252, 0)
40cm: rgb(255, 240, 0)
30cm: rgb(255, 180, 0)
20cm: rgb(255, 120, 0)
10cm: rgb(255, 60, 0)
5cm: rgb(255, 30, 0)
3cm: rgb(255, 18, 0)
2cm: rgb(255, 12, 0)
1cm: rgb(255, 6, 0)
0cm: rgb(255, 0, 0)
*/
