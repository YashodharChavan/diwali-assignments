const connections = [
    {
        city: "Mumbai",
        connections: ["Bangalore", "New Delhi"],
    },
    {
        city: "New Delhi",
        connections: ["Bangalore", "Mumbai", "Kolkata"],
    },
    {
        city: "Bangalore",
        connections: ["Chennai", "Mumbai"],
    },
    {
        city: "Kolkata",
        connections: ["Shillong"],
    },
    {
        city: "Shillong",
        connections: ["Guwahati"],
    },
];

const src = "Bangalore";
const dest = "Kolkata";
const visited = [];
const path = [];

function getSrcDetails(src) {
    for (const connection of connections) {
        if (connection.city === src) return connection;
    }
}

function pathExist(src, dest) {
    path.push(src);
    if (src === dest) return true;
    visited.push(src);

    const srcDetails = getSrcDetails(src);
    if (!srcDetails) return;

    for (const connection of srcDetails.connections) {
        if (visited.includes(connection)) continue;

        const next = pathExist(connection, dest, src);
        if (!next) {
            const index = path.indexOf(connection);
            if (index !== -1) {
                path.splice(index, 1);
            }
            continue;
        }
        return next;
    }

    return false;
}

console.log(
    `does path exist between ${src} and ${dest}: `,
    pathExist(src, dest),
);
console.log("PATH: ", path);
