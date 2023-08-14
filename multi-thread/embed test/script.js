document.addEventListener('DOMContentLoaded', () => {
    const webhookForm = document.getElementById('webhookForm');
    const resultDiv = document.getElementById('result');
    const sendToThreadCheckbox = document.getElementById('sendToThread');
    const threadIdInput = document.getElementById('threadId');

    sendToThreadCheckbox.addEventListener('change', () => {
        threadIdInput.disabled = !sendToThreadCheckbox.checked;
    });

    webhookForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const platform = document.getElementById('platform').value;
        const webhookUrl = document.getElementById('webhookUrl').value;
        const message = document.getElementById('message').value;
        const sendToThread = sendToThreadCheckbox.checked;
        const threadId = threadIdInput.value;

        let url = webhookUrl;

        if (sendToThread && threadId) {
            url += `?thread_id=${threadId}`;
        }

        const payload = {
            content: message
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json();

            if (response.ok) {
                resultDiv.textContent = `Message sent successfully to ${platform}. Response: ${JSON.stringify(responseData)}`;
            } else {
                resultDiv.textContent = `Failed to send message. Response: ${JSON.stringify(responseData)}`;
            }
        } catch (error) {
            resultDiv.textContent = `An error occurred: ${error.message}`;
        }
    });
});
