// Code your solution here
function findMatching(name,string){
    let result = name.filter(word => word === string);
    if(name.find(word => word == string) != string){
        return result;
    }
    return result;
}
