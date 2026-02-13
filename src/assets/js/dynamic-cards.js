// Example card data array
const cardData = [
  {
    title: "Customers",
    value: "345,678",
    subtitle: "Feb 1 - Apr 1, USA",
    change: "+7%",
    changeType: "text-success",
    icon: `<svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>`
  },
  {
    title: "Revenue",
    value: "$43,594",
    subtitle: "Feb 1 - Apr 1, GER",
    change: "+2%",
    changeType: "text-danger",
    icon: `<svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>`
  },
  {
    title: "Bounce Rate",
    value: "50.88%",
    subtitle: "Feb 1 - Apr 1",
    change: "+4%",
    changeType: "text-success",
    icon: `<svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`
  },
  {
    title: "add another card as u wish",
    value: "50.88%",
    subtitle: "Feb 13 - Apr 1",
    change: "+40%",
    changeType: "text-success",
    icon: `<svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>`
  }
];

function createCard(template, data) {
  const clone = template.content.cloneNode(true);

  // Set Icon
  const iconWrapper = clone.querySelector('.card-icon-wrapper');
  iconWrapper.innerHTML = data.icon;

  // Set Title (Mobile & Desktop)
  const titles = clone.querySelectorAll('.card-title');
  titles.forEach(el => el.textContent = data.title);

  // Set Value (Mobile & Desktop)
  const values = clone.querySelectorAll('.card-value');
  values.forEach(el => el.textContent = data.value);

  // Set Subtitle
  const subtitle = clone.querySelector('.card-subtitle');
  subtitle.textContent = data.subtitle;

  // Set Change
  const change = clone.querySelector('.card-change');
  change.textContent = data.change;
  change.className = `fw-bolder card-change ${data.changeType}`;

  return clone;
}

function renderCards(cards, containerId, templateId) {
  const container = document.getElementById(containerId);
  const template = document.getElementById(templateId);

  if (!container || !template) {
    console.error("Container or Template not found.");
    return;
  }

  // Clear existing content
  container.innerHTML = '';

  cards.forEach(card => {
    const cardElement = createCard(template, card);
    container.appendChild(cardElement);
  });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardData, 'cards-container', 'card-template');
});

