
var distancesArray = [ [0, 210, 132, 226, 306, 289, 209, 306, 448, 391, 333, 343, 309, 247, 327, 320],
    [210, 0, 161, 263, 187, 114, 211, 268, 367, 353, 335, 350, 316, 273, 353, 355],
    [132, 161, 0, 118, 200, 229, 104, 198, 340, 283, 225, 228, 193, 128, 209, 207],
    [226, 263, 118, 0, 286, 341, 189, 287, 429, 372, 314, 319, 248, 148, 211, 114],
    [306, 187, 200, 286, 0, 116, 155, 97, 219, 183, 197, 254, 258, 262, 312, 380],
    [289, 114, 229, 341, 116, 0, 206, 197, 262, 281, 295, 345, 311, 314, 365, 422],
    [209, 211, 104, 189, 155, 206, 0, 143, 282, 226, 145, 167, 137, 139, 193, 274],
    [306, 268, 198, 287, 97, 197, 143, 0, 168, 109, 127, 182, 232, 260, 286, 368],
    [448, 367, 340, 429, 219, 262, 282, 168, 0, 73, 247, 289, 337, 402, 391, 473],
    [391, 353, 283, 372, 183, 281, 226, 109, 73, 0, 187, 229, 278, 342, 332, 414],
    [333, 335, 225, 314, 197, 295, 145, 127, 247, 187, 0, 81, 129, 252, 183, 265],
    [343, 350, 228, 319, 254, 345, 167, 182, 289, 229, 81, 0, 83, 210, 138, 220],
    [309, 316, 193, 248, 258, 311, 137, 232, 337, 278, 129, 83, 0, 132, 67, 148],
    [247, 273, 128, 148, 262, 314, 139, 260, 402, 342, 252, 210, 132, 0, 100, 145],
    [327, 353, 209, 211, 312, 365, 193, 286, 391, 332, 183, 138, 67, 100, 0, 112],
    [320, 355, 207, 114, 380, 422, 274, 368, 473, 414, 265, 220, 148, 145, 112, 0]
];
// Stałe
const NUM_ANTS = 30; // Liczba mrówek
const ALPHA = 1; // Waga feromonu
const BETA = 2; // Waga atrakcyjności
const RHO = 0.1; // Współczynnik parowania feromonu
const Q = 100; // Ilość feromonu pozostawiana przez mrówkę
const MAX_ITERATIONS = 200; // Maksymalna liczba iteracji

// Macierz feromonów
const pheromones = Array.from({ length: distancesArray.length }, () => Array(distancesArray.length).fill(1));

// Funkcja obliczająca długość trasy
function calculateRouteLength(route) {
    let length = 0;
    for (let i = 0; i < route.length - 1; i++) {
        length += distancesArray[route[i]][route[i + 1]];
    }
    length += distancesArray[route[route.length - 1]][route[0]]; // Powrót do miasta startowego
    return length;
}

// Funkcja obliczająca prawdopodobieństwo wyboru kolejnego miasta przez mrówkę
function calculateProbabilities(currentCity, visitedCities, pheromoneLevel) {
    const probabilities = [];
    let total = 0;

    for (let i = 0; i < distancesArray.length; i++) {
        if (!visitedCities.includes(i)) {
            const attractiveness = 1 / distancesArray[currentCity][i];
            const pheromone = pheromoneLevel[currentCity][i];
            probabilities.push(Math.pow(pheromone, ALPHA) * Math.pow(attractiveness, BETA));
            total += probabilities[probabilities.length - 1];
        } else {
            probabilities.push(0);
        }
    }

    return probabilities.map(prob => prob / total);
}

// Algorytm mrówkowy
function antColonyOptimization() {
    let bestRoute = [];
    let bestLength = Infinity;

    for (let iter = 0; iter < MAX_ITERATIONS; iter++) {
        // Inicjalizacja mrówek
        const antRoutes = Array.from({ length: NUM_ANTS }, () => []);

        // Dla każdej mrówki
        for (let ant = 0; ant < NUM_ANTS; ant++) {
            let currentCity = 0; // Warszawa jako miasto startowe
            const visitedCities = [currentCity];

            // Pętla po miastach
            while (visitedCities.length < distancesArray.length) {
                const probabilities = calculateProbabilities(currentCity, visitedCities, pheromones);
                const nextCity = selectNextCity(probabilities);
                antRoutes[ant].push(nextCity);
                visitedCities.push(nextCity);
                currentCity = nextCity;
            }

            // Dodaj powrót do miasta startowego
            antRoutes[ant].push(0);

            // Aktualizacja feromonów na trasie mrówki
            const routeLength = calculateRouteLength(antRoutes[ant]);
            if (routeLength < bestLength) {
                bestLength = routeLength;
                bestRoute = [...antRoutes[ant]];
            }
            updatePheromones(antRoutes[ant], routeLength);
        }

        // Parowanie feromonów
        for (let i = 0; i < pheromones.length; i++) {
            for (let j = 0; j < pheromones.length; j++) {
                pheromones[i][j] *= (1 - RHO);
            }
        }
    }

    return { route: bestRoute, length: bestLength };
}

// Funkcja wybierająca kolejne miasto na podstawie prawdopodobieństw
function selectNextCity(probabilities) {
    const random = Math.random();
    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
        sum += probabilities[i];
        if (random <= sum) {
            return i;
        }
    }
}

// Funkcja aktualizująca feromony na trasie mrówki
function updatePheromones(route, length) {
    const pheromoneDelta = Q / length;
    for (let i = 0; i < route.length - 1; i++) {
        const from = route[i];
        const to = route[i + 1];
        pheromones[from][to] += pheromoneDelta;
        pheromones[to][from] += pheromoneDelta;
    }
}

// Wywołanie algorytmu i wypisanie najlepszego znalezionego rozwiązania
const { route, length } = antColonyOptimization();
console.log("Najlepsza trasa:", route);
console.log("Długość trasy:", length);
