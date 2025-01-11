const extractFirstH1 = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const h1Element = tempElement.querySelector("h1");
  return h1Element ? h1Element.textContent : "";
};
const extractFirstH3 = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const h3Element = tempElement.querySelector("h3");
  return h3Element ? h3Element.textContent : "";
};
const extractSecondH3 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h3Elements = tempElement.getElementsByTagName("h3");
  if (h3Elements.length >= 2) {
    return h3Elements[1].textContent.trim();
  } else {
    return "";
  }
};
const extractThirdH3 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h3Elements = tempElement.getElementsByTagName("h3");
  if (h3Elements.length >= 2) {
    return h3Elements[2].textContent.trim();
  } else {
    return "";
  }
};
const extractFourthH3 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h3Elements = tempElement.getElementsByTagName("h3");
  if (h3Elements.length >= 2) {
    return h3Elements[3].textContent.trim();
  } else {
    return "";
  }
};
const extractFifthH3 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h3Elements = tempElement.getElementsByTagName("h3");
  if (h3Elements.length >= 2) {
    return h3Elements[4].textContent.trim();
  } else {
    return "";
  }
};
const removeHTMLTags = (htmlString) => {
  // Remove the first <h3> element from the HTML string
  const regex = /(<h1[^>]*>.*?<\/h1>)/i;
  const firstH1Match = htmlString.match(regex);
  if (firstH1Match) {
    htmlString = htmlString.replace(firstH1Match[0], "");
  }

  // Remove all other HTML tags
  const sanitizedString = htmlString.replace(/(<([^>]+)>)/gi, "");
  return sanitizedString;
};
const extractFirstParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[0].textContent.trim();
  } else {
    return "";
  }
};
const extractSecondParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[1].textContent.trim();
  } else {
    return "";
  }
};
const extractThirdParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[2].textContent.trim();
  } else {
    return "";
  }
};
const extractfourthParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[3].textContent.trim();
  } else {
    return "";
  }
};
const extractfifthParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[4].textContent.trim();
  } else {
    return "";
  }
};
const extractSixthParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[5].textContent.trim();
  } else {
    return "";
  }
};
const extractSeventhParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[6].textContent.trim();
  } else {
    return "";
  }
};
const extractEightParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[7].textContent.trim();
  } else {
    return "";
  }
};
const extractNinthParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[8].textContent.trim();
  } else {
    return "";
  }
};
const extractTenthParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[9].textContent.trim();
  } else {
    return "";
  }
};
const extractEleventhParagraph = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const pElements = tempElement.getElementsByTagName("p");

  if (pElements.length >= 1) {
    return pElements[10].textContent.trim();
  } else {
    return "";
  }
};
const extractFirstH4 = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  const h4Element = tempElement.querySelector("h4");
  return h4Element ? h4Element.textContent : "";
};
const extractSecondH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[1].textContent.trim();
  } else {
    return "";
  }
};
const extractThirdH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[2].textContent.trim();
  } else {
    return "";
  }
};
const extractFourthH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[3].textContent.trim();
  } else {
    return "";
  }
};
const extractFifthH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[4].textContent.trim();
  } else {
    return "";
  }
};
const extractSixthH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[5].textContent.trim();
  } else {
    return "";
  }
};
const extractSeventhH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[6].textContent.trim();
  } else {
    return "";
  }
};
const extractEightH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[7].textContent.trim();
  } else {
    return "";
  }
};
const extractNinthH4 = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const h4Elements = tempElement.getElementsByTagName("h4");
  if (h4Elements.length >= 2) {
    return h4Elements[8].textContent.trim();
  } else {
    return "";
  }
};
const extractFirstLi = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const LiElements = tempElement.getElementsByTagName("li");

  if (LiElements.length >= 1) {
    return LiElements[0].textContent.trim();
  } else {
    return "";
  }
};
const extractSecondLi = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const LiElements = tempElement.getElementsByTagName("li");

  if (LiElements.length >= 1) {
    return LiElements[1].textContent.trim();
  } else {
    return "";
  }
};
const extractThirdLi = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const LiElements = tempElement.getElementsByTagName("li");

  if (LiElements.length >= 1) {
    return LiElements[2].textContent.trim();
  } else {
    return "";
  }
};
const extractFourthLi = (content) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;

  const LiElements = tempElement.getElementsByTagName("li");

  if (LiElements.length >= 1) {
    return LiElements[3].textContent.trim();
  } else {
    return "";
  }
};
export const Extraction = {
  RemoveHTML: removeHTMLTags,
  FirstH1: extractFirstH1,
  FirstH3: extractFirstH3,
  SecondH3: extractSecondH3,
  ThirdH3: extractThirdH3,
  FourthH3: extractFourthH3,
  FifthH3: extractFifthH3,
  FirstPara: extractFirstParagraph,
  SecondPara: extractSecondParagraph,
  ThirdPara: extractThirdParagraph,
  FourthPara: extractfourthParagraph,
  FifthPara: extractfifthParagraph,
  SixthPara: extractSixthParagraph,
  SeventhPara: extractSeventhParagraph,
  EightPara: extractEightParagraph,
  NinthPara: extractNinthParagraph,
  ThenthPara: extractTenthParagraph,
  EleventhPara: extractEleventhParagraph,
  FirstH4: extractFirstH4,
  SecondH4: extractSecondH4,
  ThirdH4: extractThirdH4,
  FourthH4: extractFourthH4,
  FifthH4: extractFifthH4,
  SixthH4: extractSixthH4,
  SeventhH4: extractSeventhH4,
  EightH4: extractEightH4,
  NinthH4: extractNinthH4,
  FirstLi: extractFirstLi,
  SecondLi: extractSecondLi,
  ThirdLi: extractThirdLi,
  ForuthLi: extractFourthLi,
};
