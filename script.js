document.body.style.backgroundColor = '#ffb6c1';
const canvas = document.getElementById('canvas');
const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeColor = document.getElementById('large-hand-color');
const secondColor = document.getElementById('second-hand-color');
const button = document.getElementById('save-btn');



function clock() {
    const now = new Date();
    const context = canvas.getContext('2d');

    //setting up canvas
    context.save(); //this will save the default state
    context.clearRect(0, 0, 500, 500); //to clear the rectangle
    context.translate(250, 250); //to move canvas to the middle
    context.rotate(-Math.PI / 2); //to rotate -90 degrees

    //To set default styles
    context.strokeStyle = ' #000000';
    context.fillStyle = '#f4f4f4';
    context.lineWidth = 5;
    context.lineCap = 'round';

    //To draw clock face/border
    context.save();
    context.beginPath();
    context.lineWidth = 14;
    context.strokeStyle = borderColor.value;
    context.fillStyle = faceColor.value;
    context.arc(0, 0, 142, 0, Math.PI * 2, true);
    context.stroke(); //this will make the face of the clock appear
    context.fill();
    context.restore();

    //draw hour lines
    context.save();
    context.strokeStyle = lineColor.value;
    for (let i = 0; i < 12; i++) {
        context.beginPath();
        context.rotate(Math.PI / 6);
        context.moveTo(100, 0);
        context.lineTo(120, 0);
        context.stroke()
    }
    context.restore();

    //draw minutes lines
    context.save();
    context.strokeStyle = lineColor.value;
    context.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
        if (1 % 5 !== 0) {
            context.beginPath();
            context.moveTo(117, 0);
            context.lineTo(120, 0);
            context.stroke()
        }
        context.rotate(Math.PI / 30);
    }
    context.restore();

    //Get current time
    const hr = now.getHours() % 12;
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    // console.log(`${hr}: ${mins}: ${secs}`);

    // To draw hour hand
    context.save();
    context.rotate((Math.PI / 6) * hr + (Math.PI / 360) * mins + (Math.PI / 21600) * secs);
    context.strokeStyle = largeColor.value;
    context.lineWidth = '14';
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(80, 0);
    context.stroke();
    context.restore();

    //To draw the min hand
    context.save();
    context.rotate((Math.PI / 30) * mins + (Math.PI / 1800) * secs);
    context.strokeStyle = largeColor.value;
    context.lineWidth = '10';
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(112, 0);
    context.stroke();
    context.restore();

    //To draw sec hand
    context.save();
    context.rotate((Math.PI / 30) * secs);
    context.strokeStyle = secondColor.value;
    context.fillStyle = secondColor.value;
    context.lineWidth = '6';
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(100, 0);
    context.stroke();
    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2, true);
    context.fill();
    context.restore();

    context.restore(); //this restores default state

    requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

function saveImage() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'clock.png';
    link.href = dataURL;
    link.click();
}

button.addEventListener('click', saveImage);


