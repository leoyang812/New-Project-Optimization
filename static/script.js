document.getElementById('optimization-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const addresses = document.getElementById('addresses').value.split(',');
    const response = await fetch('/optimize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresses }),
    });
    const data = await response.json();
    const results = document.getElementById('results');
    if (data.distance !== undefined) {
        results.innerHTML = `Optimized Path Distance: ${data.distance} km`;
    } else {
        results.innerHTML = `Error: ${data.error}`;
    }
});
