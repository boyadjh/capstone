import app from "./backend/app.js";
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});

export default 0;
