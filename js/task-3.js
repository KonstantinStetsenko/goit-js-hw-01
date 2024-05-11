
function getElementWidth(content, padding, border) {
    let contentWidth = Number.parseFloat(content);
    let paddingWidth = Number.parseFloat(padding);
    let borderWidth = Number.parseFloat(border);
    
    let totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2; // Вычисляем общую ширину
    
    return totalWidth; // Возвращаем общую ширину
}

console.log(getElementWidth("50px", "8px", "4px")); // Вывод: 74
console.log(getElementWidth("60px", "12px", "8.5px")); // Вывод: 101
console.log(getElementWidth("200px", "0px", "0px")); // Вывод: 200