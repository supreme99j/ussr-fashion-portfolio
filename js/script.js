const repeatText1 = document.getElementById('repeatText1');
const textContent = repeatText1.textContent; 
repeatText1.textContent = textContent.repeat('20');
const repeatText2 = document.getElementById('repeatText2');
repeatText2.textContent = textContent.repeat('20');