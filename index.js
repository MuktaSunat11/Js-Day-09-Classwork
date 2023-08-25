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