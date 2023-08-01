function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
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

  //To draw clock face
  context.save();
  context.beginPath(); 
  context.lineWidth = 14;
  context.strokeStyle = '#800000';
  context.arc(0, 0, 142, 0, Math.PI * 2, true);
  context.stroke(); //this will make the face of the clock appear
    context.restore();
    context.fill();

  context.restore(); //this restores the default state
}

clock();
