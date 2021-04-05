const routes = [[-20,15], [-14,-5], [-18,-13], [-5,-3]];

console.log(solution(routes));

function solution(routes) {
    let camera = 1;
    let install_point = 30000;


    routes.sort((a,b)=> a[0] - b[0]);

    routes.forEach(([_in, _out])=>{
        if(install_point < _in){
           camera++;
           install_point = _out;
        }else{
            if(install_point > _out)
                install_point = _out;
        }
    })

    return camera
}