# API REST Records v1 🏋️‍♂️

Microservicio RESTful para la gestión de records (`records`) desarrollado con Node.js, Express y TypeScript.

## 🚀 Despliegue Rápido

El proyecto está preparado para desplegarse fácilmente en plataformas como **Render**, **Railway**, **Fly.io** o cualquier VPS.

* **Comando de instalación / Build:** `npm install`
* **Comando de inicio:** `npm start`
* **Puerto:** Toma automáticamente `process.env.PORT` o usa el `3002` por defecto.

---

## 🛠️ Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Angeell04/apiV1records.git
   cd apiV1records
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Iniciar en producción:
   ```bash
   npm start
   ```

---

## 📡 Endpoints (`/api/v1/records`)

| Método | Endpoint | Descripción | Parámetros / Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/records` | Obtiene todos los records (con caché de 1 min) | `?member=<nombre>` (opcional) |
| `GET` | `/api/v1/records/:id` | Obtiene un record específico por ID | `id` en URL |
| `POST` | `/api/v1/records` | Crea un nuevo record | JSON con `workout`, `record`, `memberId`, `member` |
| `PATCH` | `/api/v1/records/:id` | Actualiza un record existente | `id` en URL y campos a modificar en JSON |
| `DELETE` | `/api/v1/records/:id` | Elimina un record por su ID | `id` en URL (devuelve 204 No Content) |

### Ejemplo de Body para POST / PATCH:
```json
{
  "workout": "61dbae02-c147-4e28-863c-db7bd402b2d6",
  "record": "180 reps",
  "memberId": "12a410bc-849f-4e7e-bfc8-4ef283ee4b19",
  "member": "Manuel"
}
```
