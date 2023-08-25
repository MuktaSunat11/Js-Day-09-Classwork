# Div Properties
This is a simple web application that allows users to change various properties of a <div> element using dropdown menus.

The goal of the task was to create a web page with 5 dropdown menus that can change the following properties of a <div> element:

Color of the text
Background color
Padding
Font size
Font weight

#HTML

The HTML code creates a container div and a target div.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Div Properties</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="sections-container">
        <div class="section">
          <div class="container">
        
            <label for="color">Choose Text Color:</label>
            <select id="color">
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
            <br /><br />
  
            <label for="bgColor">Choose Background Color:</label>
            <select id="bgColor">
              <option value="white">White</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
            </select>
            <br /><br />
  
            <label for="padding">Choose Padding:</label>
            <select id="padding">
              <option value="10px">10px</option>
              <option value="20px">20px</option>
              <option value="30px">30px</option>
              <option value="40px">40px</option>
            </select>
            <br /><br />
  
            <label for="fontSize">Choose Font Size:</label>
            <select id="fontSize">
              <option value="12px">12px</option>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="20px">20px</option>
            </select>
            <br /><br />
  
            <label for="fontWeight">Choose Font Weight:</label>
            <select id="fontWeight">
              <option value="light">Light</option>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
            </select>
            <br /><br />
          </div>
        </div>
  
        <div class="section">
          <div id="changingDiv">
            This is a sample text. You can change the Div Properties using dropdown!
          </div>
        </div>
      </div>

          <script src="./index.js"></script>
</body>
</html>

#Javascript

Create a JavaScript file and add the following code:

const colorSelect = document.getElementById("color");
      const bgColorSelect = document.getElementById("backgroundcolor");
      const paddingSelect = document.getElementById("padding");
      const fontSizeSelect = document.getElementById("fontsize");
      const fontWeightSelect = document.getElementById("fontweight");
      const changingDiv = document.getElementById("changingDiv");

      colorSelect.addEventListener("change", () => {
        changingDiv.style.color = colorSelect.value;
      });

      bgColorSelect.addEventListener("change", () => {
        changingDiv.style.backgroundColor = bgColorSelect.value;
      });

      paddingSelect.addEventListener("change", () => {
        changingDiv.style.padding = paddingSelect.value;
      });

      fontSizeSelect.addEventListener("change", () => {
        changingDiv.style.fontsize = fontsizeSelect.value;
      });

      fontWeightSelect.addEventListener("change", () => {
        changingDiv.style.fontweight = fontweightSelect.value;
      });
