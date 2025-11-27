
class GenIAService {

    API_URL = 'http://localhost:3001/api/chat';

    async generateResponse(userMessage) {
        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            return data.text;

        } catch (error) {
            console.error("Error al comunicarse con Amuyuki (Backend):", error);
            throw new Error("No pudimos conectar con el servidor de Amuyuki. Asegúrate de que el backend esté corriendo.");
        }
    }

}

export default new GenIAService();