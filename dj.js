function dijkstra(graph, start) {
    
    const distances = {};
    
    const priorityQueue = new PriorityQueue();
    
    const previous = {};
    
    const shortestPath = {};
    
    const visited = {};

    for (let vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            priorityQueue.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            priorityQueue.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    while (!priorityQueue.isEmpty()) {
        
        const currentVertex = priorityQueue.dequeue().value;

        visited[currentVertex] = true;

        for (let neighbor in graph[currentVertex]) {
            
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                priorityQueue.enqueue(neighbor, distance);
            }
        }
    }
    
   
    for (let vertex in distances) {
        if (vertex !== start) {
            let path = [];
            let currentVertex = vertex;
            while (currentVertex !== null) {
                path.unshift(currentVertex);
                currentVertex = previous[currentVertex];
            }
            shortestPath[vertex] = { distance: distances[vertex], path: path };
        }
    }
    
    return shortestPath;
}
