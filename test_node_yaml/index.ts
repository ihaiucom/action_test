import fs from "fs";
import YAML from "yaml";



declare interface MqttConnOpt{
    host: string;
    port: number;
    user: string;
    pwd: string;
    clean: boolean;
    id: string;
}
declare interface DBConnOpt{
    host: string;
    port: number;
    user: string;
    pwd: string;
    database: string;
}
declare interface RedisConnOpt{
    host: string;
    port: number;
    pwd: string;
    db: number;
}

export {
    MqttConnOpt,
    DBConnOpt,
    RedisConnOpt,
    Config,
}
  
  
class Config {
    rxmqtt: MqttConnOpt;
    dbsql: DBConnOpt;
    redis: RedisConnOpt;
    /**
     * http 端口
     */
    http: number;
    /**
     * rpcUrl 服务器地址
     */
    rpcUrl: string;
    /**
     * 是否启用mqtt
     */
    enableMqtt: boolean;
    /**
     * 是否启用mariadb
     */
    enableDB: boolean;
    /**
     * 是否启用redis
     */
    enableRedis: boolean;
    /**
     * 是否启用websocket
     */
    enableWS: boolean;
    /**
     * 是否启用RPC
     */
    enableRPC: boolean;
    /**
     * 离线超时时间, 毫秒
     */
    offlineTimeout: number;
    /**
     * 缓存存储间隔, 毫秒
     */
    cacheInterval: number;

    constructor(){
        try{
        let buffer = fs.readFileSync('test.yaml', 'utf8');
        let config = YAML.parse(buffer);
        this.rxmqtt = config['rxmqtt'];
        this.dbsql = config['dbsql'];
        this.redis = config['redis'];
        this.http = config['http'];
        this.rpcUrl = config['rpcUrl'];
        this.enableMqtt = config['enableMqtt'];
        this.enableDB = config['enableDB'];
        this.enableRedis = config['enableRedis'];
        this.enableWS = config['enableWS'];
        this.enableRPC = config['enableRPC'];
        this.offlineTimeout = config['offlineTimeout'];
        this.cacheInterval = config['cacheInterval'];
        }catch(err){
        console.log(err)
        }
    }

    /**
     * save
     */
    public save() {
        try{
        fs.writeFileSync('config.yaml', YAML.stringify(this))
        }catch(err){
        console.log(err)
        }
    }
}

var config = new Config();
console.log(config);