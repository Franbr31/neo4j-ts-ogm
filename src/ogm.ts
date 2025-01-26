import { Result } from "neo4j-driver";

export const checkIfPath = async (db_result: Result) => {
    if ((await db_result).records[0].get('path') != null) {
        return true;
    }
    return false;
}