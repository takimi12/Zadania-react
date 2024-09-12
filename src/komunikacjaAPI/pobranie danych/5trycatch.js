const newObject = {
    prop1: "lorem",
    prop2: 1231203
};

async function updateResource() {
    try {
        const response = await fetch(url, {
            method: 'PUT',  // Można zmienić na PATCH w zależności od przypadku
            body: JSON.stringify(newObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log('Resource updated successfully:', data);

    } catch (error) {
        console.error('Error during the update process:', error.message);
    }
}

updateResource();
