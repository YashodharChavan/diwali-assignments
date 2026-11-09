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

const src = "Mumbai"
const dest = "Guwahati"
const visited = [];


function getSrcDetails(connections, src) {
    for (const connection of connections) {
        if (connection.city === src) return connection;
    }
}

function pathExist(connections, src, dest) {
    // we have to recurse those cities which we have not visited. 
    // if we have visited those cities then simply continue the loop.

    const srcDetails = getSrcDetails(connections, src);

    // how to handle those cities which dont have any connections?? 
    if(!srcDetails) return 'skip';

    for(const connection of srcDetails.connections) {
        console.log(connection)
        if(connection === dest) return true;

        if(visited.includes(connection)) continue;

        visited.push(connection);
        const nextPath = pathExist(connections, connection, dest);
        if(nextPath === 'skip') continue;
        return nextPath;
    }

    return false;

}

console.log(pathExist(connections, src, dest))