import app from "./app.js";
import "dotenv/config";
import connectDB from "./db.js";

const PORT = process.env.PORT || 3000;

connectDB();
app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
});
