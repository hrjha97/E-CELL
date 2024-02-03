type Server = {
    Production ?: boolean;
    Development ?: boolean;
}

export const serverUrl = (Server : Server):string=>{
    if (Server.Production){
        return 'http://localhost:8001';
    }
    return `http://localhost:8000`;
}