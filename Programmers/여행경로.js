const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];

console.log(solution(tickets));
function solution(tickets) {
    let routes = [];
    const travelroute = (extraTicket, destination, route) => {
        if(extraTicket.length === 0) routes.push(route);

        extraTicket.forEach(([departure, arrival], i) => {
            if(departure === destination){
                const newExtraTicket = extraTicket.slice();
                newExtraTicket.splice(i, 1);
                travelroute(newExtraTicket, arrival, route.concat(arrival));
            }
        });

    }
    travelroute(tickets, "ICN", ["ICN"]);
    return routes.sort()[0];
}