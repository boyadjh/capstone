import server from "./backend/server.js";
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});

export default 0;
