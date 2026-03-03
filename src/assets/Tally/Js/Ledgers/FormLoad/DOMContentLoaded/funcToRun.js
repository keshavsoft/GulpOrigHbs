const StartFunc = async () => {
    // Call the async function
    const visitsData = await fetchData('ledgers.json');


    const visitsData1 = [
        {
            pageName: "/demo/admin/index.html",
            views: "3,225",
            value: "$20",
            bounceRate: "42.55%",

            icon: `<svg class="icon icon-xs text-danger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`
        },
        {
            pageName: "/demo/admin/forms.html",
            views: "2,987",
            value: "0",
            bounceRate: "0.24%",
            icon: `<svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`
        },
        {
            pageName: "/demo/admin/add-another-page.html",
            views: "1,200",
            value: "0",
            bounceRate: "100%",
            icon: `<svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`
        }

    ];

    function createVisitRow1(template, data) {

        const clone = template.content.cloneNode(true);

        clone.querySelector('.page-name').textContent = data.LedgerName;
        clone.querySelector('.page-views').textContent = data.LedgerParentName;
        clone.querySelector('.page-value').textContent = data.LedgerType;

        return clone;
    };

    function createVisitRow(template, data, index) {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.visible-number').textContent = index + 1;   // dynamic
        clone.querySelector('.row-number').textContent = index + 1;       // original (fixed)

        // clone.querySelector('.row-number').textContent = index + 1;
        clone.querySelector('.page-name').textContent = data.LedgerName;
        clone.querySelector('.page-views').textContent = data.LedgerParentName;
        clone.querySelector('.page-value').textContent = data.LedgerType;

        return clone;
    }

    function renderVisits(data, containerId, templateId) {
        const container = document.getElementById(containerId);
        const template = document.getElementById(templateId);

        if (!container || !template) return;

        container.innerHTML = '';

        data.forEach((item, index) => {
            const row = createVisitRow(template, item, index);
            container.appendChild(row);
        });

        const totalRows = container.querySelectorAll("tr").length;
        document.getElementById("ledgerCountBtn").textContent = `${totalRows} / ${totalRows}`;
    };

    // 4. Run it
    renderVisits(visitsData, 'visits-container', 'visit-template');
};

async function fetchData(url) {
    try {
        // Wait for the network request to complete
        const response = await fetch(url);

        // Check if the request was successful (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Wait for the response body to be parsed as JSON
        const data = await response.json();
        // console.log(data);
        return data;

    } catch (error) {
        // Handle network errors or errors thrown in the try block
        console.error('Error fetching data:', error);
    }
};

// document.getElementById("topbarInputIconLeft").addEventListener("keyup", function () {
//     const filter = this.value.toLowerCase();
//     const rows = document.querySelectorAll("#visits-container tr");

//     rows.forEach(row => {
//         const text = row.textContent.toLowerCase();
//         row.style.display = text.includes(filter) ? "" : "none";
//     });
// });

const input = document.getElementById("topbarInputIconLeft");

input.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#visits-container tr");

    rows.forEach(row => {
        let rowText = row.textContent.toLowerCase();
        let matchFound = rowText.includes(filter);

        row.style.display = matchFound ? "" : "none";

        // Remove old highlights first
        row.querySelectorAll("td").forEach(cell => {
            cell.innerHTML = cell.textContent;
        });

        // Add new highlight if match
        if (filter && matchFound) {
            row.querySelectorAll("td").forEach(cell => {
                let text = cell.textContent;
                let regex = new RegExp(`(${filter})`, "gi");
                cell.innerHTML = text.replace(regex, `<span class="highlight">$1</span>`);
            });
        }
    });

    let visibleIndex = 1;

    document.querySelectorAll("#visits-container tr").forEach(row => {
        if (row.style.display !== "none") {
            row.querySelector(".visible-number").textContent = visibleIndex++;
        }
    });

    // const rows = document.querySelectorAll("#visits-container tr");
    const total = rows.length;
    const visible = [...rows].filter(r => r.style.display !== "none").length;

    document.getElementById("ledgerCountBtn").textContent = `${visible} / ${total}`;
});

export { StartFunc };
