const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort((a, b) => {
    const cleanString = (str) => str.replace(/^(A|An|The) /i, '');

    const cleanA = cleanString(a);
    const cleanB = cleanString(b);

    return cleanA.localeCompare(cleanB);
});

const list = document.querySelector('#bands')

for (i=0; i<bands.length; i++) {
    let li = document.createElement('li')
    li.innerText = bands[i];
    list.appendChild(li)
}
