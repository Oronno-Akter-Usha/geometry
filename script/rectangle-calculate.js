function calculateRectangleArea(){
    //get width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    //get length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    //calculate rectangle area
    const area = width * length;
    console.log('Rectangle Area:', area);

    //display the rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}