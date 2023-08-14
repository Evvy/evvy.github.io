document.addEventListener('DOMContentLoaded', () => {
    const webhookForm = document.getElementById('webhookForm');
    const resultDiv = document.getElementById('result');
    const sendToThreadCheckbox = document.getElementById('sendToThread');
    const threadIdInput = document.getElementById('threadId');
    const importThreadsInput = document.getElementById('importThreads');
    const threadListDiv = document.getElementById('threadList');

    sendToThreadCheckbox.addEventListener('change', () => {
        threadIdInput.disabled = !sendToThreadCheckbox.checked;
        importThreadsInput.disabled = !sendToThreadCheckbox.checked;
        threadListDiv.innerHTML = ""; // Clear imported thread list
    });

    importThreadsInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            parseThreadIdsFromFile(file);
        }
    });

    function parseThreadIdsFromFile(file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const threadIds = event.target.result.split('\n').map(threadId => threadId.trim());
            displayThreadIds(threadIds);
        };
        reader.readAsText(file);
    }

    function displayThreadIds(threadIds) {
        threadListDiv.innerHTML = "";
        threadIds.forEach((threadId) => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'selectedThreads';
            checkbox.value = threadId;
            checkbox.id = `thread_${threadId}`;

            const label = document.createElement('label');
            label.htmlFor = `thread_${threadId}`;
            label.textContent = threadId;

            threadListDiv.appendChild(checkbox);
            threadListDiv.appendChild(label);
            threadListDiv.appendChild(document.createElement('br'));
        });
    }

    webhookForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const platform = document.getElementById('platform').value;
        const webhookUrl = document.getElementById('webhookUrl').value;
        const message = document.getElementById('message').value;
        const sendToThread = sendToThreadCheckbox.checked;
        const threadId = threadIdInput.value;

        let selectedThreadIds = [];

        if (sendToThread) {
            if (threadId) {
                selectedThreadIds.push(threadId);
            }

            document.querySelectorAll('input[name="selectedThreads"]:checked').forEach((checkbox) => {
                selectedThreadIds.push(checkbox.value);
            });
        }

        let url = webhookUrl;

        if (sendToThread && selectedThreadIds.length > 0) {
            url += `?thread_id=${selectedThreadIds.join(',')}`;
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
