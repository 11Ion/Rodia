export async function UploadData() {
    try {
        const response = await fetch('https://rodia1.000webhostapp.com/api.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Fetch data error:', error);
        throw new Error('Eroare la încărcarea datelor');
    }
}
