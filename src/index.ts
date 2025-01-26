import * as dotenv from 'dotenv';
import neo4j from 'neo4j-driver';
import { createDriver, getDriver } from './neo4j/driver-connection';
import { getrevolutHierarchyQuery } from './repository/hierarchy.repository';
dotenv.config();

//export { helloWorld } from './hello-world';

const main = async () => {
    createDriver();

    const driver = getDriver();
    let nodes_result;
    let path_result;

    try {
        const session = driver.session();
        nodes_result = await session.run('match (h:Hierarchy)-[r*]->(plh) return h,r,plh');
        path_result = await session.run(getrevolutHierarchyQuery);
        console.log("Resultado con nodos y rels:  " + JSON.stringify(nodes_result.records[0], null, 2));
        //console.log("Resultado con path:  " + JSON.stringify(path_result.records[0], null, 2));
        session.close
    } catch (error) {
        console.error('Error creating session:', error);
    } finally {
        driver.close();
    }
}

main();