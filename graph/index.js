class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices (undirected)
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  bfsOnGraph(adjList) {
    const queue = [];
    const visited = [];
    const result = [];

    queue.push(0);
    visited[0] = true;

    while (!queue.length === 0) {
      const pop = queue.shift();
      result.push(pop);

      for (let i = 0; i < adjList[pop].length; i++) {
        if (!visited[adjList[pop][j]]) {
          visited[adjList[pop][j]] = true;
          queue.push(adjList[pop][j]);
        }
      }
    }
  }

  dfsOnGraph(vertex, visited) {
    visited[vertex] = true;

    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      if (!visited[this.adjacencyList[vertex][i]]) {
        this.dfsOnGraph(this.adjacencyList[vertex][i], visited);
      }
    }
  }

  isCycyleInDirectedGraphDFS(vertex, addList, parent, visited) {
    // Mark as vsited true
    visited[vertex] = true;

    // Found neighbours
    for (let i = 0; i < addList[vertex].length; i++) {
      if (!visited[addList[vertex][i]]) {
        if (
          this.isCycyleInDirectedGraph(
            visited[addList[vertex][i]],
            addList,
            vertex,
            visited
          )
        )
          return true;
      } else if (visited[addList[vertex][i]] && addList[vertex][i] != parent) {
        return true;
      }
    }

    return false;
  }

  isCycyleInDirectedGraphBFS(addList) {
    const queue = [];
    const visited = [];

    visited[0] = true;

    queue.push({ vertex: 0, parent: -1 });

    while (queue.length > 0) {
      const vets = queue.shift();

      const neighbors = addList[vets.vertex];

      for (let i = 0; i < neighbors; i++) {
        if (!visited[neighbors[i]])
          queue.push({ vertex: neighbors[i], parent: vets.vertex });
        else if (visited[neighbors[i]] && neighbors[i] != vets.parent)
          return true;
      }
    }
  }

  topologicalSortingUsingDFS(vertex, addList, visitedArray, st) {
    visitedArray[vertex] = true;

    for (let j = 0; j < addList[vertex].length; j++) {
      if (!visitedArray[addList[vertex][j]]) {
        this.topologicalSortingUsingDFS(
          addList[vertex][j],
          addList,
          visitedArray,
          st
        );
      }
    }

    st.push(vertex);
  }

  topologicalSortingUsingBFS(addjList) {
    const inDeg = new Array(adjList.length).fill(0); // Initialize in-degree array

    // Find in degree
    // Calculate in-degree for each vertex
    for (let vertex in adjList) {
      for (let neighbor of adjList[vertex]) {
        inDeg[neighbor]++;
      }
    }

    const queue = [];

    // Add vertex with zero node into queue
    for (let i = 0; i < inDeg.length; i++) {
      if (inDeg[i] === 0) queue.push(i);
    }

    const ans = [];

    while (queue.length > 0) {
      const top = queue.shift();

      ans.push(top);

      // Reduce in-degree of neighbors and add to queue if in-degree becomes zero
      for (let neighbor of addjList[top]) {
        inDeg[neighbor]--;
        if (inDeg[neighbor] === 0) queue.push(neighbor);
      }
    }
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", this.adjacencyList[vertex]);
    }
  }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 5);
graph.addEdge(1, 2, 9);
graph.addEdge(1, 3, 8);
graph.addEdge(2, 4, 5);
graph.addEdge(3, 4, 11);

graph.display();
