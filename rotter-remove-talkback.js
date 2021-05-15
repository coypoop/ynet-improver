var style = document.createElement('style');
document.head.appendChild(style);
if (!document.title.includes("אשכול")) {
	style.sheet.insertRule('font > center { display: none; }');
}
