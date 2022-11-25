
function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function namedFunction(){
        return "sophie";
    }
}

function returnsAnAnonymousFunction(){
    return()=>"amazing"
}
