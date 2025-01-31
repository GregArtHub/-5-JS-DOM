document.getElementById('cardForm').addEventListener('input', function() {
    const bankName = document.getElementById('bankName').value;
    const cardType = document.getElementById('cardType').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;

    document.getElementById('previewCardNumber').textContent = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    document.getElementById('previewCardHolder').textContent = cardHolder;
    document.getElementById('previewExpiryDate').textContent = expiryDate.slice(5, 7) + '/' + expiryDate.slice(2, 4);

    const bankLogo = document.getElementById('bankLogo');
    const cardLogo = document.getElementById('cardLogo');

    if (bankName) {
        bankLogo.src = `https://logo.clearbit.com/${bankName.toLowerCase().replace(/\s/g, '')}.com`;
        bankLogo.style.display = 'block';
    } else {
        bankLogo.style.display = 'none';
    }

    if (cardType) {
        cardLogo.src = `https://logo.clearbit.com/${cardType.toLowerCase()}.com`;
        cardLogo.style.display = 'block';
    } else {
        cardLogo.style.display = 'none';
    }
});

document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bankName = document.getElementById('bankName').value;
    const cardType = document.getElementById('cardType').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;

    const tableBody = document.querySelector('#cardTable tbody');
    const newRow = tableBody.insertRow();

    newRow.insertCell().textContent = bankName;
    newRow.insertCell().textContent = cardType;
    newRow.insertCell().textContent = cardNumber.replace(/(\d{4})/g, '$1 ').trim();
    newRow.insertCell().textContent = cardHolder;
    newRow.insertCell().textContent = expiryDate.slice(5, 7) + '/' + expiryDate.slice(2, 4);

    document.getElementById('cardForm').reset();
    document.getElementById('previewCardNumber').textContent = '#### #### #### ####';
    document.getElementById('previewCardHolder').textContent = 'Имя держателя';
    document.getElementById('previewExpiryDate').textContent = 'ММ/ГГ';
    document.getElementById('bankLogo').style.display = 'none';
    document.getElementById('cardLogo').style.display = 'none';
});