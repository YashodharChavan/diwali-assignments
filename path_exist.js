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
const dest = "Kolkata"

function getSrcDetails(connections, src) {
    for (const connection of connections) {
        if (connection.city === src) return connection;
    }
}

function pathExist(connections, src, dest, orgSrc = src) {
    const srcDetails = getSrcDetails(connections, src);

    if(!srcDetails) return 'skip';

    for (const connection of srcDetails.connections) {
        console.log('src: ', src);
        console.log('dest: ', dest);
        console.log('next station: ', connection);
        console.log()

        if (connection === dest) return true;
        if (connection === orgSrc) return 'skip';

        const nextPath = pathExist(connections, connection, dest, orgSrc)
        if(nextPath === 'skip') continue;
        return nextPath;
    }

    return false; 
}

console.log(pathExist(connections, src, dest))