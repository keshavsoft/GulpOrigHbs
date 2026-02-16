// 1. The Data
const visitsData = [
    {
        pageName: "/demo/admin/index.html",
        views: "3,225",
        value: "$20",
        bounceRate: "42.55%",
        // We store the full SVG icon string to keep it flexible (red down arrow / green up arrow)
        icon: `<svg class="icon icon-xs text-danger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`
    },
    {
        pageName: "/demo/admin/forms.html",
        views: "2,987",
        value: "0",
        bounceRate: "43.24%",
        icon: `<svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`
    },
    {
        pageName: "/demo/admin/add-another-page.html",
        views: "1,200",
        value: "0",
        bounceRate: "100%",
        icon: `<svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`
    }
    // Add more rows here...
];

// 2. The Builder Function
function createVisitRow(template, data) {
    const clone = template.content.cloneNode(true);

    // Fill in the text
    clone.querySelector('.page-name').textContent = data.pageName;
    clone.querySelector('.page-views').textContent = data.views;
    clone.querySelector('.page-value').textContent = data.value;
    clone.querySelector('.bounce-rate').textContent = data.bounceRate;

    // Insert the Icon HTML
    clone.querySelector('.icon-wrapper').innerHTML = data.icon;

    return clone;
}

// 3. The Render Function
function renderVisits(data, containerId, templateId) {
    const container = document.getElementById(containerId);
    const template = document.getElementById(templateId);

    if (!container || !template) return;

    container.innerHTML = ''; // Clear current content

    data.forEach(item => {
        const row = createVisitRow(template, item);
        container.appendChild(row);
    });
}

// 4. Run it
document.addEventListener('DOMContentLoaded', () => {
    renderVisits(visitsData, 'visits-container', 'visit-template');
});