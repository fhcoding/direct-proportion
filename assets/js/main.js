(function () {
  const directProportion = (vOne, vSc, vTr) => {
    if (!(vOne && vSc && vTr)) return;
    vOne = parseInt(vOne);
    vSc = parseInt(vSc);
    vTr = parseInt(vTr);
    if (!vOne) return;
    const result = (vSc * vTr) / vOne;
    return Math.round((result + Number.EPSILON) * 100) / 100;
  };
  const handleAllMinViewportWidth = () => {
    const views = document.querySelectorAll(".min-h-screen");
    const height = window.innerHeight;
    views.forEach((v) => (v.style = `min-height:${height}px`));
  };

  const directProportionHandler = () => {
    handleAllMinViewportWidth();
    const container = document.querySelector(".direct-proportion");
    if (!container) return;
    const resultContainer = container.querySelector(".result");
    resultContainer.setAttribute("disabled", "true");
    resultContainer.classList.add("cursor-not-allowed");

    const numOne = container.querySelector('.number-1 input[type="number"]');
    const numSc = container.querySelector('.number-2 input[type="number"]');
    const numTr = container.querySelector('.number-3 input[type="number"]');

    const keyHandler = () => {
      const vOne = numOne.value;
      const vSc = numSc.value;
      const vTr = numTr.value;
      const result = directProportion(vOne, vSc, vTr);

      if (result) {
        return (resultContainer.value = result);
      }
      resultContainer.value = null;
    };

    numOne.onkeyup = numSc.onkeyup = numTr.onkeyup = keyHandler;

    numOne.value = Math.floor(Math.random() * 100) + 1;
    numSc.value = Math.floor(Math.random() * 100) + 1;
    numTr.value = Math.floor(Math.random() * 100) + 1;
    keyHandler();
  };
  window.addEventListener("load", directProportionHandler);
})();
