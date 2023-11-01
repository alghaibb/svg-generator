/**
 * Generate SVG based on the provided details.
 *
 * @param {Object} details - The details for SVG generation.
 * @returns {string} - The generated SVG string.
 */
function generateSVG(details) {
    let svgContent = '<svg width="200" height="200">';

    switch (details.shape) {
        case 'circle':
            svgContent += `<circle cx="100" cy="100" r="50" fill="${details.color}" />`;
            break;
        case 'square':
            svgContent += `<rect x="50" y="50" width="100" height="100" fill="${details.color}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="100,10 190,190 10,190" fill="${details.color}" />`;
            break;
    }

    svgContent += `<text x="100" y="100" fill="${details.textColor}" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">${details.name}</text>`;
    svgContent += '</svg>';

    return svgContent;
}

module.exports = generateSVG;
